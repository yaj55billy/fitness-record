<template>
  <h2 class="page-title">
    列表紀錄
    <i
      class="fas fa-chevron-up page-title__collapse"
      :class="{ active: !isShow }"
      @click.prevent="triggerCollapse"
    ></i>
  </h2>
  <transition name="collapse">
    <ul v-show="isShow" class="train" ref="train">
      <li v-for="data in squatData" :key="data.id" class="train-list">
        <div class="train-item">
          <h4 class="train-item__head">訓練日期:</h4>
          <div class="train-item__body">{{ data.date }}</div>
        </div>
        <div class="train-item">
          <h4 class="train-item__head">訓練細節:</h4>
          <ul class="train-item__body">
            <li v-for="detail in data.train" :key="detail">
              重量: {{ detail.load }} kg、次數: {{ detail.rep }}、組數:
              {{ detail.set }}
            </li>
          </ul>
        </div>
        <div class="train-item">
          <h4 class="train-item__head">總訓練量:</h4>
          <div class="train-item__body">{{ data.totalTrain }}</div>
        </div>
        <div class="train-btnarea">
          <a @click.prevent="editRecord(data.id)" class="btn btn-sm">編輯</a>
          <a @click.prevent="editRecord(data.id)" class="btn btn-sm">刪除</a>
        </div>
      </li>
    </ul>
  </transition>
  <br />
  <h2 class="page-title">圖表</h2>

  <Chart></Chart>
  <Lightbox></Lightbox>
  <br />
  <br />
  <button type="button" @click="testPost">POST 按鈕</button>
  <button type="button" @click="testDel">Del 按鈕</button>
  <button type="button" @click="editRecord(7)">編輯 按鈕</button>
</template>

<script>
import Chart from "@/components/Chart.vue";
import Lightbox from "@/components/Lightbox.vue";
import axios from "axios";

import { onMounted, onUpdated, ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Chart,
    Lightbox,
  },
  setup() {
    const data = ref([]);
    const store = useStore();
    const squatData = computed(() => store.getters.squatData);

    const train = ref(null);
    const trainHeight = ref(0);

    onUpdated(() => {
      trainHeight.value = train.value.getBoundingClientRect().height;
    });

    onMounted(() => {});

    const isShow = ref(true);

    const triggerCollapse = () => {
      isShow.value = !isShow.value;
    };

    const editRecord = (id) => {
      // let url = `https://fitness-api-server.herokuapp.com/squatdata/${id}`;
      const obj = {
        id: id,
        date: "2021-08-28",
        train: [
          {
            load: 100,
            rep: 8,
            set: 5,
          },
        ],
      };
      // store.dispatch("putDataAction", obj);
      axios
        .put(
          `https://fitness-api-server.herokuapp.com/squatdata/${obj.id}`,
          obj
        )
        .then(function(res) {
          // console.log(res);
          store.dispatch("getSquatData");
          // console.log(res);
        })
        .catch(function(e) {
          console.log(e);
        });
    };

    const testDel = () => {
      const id = 7;
      // store.dispatch("deleteDataAction", delNum);
      axios
        .delete(`https://fitness-api-server.herokuapp.com/squatdata/${id}`)
        .then(function(res) {
          console.log("delete");
          store.dispatch("getSquatData");
          // console.log(1);
          // console.log(res);
          // commit("deleteDataMutation", id);
        })
        .catch(function(e) {
          console.log(e);
        });
    };

    return {
      squatData,
      editRecord,
      testDel,
      triggerCollapse,
      isShow,
      train, // element
      trainHeight,
    };
  },
};
</script>

<style></style>
