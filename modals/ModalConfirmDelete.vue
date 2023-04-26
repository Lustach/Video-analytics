<template>
  <v-dialog v-model="confirmDeleteDialog" width="auto" persistent>
    <v-card class="pa-8 pb-2 pt-4">
      <v-row justify="end">
        <v-btn
          icon="mdi-close"
          color="black"
          class="mx-0 mb-4 mt-0"
          variant="text"
          @click="$emit('reject')"
        ></v-btn>
      </v-row>
      <h3>Удалить записи количество записей</h3>
      <v-card-actions>
        <v-row justify="end">
          <v-btn color="primary" @click="$emit('reject')">Отмена</v-btn>
          <v-btn color="primary" @click="$emit('confirm')">Подтвердить</v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script setup lang="ts">
const nuxtApp = useNuxtApp();
const { $event } = useNuxtApp();
console.log(useNuxtApp);
const confirmDeleteDialog = ref(true);
defineEmits<{
  (e: "confirm"): void;
  (e: "reject"): void;
}>();
// // defineEmits(["success", "reject"]);
// const confirmDeleteDialog = ref(true);
// const handleConfirm = () => {
//   emit("confirm", true);
// };
// const handleReject = () => {
//   emit("reject", false);
// };
</script>
