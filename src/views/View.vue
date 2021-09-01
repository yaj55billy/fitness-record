<template>
  <ViewList />
  <br />
  <ViewChart />

  <!-- <Lightbox
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
    </template>
  </Lightbox> -->
</template>

<script>
// import Lightbox from "@/components/Lightbox.vue";
// import FormEdit from "@/components/FormEdit.vue";
import ViewList from "@/components/ViewList.vue";
import ViewChart from "@/components/ViewChart.vue";
import { apiDeleteSquatData } from "@/api.js";
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    // Lightbox,
    // FormEdit,
    ViewList,
    ViewChart,
  },
  setup() {
    const store = useStore();
    const squatData = computed(() => store.getters.squatData);

    const saveEditData = ref({});

    const editId = ref(0);

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
      editRecord,
      saveEditData,
      // editLightboxStatus,
      // changeLightboxStatus,
      deleteRecord,
      editId,
    };
  },
};
</script>

<style></style>
