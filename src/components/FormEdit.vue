<template>
  <form class="form">
    <div class="form-group">
      <label for="trainDate" class="form-group__label">訓練日期</label>
      <input
        type="date"
        id="trainDate"
        name="trainDate"
        class="form-group__input"
        v-model="getRecord.date"
      />
    </div>
    <ul class="form-train">
      <li
        v-for="(list, index) in getRecord.train"
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
import { ref, watch } from "vue";
import { useStore } from "vuex";
import { apiGetSingleSquatData, apiPutSquatData } from "@/api.js";
// import recordHandler from "@/composition/recordHandler.js";
export default {
  props: {
    passEditId: {
      type: Number,
      required: true,
    },
  },
  emits: ["triggerBack"],
  setup(props, context) {
    const store = useStore();
    const getRecord = ref({});

    const triggerFunc = (id) => {
      store.dispatch("isLoadingHandler");
      apiGetSingleSquatData(id)
        .then((res) => {
          getRecord.value = res.data;
          store.dispatch("isLoadingHandler");
        })
        .catch((e) => {});
    };

    watch(
      () => props.passEditId,
      (newIdx, oldIdx) => {
        triggerFunc(newIdx);
      }
    );

    // const { add } = recordHandler();
    // const addRecord = add(getRecord.value.train);
    // console.log(getRecord.value.train);
    const addRecord = () => {
      getRecord.value.train.push({
        load: 20,
        rep: 1,
        set: 1,
      });
    };

    const removeRecord = () => {
      getRecord.value.train.pop();
    };

    const submitRecord = () => {
      const tempData = {
        id: getRecord.value.id,
        date: getRecord.value.date,
        train: getRecord.value.train,
        totalTrain: 0,
      };

      getRecord.value.train.forEach((item) => {
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
      getRecord,
      addRecord,
      removeRecord,
      submitRecord,
    };
  },
};
</script>

<style></style>
