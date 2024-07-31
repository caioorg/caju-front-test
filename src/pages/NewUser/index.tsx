import { isValidCPF } from "@brazilian-utils/brazilian-utils"
import { NAVIGATION_ROUTES } from "@caju/commons/constants"
import Button from "@caju/components/Buttons"
import { IconButton } from "@caju/components/Buttons/IconButton"
import TextField from "@caju/components/TextField"
import { TextFieldMask } from "@caju/components/TextFieldMask"
import RegistrationService from "@caju/services/registration"
import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation } from "@tanstack/react-query"
import { format, parseISO } from "date-fns"
import { useCallback } from "react"
import { useForm } from "react-hook-form"
import { HiOutlineArrowLeft } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { z } from "zod"
import * as S from "./styles"

const schema = z.object({
  employeeName: z
    .string({ required_error: "Campo obrigatório" })
    .min(3, "Nome deve ter pelo menos 3 caracteres") // Garantir que tenha pelo menos 3 caracteres para nome e sobrenome
    .regex(
      /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?: [A-Za-zÀ-ÖØ-öø-ÿ]+)+$/,
      "O nome deve conter apenas letras e um sobrenome"
    )
    .trim(),
  email: z
    .string({ required_error: "Campo obrigatório" })
    .email({ message: "Precisa ser um e-mail válido" })
    .trim(),
  documentValue: z
    .string({ required_error: "Campo obrigatório" })
    .trim()
    .refine((data) => isValidCPF(data), {
      message: "Precisa ser um CPF válido",
    }),
  admissionDate: z
    .string({ required_error: "Campo obrigatório" })
    .trim()
    .date("Precisa ser uma data válida"),
})

const NewUserPage = () => {
  const history = useNavigate()
  const { register, formState, handleSubmit } = useForm<z.infer<typeof schema>>(
    {
      resolver: zodResolver(schema),
    }
  )

  const mutateCreateUser = useMutation({
    mutationFn: RegistrationService.create,
    onSuccess: () => {
      toast.success("Registro criado com sucesso")
      history(NAVIGATION_ROUTES.dashboard)
    },
    onError: () => {
      toast.error(
        "Ocorreu uma falha ao tentar criar o registro, tente novamente mais tarde"
      )
    },
  })

  const fnCreateUser = useCallback(
    (data: z.infer<typeof schema>) => {
      mutateCreateUser.mutate({
        admissionDate: format(parseISO(data.admissionDate), "dd/MM/yyyy"),
        cpf: data.documentValue.replace(/\D+/g, ""),
        email: data.email,
        employeeName: data.employeeName,
      })
    },
    [mutateCreateUser]
  )

  return (
    <S.Container>
      <S.Card onSubmit={handleSubmit(fnCreateUser)}>
        <IconButton
          onClick={() => history(NAVIGATION_ROUTES.dashboard)}
          aria-label="back"
        >
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <TextField
          {...register("employeeName")}
          placeholder="Nome"
          label="Nome"
          error={formState.errors.employeeName?.message}
        />
        <TextField
          {...register("email")}
          placeholder="Email"
          label="Email"
          type="email"
          error={formState.errors.email?.message}
        />
        <TextFieldMask
          mask="999.999.999-99"
          {...register("documentValue")}
          placeholder="CPF"
          label="CPF"
          error={formState.errors.documentValue?.message}
        />
        <TextField
          {...register("admissionDate")}
          label="Data de admissão"
          type="date"
          error={formState.errors.admissionDate?.message}
        />
        <Button type="submit">Cadastrar</Button>
      </S.Card>
    </S.Container>
  )
}

export default NewUserPage
