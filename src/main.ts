import { createApp } from "vue";
import "./style.css";
import Antd from "ant-design-vue";
import { createPinia } from "pinia";
import "ant-design-vue/dist/reset.css";
import App from "./App.vue";
const pinia = createPinia();
createApp(App).use(pinia).use(Antd).mount("#app");
