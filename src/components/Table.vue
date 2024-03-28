<template>
  <div>
    <div class="filters-buttons">
      <div class="table-operations">
        <a-input
          v-model:value="searchValue"
          placeholder="Buscar"
          style="width: 240px"
          :prefix="h(SearchOutlined)"
        />
        <a-dropdown>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1"> company 1 </a-menu-item>
              <a-menu-item key="2"> company 2 </a-menu-item>
              <a-menu-item key="3"> company 3 </a-menu-item>
            </a-menu>
          </template>
          <a-button>
            Todas las empresas
            <DownOutlined />
          </a-button>
        </a-dropdown>
        <a-dropdown>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1"> campaña 1</a-menu-item>
              <a-menu-item key="2"> campaña 2 </a-menu-item>
              <a-menu-item key="3"> campaña 3 </a-menu-item>
            </a-menu>
          </template>
          <a-button disabled>
            Todas las campañas
            <DownOutlined />
          </a-button>
        </a-dropdown>
        <a-dropdown>
          <template #overlay>
            <a-menu>
              <a-menu-item key="1"> Activos e inactivos</a-menu-item>
              <a-menu-item key="2"> Activos </a-menu-item>
              <a-menu-item key="3"> Inactivos </a-menu-item>
            </a-menu>
          </template>
          <a-button>
            Activos e inactivos
            <DownOutlined />
          </a-button>
        </a-dropdown>
        <a-button>
          Filtros avanzados
          <FilterOutlined />
        </a-button>
      </div>
      <a-button
        @click="openModalCreate"
        type="primary"
        ghost
        :icon="h(PlusOutlined)"
        >Crear contacto
      </a-button>
    </div>

    <a-table
      v-if="contactsStore.contacts && contactsStore.contacts.results"
      :columns="columns"
      :data-source="contactsStore?.contacts?.results"
      :scroll="{ x: 1300, y: 1000 }"
      bordered
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'full_name'">
          <a>{{ record.full_name }}</a>
        </template>
        <template v-if="column.key === 'channels'">
          <div class="channels">
            <div v-for="(channel, index) in record.channels" :key="index">
              <img :src="channel.icon" alt="channels" class="channel" />
            </div>
          </div>
        </template>
        <template v-if="column.key === 'phone'">
          <a v-if="record.phones.length"
            >{{ record.phones.length }} teléfonos</a
          >
        </template>
        <template v-if="column.key === 'operation'">
          <div class="actions">
            <a-switch v-model:checked="activeState" size="small" />
            <a-tooltip placement="top">
              <template #title>
                <span>Eliminar</span>
              </template>
              <a-button type="link" block>
                <template #icon>
                  <DeleteOutlined />
                </template>
              </a-button>
            </a-tooltip>
          </div>
        </template>
      </template>
    </a-table>
    <CreateContact :openCreate="openCreate" @closeCreate="closeCreate()" />
    <DetailContact />
  </div>
</template>
<script lang="ts" setup>
import { h, ref } from "vue";
import {
  PlusOutlined,
  DeleteOutlined,
  SearchOutlined,
  DownOutlined,
  FilterOutlined,
} from "@ant-design/icons-vue";
import type { TableColumnsType } from "ant-design-vue";
import CreateContact from "./CreateContact.vue";
import DetailContact from "./DetailContact.vue";
import { useContactStore } from "../store/ContactStore";

const openCreate = ref(false);
const activeState = ref(true);
const searchValue = ref("");

const contactsStore = useContactStore();

const columns: TableColumnsType = [
  {
    title: "Cod. Contacto",
    width: 180,
    dataIndex: "code",
    key: "code",
    fixed: "left",
  },
  {
    title: "Nombres y Apellidos",
    width: 200,
    dataIndex: "full_name",
    key: "full_name",
  },
  {
    title: "Empresa",
    width: 150,
    dataIndex: "entity_name",
    key: "entity_name",
  },
  {
    title: "Campaña",
    width: 150,
    dataIndex: "portfolio_name",
    key: "portfolio_name",
  },
  { title: "Teléfono", width: 150, dataIndex: "phone", key: "phone" },
  {
    title: "Número de Documento",
    width: 150,
    dataIndex: "document_number",
    key: "document_number",
  },
  { title: "Canales", width: 150, dataIndex: "channels", key: "channels" },
  { title: "Colas", width: 150, dataIndex: "queues", key: "queues" },
  {
    title: "Fecha de última gestión",
    width: 150,
    dataIndex: "last_management_date",
    key: "last_management_date",
  },
  {
    title: "Fecha de última interacción",
    width: 150,
    dataIndex: "last_interaction_date",
    key: "last_interaction_date",
  },
  {
    title: "Último grupo",
    width: 150,
    dataIndex: "last_group",
    key: "last_group",
  },
  {
    title: "Último resultado",
    width: 150,
    dataIndex: "last_result",
    key: "last_result",
  },
  {
    title: "Último motivo",
    width: 150,
    dataIndex: "last_motive",
    key: "last_motive",
  },
  {
    title: "Último submotivo",
    width: 150,
    dataIndex: "last_submotive",
    key: "last_submotive",
  },
  {
    title: "Última vez gestionado por:",
    width: 150,
    dataIndex: "last_management_user",
    key: "last_management_user",
  },
  {
    title: "Usuario asignado:",
    width: 150,
    dataIndex: "user_assigned",
    key: "user_assigned",
  },
  {
    title: "Fecha de creación",
    width: 150,
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Fecha de última actualización",
    width: 150,
    dataIndex: "updated_at",
    key: "updated_at",
  },
  {
    title: "Action",
    key: "operation",
    fixed: "right",
    width: 100,
  },
];
const selectedRows = ref([]);

const isSelectedRow = (record: any) => {
  return selectedRows.value.includes(record.id);
};

const toggleRowSelection = (record: any) => {
  if (isSelectedRow(record)) {
    selectedRows.value = selectedRows.value.filter((key) => key !== record.id);
  } else {
    selectedRows.value = [...selectedRows.value, record.id];
  }
};
const openModalCreate = () => {
  openCreate.value = true;
};

const closeCreate = () => {
  openCreate.value = false;
};
</script>
<style scoped>
.filters-buttons {
  display: flex;
  justify-content: space-between;
}
.table-operations {
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
}

.table-operations > button {
  margin-right: 8px;
}
.channels {
  display: flex;
  gap: 2px;
}
.channel {
  width: 14px;
  height: 14px;
  object-fit: cover;
}
.actions {
  display: flex;
  align-items: center;
  gap: 4px;
}
</style>
