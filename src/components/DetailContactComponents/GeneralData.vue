<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Datos Personales">
      <a-typography-text type="secondary"
        >Puedes agregar o editar información acorde a los campos
        configurados.</a-typography-text
      >
      <br />
      <div class="form-row">
        <div class="form-item">
          <a-typography-text strong>Código de contacto </a-typography-text>
          <a-input
            readonly
            :bordered="false"
            :value="props.contactData?.code"
            :style="{ borderBottom: '1px solid #d9d9d9' }"
          />
        </div>
        <div class="form-item">
          <a-typography-text strong>Nombre</a-typography-text>
          <a-input
            readonly
            :bordered="false"
            :style="{ borderBottom: '1px solid #d9d9d9' }"
          />
        </div>
        <div class="form-item">
          <a-typography-text strong>Apellido Paterno</a-typography-text>
          <a-input
            readonly
            :bordered="false"
            :style="{ borderBottom: '1px solid #d9d9d9' }"
          />
        </div>
        <div class="form-item">
          <a-typography-text strong>Apellido Materno</a-typography-text>
          <a-input
            readonly
            :bordered="false"
            :style="{ borderBottom: '1px solid #d9d9d9' }"
          />
        </div>
        <div class="form-item">
          <a-typography-text strong>N de documento</a-typography-text>
          <a-input
            readonly
            :bordered="false"
            :value="props.contactData?.document_number"
            :style="{ borderBottom: '1px solid #d9d9d9' }"
          />
        </div>
        <div class="form-item">
          <a-typography-text strong>Fecha de nacimiento</a-typography-text>
          <a-input
            readonly
            :bordered="false"
            value="22 / 08 / 2000"
            :style="{ borderBottom: '1px solid #d9d9d9' }"
          />
        </div>
        <div class="form-item">
          <a-typography-text strong>Edad</a-typography-text>
          <a-input
            readonly
            :bordered="false"
            value="28"
            :style="{ borderBottom: '1px solid #d9d9d9' }"
          />
        </div>
        <div class="form-item">
          <a-typography-text strong>Sexo</a-typography-text>
          <a-input
            readonly
            :bordered="false"
            value="Masculino"
            :style="{ borderBottom: '1px solid #d9d9d9' }"
          />
        </div>
        <div class="form-item">
          <a-typography-text strong>Estado civil</a-typography-text>
          <a-input
            readonly
            :bordered="false"
            value="Soltero"
            :style="{ borderBottom: '1px solid #d9d9d9' }"
          />
        </div>
        <div class="form-item">
          <a-typography-text strong>Pais</a-typography-text>
          <a-input
            readonly
            :bordered="false"
            value="Perú"
            :style="{ borderBottom: '1px solid #d9d9d9' }"
          />
        </div>
        <div class="form-item">
          <a-typography-text strong>Ciudad</a-typography-text>
          <a-input
            readonly
            :bordered="false"
            value="Lima"
            :style="{ borderBottom: '1px solid #d9d9d9' }"
          />
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
import { defineProps, ref } from "vue";
const props = defineProps({ contactData: Object });
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

const data = [];
</script>
<style scoped>
.form-row {
  background: rgba(0, 0, 0, 0.05);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
  padding: 8px;
}

.form-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>
