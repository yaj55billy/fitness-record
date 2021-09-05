<template>
  <h2 class="page-title">
    列表紀錄
    <i
      class="fas fa-chevron-up page-title__collapse"
      :class="{ active: !listStatus }"
      @click.prevent="changeListStatus"
    ></i>
  </h2>
  <div class="page-topbtn">
    <a class="btn btn-sm" @click.prevent="changeUpdateModalStatus('new')"
      >新增紀錄</a
    >
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
          <a
            @click.prevent="changeUpdateModalStatus(data.id)"
            class="btn btn-sm"
            >編輯</a
          >
          <a
            @click.prevent="changeDeleteModalStatus(data.id)"
            class="btn btn-sm"
            >刪除</a
          >
        </div>
      </li>
    </ul>
  </transition>

  <div class="lightbox" :class="{ open: updateModalStatus }">
    <div class="modal-mask" @click.self="changeUpdateModalStatus('close')">
      <div class="modal-container">
        <div class="modal-body">
          <i
            class="fas fa-times modal-close"
            @click.self="changeUpdateModalStatus('close')"
          ></i>
          <header>
            <h4 class="modal-body__head">{{ updateModalTitle }}</h4>
          </header>
          <hr />
          <main>
            <UpdateForm
              :getFormStatus="formStatus"
              @triggerModalClose="updateModalClose"
            />
          </main>
        </div>
      </div>
    </div>
  </div>

  <div class="lightbox" :class="{ open: deleteModalStatus }">
    <div class="modal-mask" @click.self="changeDeleteModalStatus()">
      <div class="modal-container">
        <div class="modal-body">
          <i
            class="fas fa-times modal-close"
            @click.self="changeDeleteModalStatus()"
          ></i>
          <header>
            <h4 class="modal-body__head">刪除</h4>
          </header>
          <hr />
          <main>
            <p class="modal-body__text">
              您確定要刪除此筆紀錄嗎?
              <br />
              刪除後是無法回復紀錄的。
            </p>
            <div class="modal-body__delete">
              <button
                type="button"
                class="btn btn-lg"
                @click.prevent="deleteRecord()"
              >
                刪除紀錄
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateForm from "@/components/UpdateForm.vue";

import { computed } from "vue";
import { useStore } from "vuex";

import collapseHandler from "@/composition/collapseHandler.js";
import modalHandler from "@/composition/modalHandler.js";
import { apiDeleteSquatData } from "@/api.js";
export default {
  components: {
    UpdateForm,
  },
  setup() {
    const store = useStore();
    const squatData = computed(() => store.getters.squatData);
    const { listStatus, changeListStatus } = collapseHandler();
    const {
      formStatus,
      updateModalStatus,
      deleteModalStatus,
      updateModalTitle,
      deleteIdTemp,
      changeUpdateModalStatus,
      changeDeleteModalStatus,
      updateModalClose,
    } = modalHandler();

    const deleteRecord = () => {
      if (deleteIdTemp.value) {
        store.dispatch("isLoadingHandler");
        apiDeleteSquatData(deleteIdTemp.value)
          .then(() => {
            store.dispatch("getSquatData").then(() => {
              store.dispatch("isLoadingHandler");
              changeDeleteModalStatus();
            });
          })
          .catch((err) => {
            console.log(err);
            store.dispatch("isLoadingHandler");
          });
      }
    };

    return {
      squatData,
      listStatus,
      changeListStatus,
      formStatus,
      updateModalStatus,
      deleteModalStatus,
      updateModalTitle,
      changeUpdateModalStatus,
      changeDeleteModalStatus,
      updateModalClose,
      deleteRecord,
    };
  },
};
</script>

<style></style>
