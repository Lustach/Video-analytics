<template>
  <div>
    <v-dialog v-model="dialog" width="auto" persistent>
      <v-card class="pa-8 pb-2">
        <v-row justify="end">
          <v-btn
            icon="mdi-close"
            color="black"
            class="mx-0 mb-4"
            variant="text"
            @click="$emit('close')"
          ></v-btn>
        </v-row>
        <v-form v-model="valid">
          <v-container fluid class="form_container">
            <v-row>
              <v-col cols="12">
                <v-file-input
                  accept="image/png, image/jpeg, image/bmp"
                  placeholder="Выберите фото..."
                  prepend-inner-icon="mdi-camera"
                  prepend-icon=""
                  label="Фото"
                  variant="outlined"
                ></v-file-input>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Фамилия"
                  placeholder="Введите значение..."
                  required
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="selectedItem.name"
                  :rules="nameRules"
                  :counter="10"
                  label="Имя"
                  placeholder="Введите значение..."
                  required
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="Отчество"
                  placeholder="Введите значение..."
                  required
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <datePicker class="date_picker" />
              </v-col>
              <v-col cols="12">
                <v-autocomplete
                  label="Пол"
                  :items="['Мужской', 'Женский', 'Специальный']"
                  placeholder="Введите значение..."
                  variant="outlined"
                ></v-autocomplete>
              </v-col>
              <!-- <v-col cols="12">
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
            </v-col> -->
            </v-row>
          </v-container>
        </v-form>
        <v-card-actions>
          <v-row justify="end">
            <v-btn color="primary" @click="$emit('close')">Отмена</v-btn>
            <v-btn color="primary" @click="$emit('edit')">Изменить</v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <!-- <v-dialog v-model="deleteSuccessDialog" width="auto"></v-dialog> -->
  </div>
</template>
<script setup lang="ts">
import type { Item } from "vue3-easy-data-table";
import datePicker from "@/components/DatePicker.vue";
const props = defineProps<{
  selectedItem: Item;
}>();
// const editedItem = selectedItem
const dialog = ref(true);
const confirmDeleteDialog = ref(true);
const deleteSuccessDialog = ref(true);
const valid = ref(false);
const firstname = ref("");
const lastname = ref("");
const close = () => {
  console.log(props.selectedItem.name, "close");
};
const nameRules = ref([
  (value: any) => {
    if (value) return true;

    return "Name is requred.";
  },
  (value: any) => {
    if (value?.length <= 10) return true;

    return "Name must be less than 10 characters.";
  },
]);
const email = ref("");
const emailRules = ref([
  (value: any) => {
    if (value) return true;

    return "E-mail is requred.";
  },
  (value: any) => {
    if (/.+@.+\..+/.test(value)) return true;

    return "E-mail must be valid.";
  },
]);
</script>
<style lang="scss" scoped>
.form_container {
  max-width: 480px;
}
.date_picker {
  margin-bottom: 22px !important;
  &:deep input {
    height: 56px !important;
    border-color: #ababab !important;
    &:hover {
      border-color: black !important;
    }
  }
}
</style>
