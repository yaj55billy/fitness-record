<template>
  <div class="container">
    <Formfill></Formfill>
    <h1>新增健身紀錄頁</h1>
    <div v-for="(item, index) in record" :key="item">
      {{ index }}
      <div class="form-group">
        <label for="">kg</label>
        <input type="text" v-model.number="item.load" />
      </div>
      <div class="form-group">
        <label for="">次數</label>
        <select name="" id="" v-model.number="item.rep">
          <option value="" disabled selected>請選擇次數</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
      <div class="form-group">
        <label for="">組數</label>
        <select name="" id="" v-model.number="item.set">
          <option value="" disabled selected>請選擇組數</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </div>
    </div>

    <button type="button" @click="addRecord">新增</button>
    <button type="button" @click="submit">送出</button>

    <hr />

    <button type="button" @click="testPost">POST 按鈕</button>

    <hr />

    <button type="button" @click="testDel">Del 按鈕</button>

    <hr />

    <h2>訓練 LIST:</h2>
    <ul>
      <li v-for="item in data" :key="item.id">
        <div>訓練日期: {{ item.date }}</div>
        <div>訓練內容(總訓練量): {{ item.train[0].trainingVolume }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import Formfill from "@/components/Formfill.vue";

import axios from "axios";
import { onMounted, reactive, ref } from "vue";
export default {
  components: {
    Formfill,
  },
  setup() {
    const prepareData = [
      {
        id: 1,
        date: "2021-08-22",
        train: [
          {
            load: 60, // 單位 kg
            rep: 8, // 次數
            set: 5, // 組數
            trainingVolume: 2400, // 總訓練量
          },
        ],
      },
      {
        id: 2,
        date: "2021-08-23",
        train: [
          {
            load: 70, // 單位 kg
            rep: 8, // 次數
            set: 5, // 組數
            trainingVolume: 2800, // 總訓練量
          },
        ],
      },
      {
        id: 3,
        date: "2021-08-24",
        train: [
          {
            load: 65, // 單位 kg
            rep: 8, // 次數
            set: 5, // 組數
            trainingVolume: 2600, // 總訓練量
          },
        ],
      },
    ];
    const data = reactive(prepareData);

    const record = ref([
      {
        load: null,
        rep: null,
        set: null,
      },
    ]);

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
      console.log(record);
      // alert(record.value);
    };

    const testPost = () => {
      axios
        .post("https://fitness-api-server.herokuapp.com/squatdata/", {
          id: 5,
          date: "2021-08-17",
          train: [
            {
              load: 60,
              rep: 8,
              set: 5,
            },
          ],
        })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(e) {
          console.log(e);
        });
    };

    const testDel = () => {
      axios
        .delete("https://fitness-api-server.herokuapp.com/squatdata/5")
        .then(function(res) {
          console.log(res);
        })
        .catch(function(e) {
          console.log(e);
        });
    };

    return {
      data,
      record,
      addRecord,
      submit,
      testPost,
      testDel,
    };
  },
};
</script>

<style lang="scss" scoped>
div {
  margin: 12px 0;
}
</style>
