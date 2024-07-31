import { RegistrationItem } from "@caju/commons/contracts/registration"
import api from "@caju/commons/lib/axios"

export default class RegistrationService {
  static async findMany(): Promise<RegistrationItem[] | []> {
    try {
      const response = await api.get("/registrations")
      if (response.status === 200) return response.data
      return []
    } catch (error) {
      return []
    }
  }
}
