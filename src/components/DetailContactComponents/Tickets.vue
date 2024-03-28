<template>
  <a-table :columns="columns" :data-source="data" :pagination="false">
    <template #bodyCell="{ column }">
      <template v-if="column.dataIndex === 'action'">
        <a>Crear contacto aquí</a>
      </template>
    </template>
  </a-table>
</template>
<script lang="ts" setup>
const columns = [
  { title: "Fecha y hora", dataIndex: "company" },
  { title: "Canal", className: "name", dataIndex: "campain" },
  { title: "Identificador", dataIndex: "action" },
  { title: "Télefono de contacto", dataIndex: "action" },
  { title: "Usuario que gestionó", dataIndex: "action" },
  { title: "Grupo", dataIndex: "action" },
  { title: "Resultado", dataIndex: "action" },
  { title: "Motivo", dataIndex: "action" },
  { title: "Submotivo", dataIndex: "action" },
  { title: "Comentario", dataIndex: "action" },
];

const data = [];
</script>
