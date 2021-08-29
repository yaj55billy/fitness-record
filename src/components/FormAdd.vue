<template>
  <form action="" class="form">
    <div class="form-group">
      <label for="trainDate" class="form-group__label">訓練日期</label>
      <input
        type="date"
        id="trainDate"
        name="trainDate"
        class="form-group__input"
        v-model="trainDate"
      />
    </div>
    <ul class="form-train">
      <li v-for="(list, index) in record" :key="list" class="form-train__list">
        <div class="form-group">
          <label :for="`trainLoad${index}`" class="form-group__label"
            >訓練重量</label
          >
          <input
            type="text"
            :id="`trainLoad${index}`"
            :name="`trainLoad${index}`"
            class="form-group__input"
            placeholder="訓練重量(kg)"
            v-model.number="list.load"
          />
        </div>
        <div class="form-group">
          <label :for="`trainRep${index}`" class="form-group__label"
            >訓練次數</label
          >
          <select
            :name="`trainRep${index}`"
            :id="`trainRep${index}`"
            class="form-group__select"
            v-model.number="list.rep"
          >
            <option v-for="num in 20" :key="num" :value="num">{{ num }}</option>
          </select>
        </div>
        <div class="form-group">
          <label :for="`trainSet${index}`" class="form-group__label"
            >訓練組數</label
          >
          <select
            :name="`trainSet${index}`"
            :id="`trainSet${index}`"
            class="form-group__select"
            v-model.number="list.set"
          >
            <option v-for="num in 20" :key="num" :value="num">{{ num }}</option>
          </select>
        </div>
      </li>
    </ul>
    <div class="form-conctrl">
      <a @click.prevent="addRecord" class="form-conctrl__btn">
        <!-- 新增訓練 -->
        <i class="fas fa-plus"></i>
      </a>
      <a @click.prevent="removeRecord" class="form-conctrl__btn">
        <!-- 刪除訓練 -->
        <i class="fas fa-times"></i>
      </a>
    </div>
    <div class="form-submit">
      <button type="button" class="btn btn-lg" @click="submitRecord">
        送出紀錄
      </button>
    </div>
  </form>
</template>

<script>
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { apiPostSquatData } from "@/api.js";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const trainDate = ref("");

    const getToday = () => {
      const getDate = new Date(),
        getYear = getDate.getFullYear(),
        getMonth = getDate.getMonth() + 1,
        getDay = getDate.getDate(),
        today = `${getYear}-${(getMonth < 10 ? "0" : "") + getMonth}-${(getDay <
        10
          ? "0"
          : "") + getDay}`;

      trainDate.value = today;
    };

    onMounted(() => {
      getToday();
    });

    const record = ref([
      {
        load: 20,
        rep: 1,
        set: 1,
      },
    ]);

    const addRecord = () => {
      record.value.push({
        load: 20,
        rep: 1,
        set: 1,
      });
    };

    const removeRecord = () => {
      record.value.pop();
    };

    const submitRecord = () => {
      const tempData = {
        date: trainDate.value,
        train: [],
        totalTrain: 0,
      };

      record.value.forEach((item, index, ary) => {
        tempData.train.push(item);
        if (item.load === "") {
          item.load = 0;
        }
        tempData.totalTrain += item.load * item.rep * item.set;
      });

      store.dispatch("isLoadingHandler");

      apiPostSquatData(tempData)
        .then(function() {
          store.dispatch("getSquatData").then(() => {
            store.dispatch("isLoadingHandler");
            router.push({ path: "/view" });
          });
        })
        .catch(function(e) {
          console.log(e);
        });
    };

    return {
      trainDate,
      record,
      addRecord,
      removeRecord,
      submitRecord,
    };
  },
};
</script>

<style></style>
