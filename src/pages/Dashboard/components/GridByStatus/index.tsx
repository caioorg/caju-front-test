import { RegistrationItem } from "@caju/commons/contracts/registration"
import RegistrationCard from "../RegistrationCard"
import * as S from "./styles"

const COLUMNS = [
  { status: "REVIEW", title: "Pronto para revisar" },
  { status: "APPROVED", title: "Aprovado" },
  { status: "REPROVED", title: "Reprovado" },
]

export function GridByStatus({
  registrations,
}: {
  registrations: RegistrationItem[]
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
                  (registration: RegistrationItem) => {
                    return (
                      <RegistrationCard
                        item={registration}
                        key={registration.id}
                        onApprove={() => console.log("aprovado")}
                        onDisapprove={() => console.log("reprovado")}
                        onRevision={() => console.log("revisão")}
                      />
                    )
                  }
                )}
              </S.ColumnContent>
            </>
          </S.Column>
        )
      })}
    </S.Container>
  )
}
