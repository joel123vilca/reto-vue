import axios from "axios";
//import Plan from "@/models/Plan";
import { useContactStore } from "../store/ContactStore";

export default class PlanService {
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
      console.log("console", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching contacts:", error);
      return [];
    }
  }
}
