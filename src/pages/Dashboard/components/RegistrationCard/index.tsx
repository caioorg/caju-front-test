import { RegistrationItem } from "@caju/commons/contracts/registration"
import { ButtonSmall } from "@caju/components/Buttons"
import { memo } from "react"
import {
  HiOutlineCalendar,
  HiOutlineMail,
  HiOutlineTrash,
  HiOutlineUser,
} from "react-icons/hi"
import * as S from "./styles"

interface RegistrationCardProps {
  item: RegistrationItem
  onDisapprove: () => void
  onApprove: () => void
  onRevision: () => void
}

function RegistrationCard(args: RegistrationCardProps) {
  return (
    <S.Card>
      <S.IconAndText>
        <HiOutlineUser />
        <h3>{args.item.employeeName}</h3>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineMail />
        <p>{args.item.email}</p>
      </S.IconAndText>
      <S.IconAndText>
        <HiOutlineCalendar />
        <span>{args.item.admissionDate}</span>
      </S.IconAndText>
      <S.Actions>
        <ButtonSmall bgcolor="rgb(255, 145, 154)">Reprovar</ButtonSmall>
        <ButtonSmall bgcolor="rgb(155, 229, 155)">Aprovar</ButtonSmall>
        <ButtonSmall bgcolor="#ff8858">Revisar novamente</ButtonSmall>
        <HiOutlineTrash />
      </S.Actions>
    </S.Card>
  )
}

export default memo(RegistrationCard)
