<template>
  <a-layout id="app-layout">
    <Sidebar />
    <a-layout>
      <Header />
      <a-layout-content class="content">
        <div class="content-inner">
          <Dashboard />
        </div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue";
import Dashboard from "./views/Dashboard.vue";
</script>

<style scoped>
#app-layout {
  min-height: 100vh;
}

.content {
  margin: 24px;
  overflow: initial;
}

.content-inner {
  background: #fff;
  padding: 24px;
  height: 100%;
}
</style>
