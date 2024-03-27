import { createPinia, defineStore } from "pinia";

const pinia = createPinia();

export const useContactStore = defineStore({
  id: "contact",
  state: () => ({
    contacts: null,
  }),
  actions: {
    setContacts(contacts: any) {
      this.contacts = contacts;
    },
  },
});

export default pinia;
