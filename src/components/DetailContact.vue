<template>
  <a-drawer
    :width="600"
    title="Detalles del contacto"
    :open="props.openDetail"
    :footer-style="{ textAlign: 'right' }"
    @close="onClose"
  >
    <div>
      <div class="profile">
        <a-avatar size="large" class="avatar-text">
          {{ getAvartar(props.contact.full_name) }}
        </a-avatar>
        <div>
          <a-typography-title :level="5"
            >{{ props.contact.full_name }}
          </a-typography-title>
          <a-typography-text type="secondary" class="italic-text"
            >Campaña:{{ props.contact.portfolio_name }}
          </a-typography-text>
        </div>
      </div>
      <a-tabs v-model:activeKey="activeKey" type="card" centered>
        <a-tab-pane key="1">
          <template v-slot:tab>
            <div class="tab-label">
              <UserIcon />
              Personal
            </div>
          </template>
          <GeneralData :contactData="props.contact" />
        </a-tab-pane>
        <a-tab-pane key="2">
          <template v-slot:tab>
            <div class="tab-label">
              <TicketIcon />
              Ticket
            </div>
          </template>
          <Tickets />
        </a-tab-pane>
      </a-tabs>
    </div>
    <template #footer>
      <div class="detail-actions">
        <a-space>
          <a-button danger type="text">Eliminar contacto</a-button>
        </a-space>
        <a-space>
          <a-button>Ver anterior contacto</a-button>
          <a-button type="primary">Ver siguiente contacto</a-button>
        </a-space>
      </div>
    </template>
  </a-drawer>
</template>

<script lang="ts" setup>
import {
  PlusOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownOutlined,
  FilterOutlined,
  LineHeightOutlined,
  AlignCenterOutlined,
} from "@ant-design/icons-vue";
import UserIcon from "../assets/icons/UserIcon.vue";
import TicketIcon from "../assets/icons/TicketIcon.vue";
import { ref, emits } from "vue";
import GeneralData from "./DetailContactComponents/GeneralData.vue";
import Tickets from "./DetailContactComponents/Tickets.vue";

const activeKey = ref("1");
const props = defineProps({ openDetail: Boolean, contact: Object });
const emits = defineEmits();

const onClose = () => {
  emits("closeDetail");
};

const getAvartar = (fullname) => {
  const words = fullname.split(" ");
  let initials = "";
  words.forEach((word) => {
    initials += word.charAt(0).toUpperCase();
  });
  return initials;
};
</script>
<style scoped>
.tab-label {
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
.profile {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
}
.avatar-text {
  background-color: rgba(29, 57, 196, 0.2);
  color: rgba(29, 57, 196, 1);
  border: 1px solid rgba(29, 57, 196, 1);
  height: 48px;
  width: 48px;
  font-size: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.italic-text {
  font-style: italic;
}
.detail-actions {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
