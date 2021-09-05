<template>
  <h2 class="page-title">選擇您的運動項目</h2>
  <ul class="exercise">
    <li class="exercise-list">
      <div class="exercise-list__pic">
        <img
          src="@/assets/img/banner-squat.jpg"
          alt="from unsplash Sergio Pedemonte"
        />
        <h4 class="exercise-list__text">深蹲</h4>
        <router-link to="/view" class="exercise-list__link"></router-link>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Index",
  components: {},
};
</script>

<style></style>
