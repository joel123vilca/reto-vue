<template>
  <a-layout-sider v-model:collapsed="collapsed" class="sidebar">
    <div class="logo">
      <Logo />
    </div>
    <a-menu v-model:selectedKeys="selectedKeys">
      <a-menu-item key="1">
        <FundOutlined />
        <span>Estadisticas</span>
      </a-menu-item>
      <a-menu-item key="2">
        <EyeOutlined />
      </a-menu-item>
      <a-menu-item key="3">
        <ContactsOutlined />
        <span>Contactos</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Logo from "../assets/icons/logo.vue";

import {
  FundOutlined,
  EyeOutlined,
  ContactsOutlined,
} from "@ant-design/icons-vue";

const collapsed = ref<boolean>(true);
const selectedKeys = ref<string[]>(["3"]);
</script>

<style scoped>
.sidebar {
  background: #ffffff;
}
.logo {
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ant-menu-item-selected {
  background-color: #fadb14 !important;
}
</style>
