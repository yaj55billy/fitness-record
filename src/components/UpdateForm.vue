<template>
  <form class="form">
    <!-- <div class="form-group">
      <label for="trainDate" class="form-group__label">訓練日期</label>
      <input
        type="date"
        id="trainDate"
        name="trainDate"
        class="form-group__input"
        v-model="getRecord.date"
      />
    </div> -->
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
    <div class="form-submit">
      <button type="button" class="btn btn-lg" @click="submitRecord">
        送出紀錄
      </button>
    </div>
  </form>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import { apiGetSingleSquatData, apiPutSquatData } from "@/api.js";

export default {
  props: {
    getFormStatus: {
      type: [String, Number],
    },
  },
  setup(props) {
    const store = useStore();

    // new 的狀況
    const recordInit = { load: 20, rep: 1, set: 1 };
    let trainRecord = ref([recordInit]);

    // const allData = ref({});
    const trainDate = ref("");

    const getSingleData = (id) => {
      store.dispatch("isLoadingHandler");
      apiGetSingleSquatData(id)
        .then((res) => {
          // allData.value = res.data;
          // console.dir(res.data);
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
      // console.log(props);

      const { getFormStatus } = props;
      console.log(getFormStatus);

      // console.log(allData.value.id);
      // console.log(allData.value.date);

      const tempData = {
        id: getFormStatus === "new" ? 10 : getFormStatus,
        date: getFormStatus === "new" ? "2021-09-10" : trainDate.value,
        train: getFormStatus === "new" ? [] : trainRecord.value,
        totalTrain: 0,
      };

      console.log(tempData);

      // getRecord.value.train.forEach((item) => {
      //   if (item.load === "") {
      //     item.load = 0;
      //   }
      //   tempData.totalTrain += item.load * item.rep * item.set;
      // });

      // store.dispatch("isLoadingHandler");

      // apiPutSquatData(tempData)
      //   .then(() => {
      //     store.dispatch("getSquatData").then(() => {
      //       store.dispatch("isLoadingHandler");
      //     });
      //   })
      //   .catch(function(e) {
      //     console.log(e);
      //   });
    };

    return {
      trainRecord,
      addRecord,
      removeRecord,
      submitRecord,
    };
  },
};
</script>

<style></style>
