<script setup lang="ts">
const route = useRoute();
</script>
<template>
  <v-app>
    app
    <!-- <v-btn class="mt-10">Hello Sass Changes</v-btn> -->
    <v-app-bar>
      <nuxt-link to="/subjects_find">Поиск субъектов</nuxt-link></v-app-bar
    >
    <main class="view">
      <NuxtPage />
    </main>
    <v-footer color="primary" elevation="4" style="max-height: 64px"
      >footer</v-footer
    >
  </v-app>
  <!-- <div class="d-flex align-center flex-column">
    <v-icon>mdi-home</v-icon>
    <v-card width="400">
      <v-card-title>This is a title</v-card-title>
      <v-card-subtitle>This is a subtitle</v-card-subtitle>
      <v-card-text> This is content </v-card-text>
    </v-card>
    <v-btn class="mt-10">Hello Sass Changes</v-btn>
    <v-toolbar>
            <v-btn
              icon
              class="hidden-xs-only"
            >
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>

            <v-toolbar-title>Title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn
              icon
              class="hidden-xs-only"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-toolbar>
          <v-combobox
  label="Combobox"
  :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
  variant="solo"
></v-combobox>
  </div> -->
</template>

<style lang="scss">
@use "./settings";
.view {
  height: auto;
  flex: 1;
  width: 100%;
  margin-top: 64px;
  //margin-bottom: 39px;
  @media (max-width: 1024px) {
    padding: 0 2vw;
  }
}
</style>
