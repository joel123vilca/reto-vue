<template>
  <a-layout-header style="background: #fff; padding: 0" class="header">
    <div class="header-left">
      <h3>Contactos</h3>
      <InfoCircleOutlined />
      <a-tag color="green">Webphone conectado</a-tag>
    </div>
    <div class="header-rigth">
      <GlobalOutlined />
      <span>Hora plataforma {{ currentTime }} </span>
      <PhoneOutlined />

      <a-badge :count="1">
        <BellOutlined />
      </a-badge>
      <a-dropdown>
        <a class="between-container" @click.prevent>
          <a-avatar style="color: #f56a00; background-color: #fde3cf">
            <template #icon>
              <SmileOutlined />
            </template>
          </a-avatar>
          <span>Joel</span>
          <DownOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">Cerrar Sesión</a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import {
  InfoCircleOutlined,
  GlobalOutlined,
  PhoneOutlined,
  BellOutlined,
  SmileOutlined,
  DownOutlined,
} from "@ant-design/icons-vue";

const currentTime = ref<string>("");

onMounted(() => {
  const getCurrentTime = () => {
    const date = new Date();
    const localTime = date.toLocaleTimeString("en-US", {
      timeZone: "America/Lima",
      hour12: false,
      timeZoneName: "short",
    });
    currentTime.value = `${localTime} (GMT-5) Perú`;
  };

  getCurrentTime();
});
</script>
<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}
.between-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97px;
  color: black;
}
.header-left {
  display: flex;
  align-items: center;
  padding-left: 16px;
  gap: 16px;
}
.header-rigth {
  display: flex;
  gap: 16px;
  padding-right: 16px;
  align-items: center;
}
</style>
