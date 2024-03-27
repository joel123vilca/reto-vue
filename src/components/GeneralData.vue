<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Datos Personales">
      <div class="form-row">
        <div class="form-item">
          <a-typography-text strong>Código de contacto</a-typography-text>
          <a-input />
        </div>
        <div class="form-item">
          <a-typography-text strong>Nombre</a-typography-text>
          <a-input />
        </div>
        <div class="form-item">
          <a-typography-text strong>Apellido Paterno</a-typography-text>
          <a-input />
        </div>
        <div class="form-item">
          <a-typography-text strong>Apellido Materno</a-typography-text>
          <a-input />
        </div>
        <div class="form-item">
          <a-typography-text strong>N de documento</a-typography-text>
          <a-input />
        </div>
        <div class="form-item">
          <a-typography-text strong>Fecha de nacimiento</a-typography-text>
          <a-input />
        </div>
        <div class="form-item">
          <a-typography-text strong>Edad</a-typography-text>
          <a-input />
        </div>
        <div class="form-item">
          <a-typography-text strong>Sexo</a-typography-text>
          <a-input />
        </div>
        <div class="form-item">
          <a-typography-text strong>Estado civil</a-typography-text>
          <a-input />
        </div>
        <div class="form-item">
          <a-typography-text strong>Pais</a-typography-text>
          <a-input />
        </div>
        <div class="form-item">
          <a-typography-text strong>Ciudad</a-typography-text>
          <a-input />
        </div>
      </div>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Teléfonos" force-render>
      <a-table :columns="columns" :data-source="data" :pagination="false">
        <template #bodyCell="{ column }">
          <template v-if="column.dataIndex === 'action'">
            <a>Crear contacto aquí</a>
          </template>
        </template>
      </a-table>
    </a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const activeKey = ref("1");
const columns = [
  { title: "Código del país", dataIndex: "company" },
  { title: "Número", className: "name", dataIndex: "campain" },
  { title: "Tipo de teléfono", dataIndex: "action" },
  { title: "Origen", dataIndex: "action" },
  { title: "Operador telefónico", dataIndex: "action" },
  { title: "Prioridad", dataIndex: "action" },
  { title: "Observación", dataIndex: "action" },
];

const data = [
  { key: "1", company: "Banco Global", campain: "Campaña ventas" },
  { key: "2", company: "Banco Global", campain: "Campaña atc" },
  { key: "3", company: "Banco Global", campain: "Campaña reclamos" },
];
</script>
<style scoped>
.form-row {
  background: rgba(0, 0, 0, 0.06);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  padding: 4px;
}

.form-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
