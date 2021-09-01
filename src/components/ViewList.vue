<template>
  <h2 class="page-title">
    列表紀錄
    <i
      class="fas fa-chevron-up page-title__collapse"
      :class="{ active: !listStatus }"
      @click.prevent="changeListStatus"
    ></i>
  </h2>
  <div style="text-align: right">
    <a class="btn" @click.prevent="changeModalStatus('new')">新增</a>
  </div>

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
          <a @click.prevent="changeModalStatus(data.id)" class="btn btn-sm"
            >編輯</a
          >
          <a @click.prevent="deleteRecord(data.id)" class="btn btn-sm">刪除</a>
        </div>
      </li>
    </ul>
  </transition>
  <div class="lightbox" :class="{ open: modalStatus }">
    <div class="modal-mask" @click.self="changeModalStatus('close')">
      <div class="modal-container">
        <div class="modal-body">
          <i
            class="fas fa-times modal-close"
            @click.self="changeModalStatus('close')"
          ></i>
          <header>
            <h2>Default Header</h2>
          </header>
          <hr />
          <main>
            <UpdateForm :getFormStatus="formStatus" />
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import UpdateForm from "@/components/UpdateForm.vue";
import collapseHandler from "@/composition/collapseHandler.js";
export default {
  components: {
    UpdateForm,
  },
  setup() {
    const store = useStore();
    const squatData = computed(() => store.getters.squatData);
    const { listStatus, changeListStatus } = collapseHandler();

    const formStatus = ref();

    const modalStatus = ref(false);
    const changeModalStatus = (param) => {
      modalStatus.value = !modalStatus.value;
      formStatus.value = param;
    };

    return {
      squatData,
      listStatus,
      changeListStatus,
      modalStatus,
      changeModalStatus,
      formStatus, // 表單狀態
    };
  },
};
</script>

<style></style>
