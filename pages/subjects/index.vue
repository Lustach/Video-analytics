<template>
  <v-row>
    <v-col cols="12" class="action_bar">
      <v-row class="px-6">
        <v-col cols="8">
          <!-- <v-btn flat><v-icon size="large" color="info" icon="mdi-plus"></v-icon></v-btn>
          <v-btn flat
            ><v-icon size="large" color="info" icon="mdi-trash-can"></v-icon
          ></v-btn> -->
          <v-btn
            icon="mdi-plus"
            color="primary"
            class="mx-0"
            variant="text"
          ></v-btn>
          <v-btn
            icon="mdi-filter"
            color="primary"
            class="mx-0"
            variant="text"
          ></v-btn>
          <v-btn
            v-show="itemsSelected.length > 1"
            icon="mdi-trash-can"
            color="primary"
            class="mx-0"
            variant="text"
          ></v-btn>
        </v-col>
        <v-col>
          <v-text-field
            prepend-inner-icon="mdi-magnify"
            label="Поиск"
            variant="outlined"
            color="primary"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="mx-6">
      <Vue3EasyDataTable
        v-model:items-selected="itemsSelected"
        show-index
        table-class-name="customize-table"
        class="table"
        buttons-pagination
        :headers="headers"
        :items="items"
        rows-per-page-message="Отображать по"
        theme-color="#1d90ff"
        @click-row="showRow"
      >
        <template #item-archived="{ archived }">
          <v-checkbox
            class="table_checkbox"
            size="small"
            :value="archived"
          ></v-checkbox
        ></template>
        <template #item-operation="item">
          <div class="operation-wrapper">
            <v-btn
              size="x-small"
              icon="mdi-square-edit-outline"
              flat
              @click="showModalEdit(item)"
            />
            <v-btn
              icon="mdi-trash-can"
              color="primary"
              class="mx-0"
              variant="text"
              @click="showModalDelete(item)"
            ></v-btn>
          </div>
        </template>
      </Vue3EasyDataTable>
    </v-col>
  </v-row>
  <teleport to="body">
    <CreateOrEditDialog
      v-if="isModalCreateOrEditDialog"
      :selected-item="selectedItem"
      @close="closeCreateOrEditDialog"
    />
  </teleport>
  <teleport to="body">
    <ModalConfirmDelete
      v-if="isModalConfirmDelete"
      @confirm="handleConfirmDelete"
      @reject="handleRejectDelete"
    />
  </teleport>
</template>
<script setup lang="ts">
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
import type { Header, Item, ClickRowArgument } from "vue3-easy-data-table";
import CreateOrEditDialog from "@/modals/CreateOrEditSubject.vue";
import ModalConfirmDelete from "@/modals/ModalConfirmDelete.vue";

const isModalConfirmDelete = ref(false);
const isModalCreateOrEditDialog = ref(false);
const closeCreateOrEditDialog = () => {
  isModalCreateOrEditDialog.value = false;
};
const handleConfirmDelete = () => {
  fnDeleteItem();
  isModalConfirmDelete.value = false;
};
const handleRejectDelete = () => {
  isModalConfirmDelete.value = false;
};
const showModalDelete = (item: Item) => {
  isModalConfirmDelete.value = true;
  selectedItem.value = item;
};
const showModalEdit = (item: Item) => {
  isModalCreateOrEditDialog.value = true;
  selectedItem.value = item;
};
const fnDeleteItem = () => {
  items.splice(
    items.findIndex((e: Item) => e.id === selectedItem.value?.id),
    1
  );
};
const selectedItem = ref<Item>();
const itemsSelected = ref<Item[]>([]);
const headers: Header[] = reactive([
  { text: "Фото", value: "id", sortable: true },
  { text: "Фамилия", value: "surname", sortable: true },
  { text: "Имя", value: "name", sortable: true },
  { text: "Отчество", value: "fathername", sortable: true },
  { text: "Пол", value: "sex", sortable: true },
  { text: "Дата рождения", value: "birth_date", sortable: true },
  { text: "Дата добавления", value: "add_date", sortable: true },
  { text: "Дата изменения", value: "change_date", sortable: true },
  { text: "В архиве", value: "archived", sortable: true },
  { text: "Действия", value: "operation" },
]);

const items: Item[] = reactive([
  {
    id: "123",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "1234",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "1235",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "1236",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "1237",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "1238",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "1239",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "1230",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "12310",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "12311",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "12312",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "12313",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "12314",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    operation: ["delete", "change"],
    // isSelected: true,
  },
  {
    id: "12315",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    // isSelected: true,
  },
  {
    id: "123416",
    surname: 178,
    name: 77,
    fathername: 20,
    sex: "male",
    birth_date: "DD/MM/YYYY",
    add_date: "DD/MM/YYYY",
    change_date: "DD/MM/YYYY",
    archived: true,
    // isSelected: true,
  },
]);
const showRow = (item: ClickRowArgument) => {
  console.log(item, "showRoww");
};
const editItem = (item: Item) => {
  console.log(item);
  //   isEditing.value = true;
};
</script>
<style lang="scss" scoped>
.table {
  &_checkbox {
    &:deep .v-input__details {
      background: red !important;
      display: none;
    }
  }
}
</style>
