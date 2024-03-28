<template>
  <form>
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
        ref="first_name"
        label="Nombres"
        name="first_name"
        labelAlign="top"
      >
        <a-input v-model:value="formState.first_name" placeholder="Nombres" />
      </a-form-item>
      <div class="content-item">
        <a-form-item
          ref="paternal_surname"
          label="Apellido paterno"
          name="paternal_surname"
          labelAlign="top"
        >
          <a-input v-model:value="formState.paternal_surname" />
        </a-form-item>
        <a-form-item
          ref="maternal_surname"
          label="Apellido materno"
          name="maternal_surname"
          labelAlign="top"
        >
          <a-input v-model:value="formState.maternal_surname" />
        </a-form-item>
      </div>
      <div class="content-item">
        <a-form-item
          ref="type_document"
          label="Tipo de documento"
          name="type_document"
          labelAlign="top"
        >
          <a-select v-model:value="formState.type_document">
            <a-select-option value="DNI">DNI</a-select-option>
            <a-select-option value="RUC">RUC</a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item
          ref="document_number"
          name="document_number"
          labelAlign="top"
        >
          <template #label>
            <span>
              Nº de documento
              <a-tooltip
                title="El n° de DNI es opcional. Si lo agrega, ese será su código de contacto. En caso de no agregarlo, el código de contacto será aleatorio. "
              >
                <InfoCircleOutlined />
              </a-tooltip>
            </span>
          </template>
          <a-input v-model:value="formState.document_number" />
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
          <a-select v-model:value="formState.code_phone" disabled>
            <a-select-option value="51">
              <FlagPeru />
              +51
            </a-select-option>
          </a-select>
          <a-input v-model:value="formState.phone" style="width: 80%" />
        </a-input-group>
      </a-form-item>
      <div class="form-information">
        <InfoCircleOutlined class="info-icon" />
        <span>
          Podrás agregar más de cada uno de estos datos después de crear el
          contacto
        </span>
      </div>
      <div class="actions">
        <a-button style="margin-left: 10px" @click="handleClose"
          >Cancelar</a-button
        >
        <a-button
          style="margin-left: 10px"
          @click="nextStep"
          type="primary"
          :disabled="disabled"
          >Continuar</a-button
        >
      </div>
    </a-form>
  </form>
</template>

<script setup lang="ts">
import { defineEmits, reactive, computed } from "vue";
import type { UnwrapRef } from "vue";
import { InfoCircleOutlined } from "@ant-design/icons-vue";
import FlagPeru from "../../assets/icons/FlagPeru.vue";

const emits = defineEmits();

interface FormState {
  first_name: string;
  paternal_surname: string;
  maternal_surname: string;
  type_document: string;
  document_number: string;
  address: string;
  email: string;
  code_phone: string;
  phone: string;
}

const labelCol = { span: 24 };
const wrapperCol = { span: 24 };

const formState: UnwrapRef<FormState> = reactive({
  first_name: "",
  paternal_surname: "",
  maternal_surname: "",
  type_document: "DNI",
  document_number: "",
  address: "",
  email: "",
  code_phone: "51",
  phone: "",
  portfolio: "1",
  country: "1",
});

const handleClose = () => {
  emits("close");
};

const nextStep = () => {
  emits("submitForm", formState);
};

const disabled = computed(() => {
  return !(formState.first_name && formState.paternal_surname);
});

const rules = {
  first_name: [
    { required: true, message: "El nombre es requerido", trigger: "blur" },
  ],
  paternal_surname: [
    {
      required: true,
      message: "El apellido paterno es requerido",
      trigger: "blur",
    },
  ],
};
</script>

<style scoped>
.form-title {
  text-align: center;
}
.form-information {
  color: rgba(89, 89, 89, 1);
  display: flex;
  gap: 8px;
}
.info-icon {
  margin-top: 6px;
}
.actions {
  display: flex;
  justify-content: center;
  margin-top: 12px;
}
.content-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 12px;
}
</style>
