import axios from "axios";
import { useContactStore } from "../store/ContactStore";

export default class ContactService {
  static async getContacts(): Promise<any[]> {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        "https://cocachola.backend.scorecloud.dev/contacts/clients/",
        {
          headers,
        }
      );
      useContactStore().setContacts(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return [];
    }
  }

  static async getContactById(): Promise<any[]> {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get(
        "https://cocachola.backend.scorecloud.dev/contacts/clients/81236",
        {
          headers,
        }
      );
      useContactStore().setContacts(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return [];
    }
  }

  static async createContact(contactData: any): Promise<any> {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const response = await axios.post(
        "https://cocachola.backend.scorecloud.dev/contacts/clients/create/",
        contactData,
        { headers }
      );
      return response.data;
    } catch (error) {
      throw new Error("Error al crear el contacto: ");
    }
  }
}
