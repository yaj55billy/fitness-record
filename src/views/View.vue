<template>
  <h2 class="page-title">列表紀錄</h2>
  <ul>
    <li v-for="item in data" :key="item.id">
      {{ item.date }}
      <button type="button" @click="editRecord(item.id)">編輯</button>
    </li>
  </ul>
  <h2 class="page-title">圖表</h2>
  <button type="button" @click="testPost">POST 按鈕</button>
  <button type="button" @click="testDel">Del 按鈕</button>
  <Chart></Chart>
  <Lightbox></Lightbox>
</template>

<script>
import Chart from "@/components/Chart.vue";
import Lightbox from "@/components/Lightbox.vue";
import axios from "axios";
import { onMounted, ref } from "vue";
export default {
  components: {
    Chart,
    Lightbox,
  },
  setup() {
    const data = ref([]);
    onMounted(() => {
      axios
        .get("https://fitness-api-server.herokuapp.com/squatdata/")
        .then((res) => {
          data.value = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    });

    const editRecord = (id) => {
      let url = `https://fitness-api-server.herokuapp.com/squatdata/${id}`;
      console.log(url);
      axios
        .put(url, {
          id: id,
          train: [
            {
              load: 100,
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
      editRecord,
      testPost,
      testDel,
    };
  },
};
</script>

<style></style>
