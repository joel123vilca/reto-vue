<template>
  <a-drawer
    :width="500"
    title="Detalles del contacto"
    :open="false"
    :footer-style="{ textAlign: 'right' }"
  >
    <div>
      <a-tabs v-model:activeKey="activeKey" type="card">
        <a-tab-pane key="1">
          <template v-slot:tab>
            <span>
              <FilterOutlined />
              Personal
            </span>
          </template>
          <GeneralData />
        </a-tab-pane>
        <a-tab-pane key="2">
          <template v-slot:tab>
            <span>
              <FilterOutlined />
              Ticket
            </span>
          </template>
        </a-tab-pane>
      </a-tabs>
    </div>
  </a-drawer>
</template>

<script lang="ts" setup>
import {
  PlusOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownOutlined,
  FilterOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";
import GeneralData from "./GeneralData.vue";
const activeKey = ref("1");
</script>
