<template>
  <div>
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <template #bodyCell="{ column }">
        <template v-if="column.dataIndex === 'action'">
          <a @click="sendForm">Crear contacto aquí</a>
        </template>
      </template>
    </a-table>
    <div class="actions">
      <a-button style="margin-left: 10px" @click="backStep">Volver</a-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from "vue";

const emits = defineEmits();

const backStep = () => {
  emits("backStep");
};

const sendForm = () => {
  emits("sendForm");
};

const columns = [
  { title: "Empresa", dataIndex: "company" },
  { title: "Campaña", className: "name", dataIndex: "campain" },
  { title: "Acciones", dataIndex: "action" },
];

const data = [
  { key: "1", company: "Banco Global", campain: "Campaña ventas" },
  { key: "2", company: "Banco Global", campain: "Campaña atc" },
  { key: "3", company: "Banco Global", campain: "Campaña reclamos" },
];
</script>

<style scoped>
.actions {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}
</style>
