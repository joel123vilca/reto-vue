<template>
  <div>
    <a-modal
      v-model:open="props.openCreate"
      title="Crea un nuevo contacto"
      :closable="true"
      :footer="null"
    >
      <div class="modal-create">
        <a-steps v-model:current="currentStep" :items="steps">
          <template #progressDot="{ index, status, prefixCls }">
            <a-popover>
              <template #content>
                <span>{{ index }}{{ status }}</span>
              </template>
              <span :class="`${prefixCls}-icon-dot`" />
            </a-popover>
          </template>
        </a-steps>
        <template v-for="(item, index) in steps" :key="index">
          <div v-if="currentStep === index">
            <form v-if="index === 0" :key="'form-' + index">
              <div class="form-title">
                <h2>Datos personales</h2>
              </div>
              <a-form
                ref="formRef"
                :model="formState"
                :rules="rules"
                :label-col="labelCol"
                :wrapper-col="wrapperCol"
              >
                <a-form-item
                  ref="name"
                  label="Nombres"
                  name="name"
                  labelAlign="top"
                >
                  <a-input
                    v-model:value="formState.name"
                    placeholder="Nombres"
                  />
                </a-form-item>
                <div class="content-item">
                  <a-form-item
                    ref="paternalSurname"
                    label="Apellido paterno"
                    name="paternalSurname"
                    labelAlign="top"
                  >
                    <a-input v-model:value="formState.paternalSurname" />
                  </a-form-item>
                  <a-form-item
                    ref="maternalSurname"
                    label="Apellido materno"
                    name="maternalSurname"
                    labelAlign="top"
                  >
                    <a-input v-model:value="formState.maternalSurname" />
                  </a-form-item>
                </div>
                <div class="content-item">
                  <a-form-item
                    ref="typeDocument"
                    label="Tipo de documento"
                    name="typeDocument"
                    labelAlign="top"
                  >
                    <a-select v-model:value="formState.typeDocument">
                      <a-select-option value="DNI">DNI</a-select-option>
                      <a-select-option value="RUC">RUC</a-select-option>
                    </a-select>
                  </a-form-item>
                  <a-form-item
                    ref="documentNumber"
                    label="Nº de documento"
                    name="documentNumber"
                    labelAlign="top"
                  >
                    <a-input v-model:value="formState.documentNumber" />
                  </a-form-item>
                </div>
                <div class="content-item">
                  <a-form-item
                    ref="address"
                    label="Dirección"
                    name="address"
                    labelAlign="top"
                  >
                    <a-input v-model:value="formState.address" />
                  </a-form-item>
                  <a-form-item
                    ref="email"
                    label="Correo electrónico"
                    name="email"
                    labelAlign="top"
                  >
                    <a-input v-model:value="formState.email" />
                  </a-form-item>
                </div>
                <a-form-item
                  ref="phone"
                  label="Teléfono de contacto"
                  name="phone"
                  labelAlign="top"
                >
                  <a-input-group compact>
                    <a-select v-model:value="formState.codePhone">
                      <a-select-option value="Option1">Option1</a-select-option>
                      <a-select-option value="Option2">Option2</a-select-option>
                    </a-select>
                    <a-input
                      v-model:value="formState.phone"
                      style="width: 80%"
                    />
                  </a-input-group>
                </a-form-item>
                <div>
                  <span
                    >Podrás agregar más de cada uno de estos datos después de
                    crear el contacto</span
                  >
                </div>
                <div class="actions">
                  <a-button style="margin-left: 10px" @click="handleClose"
                    >Cancelar</a-button
                  >
                  <a-button style="margin-left: 10px" @click="nextStep"
                    >Continuar</a-button
                  >
                </div>
              </a-form>
            </form>
            <form v-else-if="index === 1" :key="'form-' + index">
              <div class="form-title">
                <h2>Selecciona la campaña</h2>
              </div>
              <div>
                Selecciona la campaña donde quieres crear este nuevo contacto.
              </div>
              <br />
              <a-table
                :columns="columns"
                :data-source="data"
                :pagination="false"
              >
                <template #bodyCell="{ column, text }">
                  <template v-if="column.dataIndex === 'action'">
                    <a>Crear contacto aquí</a>
                  </template>
                </template>
              </a-table>
              <div class="actions">
                <a-button style="margin-left: 10px">Volver</a-button>
              </div>
            </form>
          </div>
        </template>
      </div>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, reactive } from "vue";
import type { UnwrapRef } from "vue";
import type { Rule } from "ant-design-vue/es/form";

interface FormState {
  name: string;
  paternalSurname: string;
  maternalSurname: string;
  typeDocument: string;
  documentNumber: string;
  address: string;
  email: string;
  codePhone: string;
  phone: string;
}

const labelCol = { span: 24 };
const wrapperCol = { span: 24 };

const formState: UnwrapRef<FormState> = reactive({
  name: "",
  paternalSurname: "",
  maternalSurname: "",
  typeDocument: "DNI",
  documentNumber: "",
  address: "",
  email: "",
  codePhone: "",
  phone: "",
});

const rules: Record<string, Rule[]> = {
  name: [
    {
      required: true,
      message: "El nombre es requerido.",
      trigger: "change",
    },
  ],
};

const currentStep = ref<number>(0);
const steps = [{ title: "Completar datos" }, { title: "Asignar campaña" }];

const props = defineProps({ openCreate: Boolean });
const emits = defineEmits();

const handleClose = () => {
  emits("closeCreate");
};

const nextStep = () => {
  currentStep.value = 1;
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
.modal-create {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}
.content-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
}
.form-title {
  text-align: center;
}
.actions {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}
</style>
