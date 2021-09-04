import { ref, computed } from "vue";

export default function() {
  const formStatus = ref();
  const updateModalStatus = ref(false);
  const deleteModalStatus = ref(false);
  const updateModalTitle = ref("");
  const deleteIdTemp = ref();

  const changeUpdateModalStatus = (param) => {
    param === "new"
      ? (updateModalTitle.value = "新增")
      : (updateModalTitle.value = "編輯");
    updateModalStatus.value = !updateModalStatus.value;
    formStatus.value = param;
  };

  const changeDeleteModalStatus = (id) => {
    deleteModalStatus.value = !deleteModalStatus.value;
    deleteIdTemp.value = id;
  };

  const updateModalClose = () => {
    updateModalStatus.value = false;
  };

  return {
    formStatus,
    updateModalStatus,
    deleteModalStatus,
    updateModalTitle,
    deleteIdTemp,
    changeUpdateModalStatus,
    changeDeleteModalStatus,
    updateModalClose,
  };
}
