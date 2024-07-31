import {
  RegistrationItem,
  RegistrationStatus,
} from "@caju/commons/contracts/registration"
import Helpers from "@caju/commons/helpers"
import api from "@caju/commons/lib/axios"

export default class RegistrationService {
  static async findMany(): Promise<RegistrationItem[] | []> {
    try {
      await Helpers.delay(1000)
      const response = await api.get("/registrations")
      if (response.status === 200) return response.data
      return []
    } catch (error) {
      return []
    }
  }

  static async updatedStatus(args: {
    status: RegistrationStatus
    registrationId: string
  }): Promise<boolean> {
    try {
      await Helpers.delay(1000)
      const response = await api.patch(
        `/registrations/${args.registrationId}`,
        { status: args.status }
      )

      return response.status === 200
    } catch (error) {
      return false
    }
  }

  static async deleleById(registrationId: string): Promise<boolean> {
    try {
      await Helpers.delay(1000)
      const response = await api.delete(`/registrations/${registrationId}`)
      return response.status === 200
    } catch (error) {
      return false
    }
  }
}
