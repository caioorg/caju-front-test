import { isValidCPF } from "@brazilian-utils/brazilian-utils"
import { NAVIGATION_ROUTES } from "@caju/commons/constants"
import Button from "@caju/components/Buttons"
import { IconButton } from "@caju/components/Buttons/IconButton"
import TextField from "@caju/components/TextField"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { HiRefresh, HiSearch, HiTrash } from "react-icons/hi"
import { useHistory } from "react-router-dom"
import { z } from "zod"
import * as S from "./styles"

const schema = z.object({
  documentValue: z
    .string({ required_error: "Campo obrigatório" })
    .refine((data) => isValidCPF(data), {
      message: "Precisa ser um CPF válido",
    }),
})

export function SearchByDocument({
  onFilter,
}: {
  onFilter: (value: string) => void
}) {
  const [enableClear, setEnableClear] = useState(false)
  const history = useHistory()

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm<{ documentValue: string }>({
    resolver: zodResolver(schema),
  })

  const fnSearchDocument: SubmitHandler<{ documentValue: string }> =
    useCallback(
      (values) => {
        onFilter(values.documentValue.replace(/\D+/g, ""))
        setEnableClear(true)
      },
      [onFilter]
    )

  const fnClearSearch = useCallback(() => {
    onFilter("")
    resetField("documentValue")
    setEnableClear(false)
  }, [onFilter, resetField])

  return (
    <S.Container>
      <S.ContainerSearch onSubmit={handleSubmit(fnSearchDocument)}>
        <TextField
          label="Buscar"
          placeholder="Digite um CPF válido"
          {...register("documentValue")}
          error={errors.documentValue?.message}
        />
        <S.ActionsSearch>
          <IconButton
            aria-label="search"
            type="submit"
            style={
              !errors.documentValue?.message ? { marginTop: 23 } : undefined
            }
          >
            <HiSearch />
          </IconButton>
          {enableClear && (
            <IconButton
              aria-label="clear"
              type="button"
              onClick={fnClearSearch}
              style={
                !errors.documentValue?.message ? { marginTop: 23 } : undefined
              }
            >
              <HiTrash />
            </IconButton>
          )}
        </S.ActionsSearch>
      </S.ContainerSearch>
      <S.Actions>
        <IconButton aria-label="refetch">
          <HiRefresh />
        </IconButton>
        <Button onClick={() => history.push(NAVIGATION_ROUTES.newUser)}>
          Nova Admissão
        </Button>
      </S.Actions>
    </S.Container>
  )
}
