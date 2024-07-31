export enum RegistrationStatus {
  APPROVED = "APPROVED",
  REVIEW = "REVIEW",
  REPROVED = "REPROVED",
}

export interface RegistrationItem {
  id: string
  admissionDate: string
  email: string
  employeeName: string
  status: RegistrationStatus
  cpf: string
}
