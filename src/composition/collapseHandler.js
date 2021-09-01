import { ref } from "vue";

export default function() {
  const listStatus = ref(true);
  const changeListStatus = () => {
    listStatus.value = !listStatus.value;
  };

  return {
    listStatus,
    changeListStatus,
  };
}
