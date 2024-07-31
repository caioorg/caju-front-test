import {
  RegistrationItem,
  RegistrationStatus,
} from "@caju/commons/contracts/registration"
import RegistrationCard from "../RegistrationCard"
import * as S from "./styles"

const COLUMNS = [
  { status: "REVIEW", title: "Pronto para revisar" },
  { status: "APPROVED", title: "Aprovado" },
  { status: "REPROVED", title: "Reprovado" },
]

export function GridByStatus({
  registrations,
  onChangedStatus,
  onDelete,
}: {
  registrations: RegistrationItem[]
  onChangedStatus: (args: { id: string; status: RegistrationStatus }) => void
  onDelete: (registrationId: string) => void
}) {
  return (
    <S.Container>
      {COLUMNS.map((column) => {
        const filteredRegistrations = registrations.filter(
          (registration) => registration.status === column.status
        )

        return (
          <S.Column status={column.status} key={column.title}>
            <>
              <S.TitleColumn status={column.status}>
                {column.title}
              </S.TitleColumn>
              <S.ColumnContent>
                {filteredRegistrations?.map(
                  (registration: RegistrationItem) => (
                    <RegistrationCard
                      item={registration}
                      key={registration.id}
                      onActionStatus={onChangedStatus}
                      onDelete={onDelete}
                    />
                  )
                )}
              </S.ColumnContent>
            </>
          </S.Column>
        )
      })}
    </S.Container>
  )
}
