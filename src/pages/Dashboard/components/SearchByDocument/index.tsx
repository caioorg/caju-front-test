import { isValidCPF } from "@brazilian-utils/brazilian-utils"
import { NAVIGATION_ROUTES } from "@caju/commons/constants"
import Button from "@caju/components/Buttons"
import { IconButton } from "@caju/components/Buttons/IconButton"
import { TextFieldMask } from "@caju/components/TextFieldMask"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCallback, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { HiRefresh, HiSearch, HiTrash } from "react-icons/hi"
import { useNavigate } from "react-router-dom"
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
  onRefresh,
}: {
  onFilter: (value: string) => void
  onRefresh: () => void
}) {
  const [enableClear, setEnableClear] = useState(false)
  const history = useNavigate()

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
        <TextFieldMask
          mask="999.999.999-99"
          label="Buscar"
          {...register("documentValue")}
          error={errors.documentValue?.message}
          placeholder="Digite um CPF válido"
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
        <IconButton aria-label="refetch" onClick={onRefresh}>
          <HiRefresh />
        </IconButton>
        <Button onClick={() => history(NAVIGATION_ROUTES.newUser)}>
          Nova Admissão
        </Button>
      </S.Actions>
    </S.Container>
  )
}
