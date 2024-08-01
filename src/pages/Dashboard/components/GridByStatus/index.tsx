import {
  RegistrationItem,
  RegistrationStatus,
} from "@caju/commons/contracts/registration"
import { useCallback, useState } from "react"
import { DialogConfirm } from "../DialogConfirmation"
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
  const [confirmation, setConfirmation] = useState<{
    open: boolean
    id?: string
    status?: RegistrationStatus
    delete?: boolean
  }>({ open: false })

  const fnSuccessConfirmation = useCallback(() => {
    if (confirmation.delete) onDelete(confirmation.id!)
    else
      onChangedStatus({
        id: confirmation.id!,
        status: confirmation.status!,
      })

    return setConfirmation({ open: false })
  }, [
    confirmation.delete,
    confirmation.id,
    confirmation.status,
    onChangedStatus,
    onDelete,
  ])

  return (
    <S.Container>
      <DialogConfirm
        isOpen={confirmation.open}
        onSuccess={fnSuccessConfirmation}
        onClose={() => setConfirmation({ open: false })}
        title={
          confirmation.delete
            ? "Deseja realmente excluir esse registro?"
            : "Deseja realmente realizar essa alteração?"
        }
      />
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
                      onActionStatus={({ id, status }) =>
                        setConfirmation({ id, status, open: true })
                      }
                      onDelete={(id: string) =>
                        setConfirmation({ id, delete: true, open: true })
                      }
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
