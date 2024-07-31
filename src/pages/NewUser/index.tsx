import { NAVIGATION_ROUTES } from "@caju/commons/constants"
import Button from "@caju/components/Buttons"
import { IconButton } from "@caju/components/Buttons/IconButton"
import TextField from "@caju/components/TextField"
import { HiOutlineArrowLeft } from "react-icons/hi"
import { useHistory } from "react-router-dom"
import * as S from "./styles"

const NewUserPage = () => {
  const history = useHistory()

  return (
    <S.Container>
      <S.Card>
        <IconButton
          onClick={() => history.push(NAVIGATION_ROUTES.dashboard)}
          aria-label="back"
        >
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <TextField placeholder="Nome" label="Nome" />
        <TextField placeholder="Email" label="Email" type="email" />
        <TextField placeholder="CPF" label="CPF" />
        <TextField label="Data de admissão" type="date" />
        <Button onClick={() => {}}>Cadastrar</Button>
      </S.Card>
    </S.Container>
  )
}

export default NewUserPage
