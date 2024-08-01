import { RegistrationStatus } from "@caju/commons/contracts/registration"
import Helpers from "@caju/commons/helpers"
import api from "@caju/commons/lib/axios"
import RegistrationService from "../registration"

jest.mock("@caju/commons/helpers")
jest.mock("@caju/commons/lib/axios")

describe("[Service] Registration Service", () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe("findMany", () => {
    it("should return data when the response status is 200", async () => {
      const data = [
        {
          id: "1",
          admissionDate: "2023-01-01",
          email: "test@test.com",
          employeeName: "Test User",
          status: RegistrationStatus.APPROVED,
          cpf: "12345678900",
        },
      ]

      ;(api.get as jest.Mock).mockResolvedValue({ status: 200, data })
      const result = await RegistrationService.findMany()
      expect(result).toEqual(data)
      expect(Helpers.delay).toHaveBeenCalledWith(1000)
    })

    it("should return empty array when the response status is not 200", async () => {
      ;(api.get as jest.Mock).mockResolvedValue({ status: 500 })
      const result = await RegistrationService.findMany()
      expect(result).toEqual([])
    })

    it("should return empty array on error", async () => {
      ;(api.get as jest.Mock).mockRejectedValue(new Error("Network Error"))
      const result = await RegistrationService.findMany()
      expect(result).toEqual([])
    })
  })

  describe("updatedStatus", () => {
    it("should return true when the response status is 200", async () => {
      ;(api.patch as jest.Mock).mockResolvedValue({ status: 200 })
      const result = await RegistrationService.updatedStatus({
        status: RegistrationStatus.APPROVED,
        registrationId: "1",
      })
      expect(result).toBe(true)
      expect(Helpers.delay).toHaveBeenCalledWith(1000)
    })

    it("should return false when the response status is not 200", async () => {
      ;(api.patch as jest.Mock).mockResolvedValue({ status: 500 })
      const result = await RegistrationService.updatedStatus({
        status: RegistrationStatus.APPROVED,
        registrationId: "1",
      })
      expect(result).toBe(false)
    })

    it("should return false on error", async () => {
      ;(api.patch as jest.Mock).mockRejectedValue(new Error("Network Error"))
      const result = await RegistrationService.updatedStatus({
        status: RegistrationStatus.APPROVED,
        registrationId: "1",
      })
      expect(result).toBe(false)
    })
  })

  describe("deleleById", () => {
    it("should return true when the response status is 200", async () => {
      ;(api.delete as jest.Mock).mockResolvedValue({ status: 200 })
      const result = await RegistrationService.deleleById("1")
      expect(result).toBe(true)
      expect(Helpers.delay).toHaveBeenCalledWith(1000)
    })

    it("should return false when the response status is not 200", async () => {
      ;(api.delete as jest.Mock).mockResolvedValue({ status: 500 })
      const result = await RegistrationService.deleleById("1")
      expect(result).toBe(false)
    })

    it("should return false on error", async () => {
      ;(api.delete as jest.Mock).mockRejectedValue(new Error("Network Error"))
      const result = await RegistrationService.deleleById("1")
      expect(result).toBe(false)
    })
  })

  describe("create", () => {
    it("should return data when the response status is 200", async () => {
      const data = {
        id: "1",
        admissionDate: "2023-01-01",
        email: "test@test.com",
        employeeName: "Test User",
        status: RegistrationStatus.REVIEW,
        cpf: "12345678900",
      }
      ;(api.post as jest.Mock).mockResolvedValue({ status: 200, data })
      const result = await RegistrationService.create({
        admissionDate: "2023-01-01",
        email: "test@test.com",
        employeeName: "Test User",
        cpf: "12345678900",
      })
      expect(result).toEqual(data)
    })

    it("should return null on error", async () => {
      ;(api.post as jest.Mock).mockRejectedValue(new Error("Network Error"))
      const result = await RegistrationService.create({
        admissionDate: "2023-01-01",
        email: "test@test.com",
        employeeName: "Test User",
        cpf: "12345678900",
      })
      expect(result).toBeNull()
    })
  })
})
