<script setup lang="ts">
import subject from "@/assets/icons/subject.vue";
import eye from "@/assets/icons/eye.vue";
import earth from "@/assets/icons/earth.vue";
import security from "@/assets/icons/security.vue";
</script>

<template>
  <div class="container">
    <div class="row">
      <nuxt-link to="/subjects" class="col card">
        <subject></subject>
        <!-- <img /> -->
        Субъекты
      </nuxt-link>
      <nuxt-link to="/subjects_find" class="col card">
        <eye></eye>
        Поиск субъектов
      </nuxt-link>
    </div>
    <div class="row">
      <div class="col card disabled" title="Временно не доступно">
        <earth></earth>
        Источники данных
      </div>
      <div class="col card disabled" title="Временно не доступно">
        <security></security>
        Администрирование
      </div>
    </div>
  </div>
  <!-- <TheWelcome /> -->
</template>
<style lang="scss" scoped>
.container {
  background-color: #f4f6f8;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.row {
  display: flex;
  justify-content: center;
  align-items: space-between;
}
.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  color: var(--vt-c-text-light-1);
}
.card {
  border-radius: 10px;
  background-color: #fff;
  border: 1px solid gray;
  margin: 20px 20px;
  box-sizing: border-box;
  height: 320px;
  width: 320px;
  cursor: pointer;
  &:hover {
    transition: all 0.3s linear;
    background-color: white;
    box-shadow: 0 6px 10px 0px rgb(206, 206, 206);
  }
  text-decoration: none !important;
}
.disabled {
  background-color: rgb(216, 216, 216);
  &:hover {
    background-color: rgb(216, 216, 216);
    box-shadow: none;
  }
}
</style>
