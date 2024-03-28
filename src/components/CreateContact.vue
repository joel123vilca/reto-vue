<template>
  <div>
    <a-modal
      v-model:open="props.openCreate"
      title="Crea un nuevo contacto"
      :closable="true"
      :footer="null"
      @cancel="handleClose"
    >
      <ContactForm
        v-if="currentStep === 0"
        :formState="formState"
        :disabled="disabled"
        @submitForm="handleSubmitForm"
        @close="handleClose"
      />
      <CampaignSelection
        v-else-if="currentStep === 1"
        @backStep="backStep"
        @sendForm="sendForm"
      />
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref, computed } from "vue";
import { notification } from "ant-design-vue";
import ContactService from "../services/ContactService";
import ContactForm from "./CreateContactComponents/CreateForm.vue";
import CampaignSelection from "./CreateContactComponents/SelectCompain.vue";

const props = defineProps({ openCreate: Boolean });
const emits = defineEmits();
const openNotificationSuccess = (type: string) => {
  notification[type]({
    message: "Contacto Creado con éxito",
  });
};
const openNotificationError = (type: string) => {
  notification[type]({
    message: "Error al crear contacto",
  });
};

const currentStep = ref<number>(0);
const formState = ref(null);

const handleSubmitForm = (formData) => {
  formState.value = formData;
  nextStep();
};

const handleClose = () => {
  currentStep.value = 0;
  emits("closeCreate");
};

const nextStep = () => {
  currentStep.value = 1;
};

const backStep = () => {
  currentStep.value = 0;
};

const sendForm = async () => {
  try {
    await ContactService.createContact(formState.value);
    openNotificationSuccess("success");
  } catch (e) {
    openNotificationError("error");
  }
  handleClose();
};
</script>
