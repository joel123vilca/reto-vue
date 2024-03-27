<template>
  <div class="dashboard">
    <div class="dashboard-info">
      <div>
        Gestiona los contactos de tus campañas. Puedes ver, editar información y
        realizar acciones individuales como llamadas. Click aquí para conocer
        más.
      </div>
      <div>Contactos encontrados: 21230</div>
    </div>
    <Table></Table>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import axios from "axios";
import Table from "../components/Table.vue";
import ContactService from "../services/ContactService";

const login = async () => {
  try {
    const username = "elio.rodriguez@securitec.pe";
    const password = "Hola123#";
    const response = await axios.post(
      "https://cocachola.backend.scorecloud.dev/token/",
      {
        username: username,
        password: password,
      }
    );
    const token = response.data.access;
    localStorage.setItem("token", token);
    return token;
  } catch (error) {
    throw error;
  }
};

onMounted(async () => {
  const token = localStorage.getItem("token");
  if (token === null) {
    await login();
  }
  ContactService.getContacts();
});
</script>
<style scoped>
.dashboard {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.dashboard-info {
  display: flex;
  justify-content: space-between;
}
</style>
