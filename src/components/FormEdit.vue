<template>
  <form action="" class="form">
    <div class="form-group">
      <label for="trainDate" class="form-group__label">訓練日期</label>
      <input
        type="date"
        id="trainDate"
        name="trainDate"
        class="form-group__input"
        v-model="props.passEditData.date"
      />
    </div>
    <ul class="form-train">
      <li
        v-for="(list, index) in props.passEditData.train"
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
import { useStore } from "vuex";
import { apiPutSquatData } from "@/api.js";
export default {
  props: {
    passEditData: {
      type: Object,
      required: true,
    },
  },
  emits: ["triggerBack"],
  setup(props, context) {
    const store = useStore();
    const addRecord = () => {
      props.passEditData.train.push({
        load: 20,
        rep: 1,
        set: 1,
      });
    };

    const removeRecord = () => {
      props.passEditData.train.pop();
    };

    const submitRecord = () => {
      const tempData = {
        id: props.passEditData.id,
        date: props.passEditData.date,
        train: props.passEditData.train,
        totalTrain: 0,
      };

      props.passEditData.train.forEach((item, index, ary) => {
        if (item.load === "") {
          item.load = 0;
        }
        tempData.totalTrain += item.load * item.rep * item.set;
      });

      store.dispatch("isLoadingHandler");

      apiPutSquatData(tempData)
        .then(() => {
          store.dispatch("getSquatData").then(() => {
            store.dispatch("isLoadingHandler");
            context.emit("triggerBack");
          });
        })
        .catch(function(e) {
          console.log(e);
        });
    };

    return {
      props,
      addRecord,
      removeRecord,
      submitRecord,
    };
  },
};
</script>

<style></style>
