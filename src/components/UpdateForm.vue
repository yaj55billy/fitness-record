<template>
  <form class="form">
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
      <li
        v-for="(list, index) in trainRecord"
        :key="list"
        class="form-train__list"
      >
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
        <i class="fas fa-plus"></i>
      </a>
      <a @click.prevent="removeRecord" class="form-conctrl__btn">
        <i class="fas fa-times"></i>
      </a>
    </div>
    <div class="form-submit" :style="{ display: submitStatus }">
      <button type="button" class="btn btn-lg" @click="submitRecord">
        送出紀錄
      </button>
    </div>
  </form>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import {
  apiGetSingleSquatData,
  apiPostSquatData,
  apiPutSquatData,
} from "@/api.js";

export default {
  props: {
    getFormStatus: {
      type: [String, Number],
    },
  },
  emits: ["triggerModalClose"],
  setup(props, context) {
    const store = useStore();
    const squatDataLen = computed(() => store.getters.squatData.length);

    let submitStatus = ref("block");

    // new 的狀況
    const recordInit = { load: 20, rep: 1, set: 1 };
    let trainRecord = ref([recordInit]);

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

    const getSingleData = (id) => {
      store.dispatch("isLoadingHandler");
      apiGetSingleSquatData(id)
        .then((res) => {
          trainRecord.value = res.data.train;
          trainDate.value = res.data.date;
          store.dispatch("isLoadingHandler");
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    };

    watch(
      () => props.getFormStatus,
      (currentValue) => {
        switch (currentValue) {
          case "new": // 新增
            getToday();
            break;
          case "close": // 關閉重置
            trainRecord.value = [recordInit];
            break;
          default:
            // 編輯 (pass id)
            getSingleData(currentValue);
        }
      }
    );

    watch(
      () => trainRecord.value.length,
      (newIdx) => {
        if (newIdx === 0) {
          submitStatus.value = "none";
        } else {
          submitStatus.value = "block";
        }
      }
    );

    const addRecord = () => {
      trainRecord.value.push({
        load: 20,
        rep: 1,
        set: 1,
      });
    };

    const removeRecord = () => {
      trainRecord.value.pop();
    };

    const submitRecord = () => {
      const { getFormStatus } = props;

      const tempData = {
        id: getFormStatus === "new" ? squatDataLen.value + 1 : getFormStatus,
        date: trainDate.value,
        train: getFormStatus === "new" ? [] : trainRecord.value,
        totalTrain: 0,
      };

      trainRecord.value.forEach((item) => {
        if (getFormStatus === "new") {
          tempData.train.push(item);
        }
        if (item.load === "") {
          item.load = 0;
        }
        tempData.totalTrain += item.load * item.rep * item.set;
      });

      store.dispatch("isLoadingHandler");

      if (getFormStatus === "new") {
        // 新增
        apiPostSquatData(tempData)
          .then(function() {
            store.dispatch("getSquatData").then(() => {
              store.dispatch("isLoadingHandler");
              context.emit("triggerModalClose");
            });
          })
          .catch(function(e) {
            console.log(e);
            store.dispatch("isLoadingHandler");
          });
      } else {
        // 編輯
        apiPutSquatData(tempData)
          .then(() => {
            store.dispatch("getSquatData").then(() => {
              store.dispatch("isLoadingHandler");
              context.emit("triggerModalClose");
            });
          })
          .catch(function(e) {
            console.log(e);
            store.dispatch("isLoadingHandler");
          });
      }
    };

    return {
      submitStatus,
      trainRecord,
      trainDate, // 日期
      addRecord,
      removeRecord,
      submitRecord,
    };
  },
};
</script>

<style></style>
