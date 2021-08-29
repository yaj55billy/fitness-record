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
      <!-- 訓練 LIST  -->
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
          <!-- (kg) -->
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
            <option value="" disabled selected>請選擇次數</option>
            <option value="2">2</option>
            <!-- <option value="1" v-for="item in 30" :key="item" >1</option> -->
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
            <option value="" disabled selected>請選擇組數</option>
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
      </li>
    </ul>
    <div class="form-conctrl">
      <a @click.prevent="addRecord">
        新增訓練
        <i class="fas fa-plus"></i>
      </a>
      <a @click.prevent="submit">
        刪除訓練
        <i class="fas fa-times"></i>
      </a>
    </div>
    <button type="button" class="btn" @click="submit">送出紀錄</button>
  </form>
</template>

<script>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
export default {
  setup() {
    const trainDate = ref("");

    const record = ref([
      {
        load: null,
        rep: null,
        set: null,
      },
    ]);

    const submitData = ref({
      date: trainDate.value,
      train: [],
      totalTrain: 0,
    });

    // onMounted(() => {});

    const addRecord = () => {
      // list.value.push({ input: "input", s1: "s1", s2: "s2" });
      // console.log(list);
      // temp.value += 1;
      record.value.push({
        load: 0,
        rep: 1,
        set: 1,
      });
    };

    const submit = () => {
      // console.log(record.value);
      record.value.forEach((item) => {
        submitData.value.train.push(item);
      });
      console.log(submitData);
      // console.log(submitData.value.train);
      // const temp = submitData.value.train.push(record);
      // console.log(temp);
    };

    return {
      record,
      addRecord,
      submit,
      trainDate,
    };
  },
};
</script>

<style></style>
