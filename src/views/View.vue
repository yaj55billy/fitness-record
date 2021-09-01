<template>
  <h2 class="page-title">
    列表紀錄
    <i
      class="fas fa-chevron-up page-title__collapse"
      :class="{ active: !listStatus }"
      @click.prevent="changeListStatus"
    ></i>
  </h2>
  <transition name="collapse">
    <ul v-show="listStatus" class="train">
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
          <a @click.prevent="deleteRecord(data.id)" class="btn btn-sm">刪除</a>
        </div>
      </li>
    </ul>
  </transition>
  <br />
  <!-- <h2 class="page-title">圖表</h2> -->
  <!-- <Chart></Chart> -->
  <Lightbox
    :lightboxStatus="editLightboxStatus"
    @triggerBack="changeLightboxStatus"
  >
    <template v-slot:header>
      編輯紀錄
    </template>
    <template v-slot:main>
      <FormEdit
        :passEditId="editId"
        @triggerBack="changeLightboxStatus"
      ></FormEdit>
      <!-- :passEditData="saveEditData" -->
    </template>
  </Lightbox>
  <br />
</template>

<script>
// import Chart from "@/components/Chart.vue";
import Lightbox from "@/components/Lightbox.vue";
import FormEdit from "@/components/FormEdit.vue";
import { apiDeleteSquatData } from "@/api.js";
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    // Chart,
    Lightbox,
    FormEdit,
  },
  setup() {
    const store = useStore();
    const squatData = computed(() => store.getters.squatData);
    const listStatus = ref(true);
    const saveEditData = ref({});
    const editLightboxStatus = ref(false);

    const editId = ref(0);

    const changeListStatus = () => {
      listStatus.value = !listStatus.value;
    };

    const changeLightboxStatus = () => {
      editLightboxStatus.value = !editLightboxStatus.value;
    };

    const editRecord = (id) => {
      changeLightboxStatus();
      editId.value = id;
    };

    const deleteRecord = (id) => {
      console.log("刪除");
      let deleteCheck = confirm("您確定要刪除此筆資料嗎? (刪除後無法復原)");
      if (deleteCheck) {
        store.dispatch("isLoadingHandler");
        apiDeleteSquatData(id)
          .then(() => {
            store.dispatch("getSquatData").then(() => {
              store.dispatch("isLoadingHandler");
            });
          })
          .catch((e) => {});
      }
    };

    return {
      squatData,
      listStatus,
      changeListStatus,
      editRecord,
      saveEditData,
      editLightboxStatus,
      changeLightboxStatus,
      deleteRecord,
      editId,
    };
  },
};
</script>

<style></style>
