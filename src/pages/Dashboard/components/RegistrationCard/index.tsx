import {
  RegistrationItem,
  RegistrationStatus,
} from "@caju/commons/contracts/registration"
import { ButtonSmall } from "@caju/components/Buttons"
import { Fragment, memo } from "react"
import {
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi"
import * as S from "./styles"

interface RegistrationCardProps {
  item: RegistrationItem
  onActionStatus: (args: { id: string; status: RegistrationStatus }) => void
  onDelete: (registrationId: string) => void
}

function RegistrationCard({
  onActionStatus,
  item,
  onDelete,
}: RegistrationCardProps) {
  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{item.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{item.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{item.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        {item.status === RegistrationStatus.REVIEW && (
          <Fragment>
            <ButtonSmall
              bgcolor="rgb(155, 229, 155)"
              onClick={() =>
                onActionStatus({
                  id: item.id,
                  status: RegistrationStatus.APPROVED,
                })
              }
            >
              Aprovar
            </ButtonSmall>
            <ButtonSmall
              bgcolor="rgb(255, 145, 154)"
              onClick={() =>
                onActionStatus({
                  id: item.id,
                  status: RegistrationStatus.REPROVED,
                })
              }
            >
              Reprovar
            </ButtonSmall>
          </Fragment>
        )}

        {item.status !== RegistrationStatus.REVIEW && (
          <ButtonSmall
            bgcolor="#ff8858"
            onClick={() =>
              onActionStatus({ id: item.id, status: RegistrationStatus.REVIEW })
            }
          >
            Revisar novamente
          </ButtonSmall>
        )}
        <HiOutlineTrash onClick={() => onDelete(item.id)} />
      </S.Actions>
    </S.Card>
  )
}

export default memo(RegistrationCard)
