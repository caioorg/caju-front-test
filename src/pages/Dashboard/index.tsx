import {
  queryClient,
  useMutation,
  useQuery,
} from "@caju/commons/lib/tanstack-query"
import { LoadingSpinner } from "@caju/components/Loading"
import RegistrationService from "@caju/services/registration"
import { useMemo, useState } from "react"
import { toast } from "react-toastify"
import { GridByStatus } from "./components/GridByStatus"
import { SearchByDocument } from "./components/SearchByDocument"
import * as S from "./styles"

export default function DashboardPage() {
  const [filter, setFilter] = useState<string>("")

  const { data, isLoading, refetch, isRefetching } = useQuery({
    queryKey: ["registration"],
    queryFn: RegistrationService.findMany,
  })

  const mutateStatuRegistration = useMutation({
    mutationFn: RegistrationService.updatedStatus,
    onSuccess: () => {
      toast.success("Status alterado com sucesso.")
      queryClient.invalidateQueries({ queryKey: ["registration"] })
    },
    onError: () => {
      toast.error(
        "Ocorreu uma falha ao tentar alterar o status, tente novamente mais tarde!"
      )
    },
  })

  const mutateDeleteRegistration = useMutation({
    mutationFn: RegistrationService.deleleById,
    onSuccess: () => {
      toast.success("Registro deletado com sucesso.")
      queryClient.invalidateQueries({ queryKey: ["registration"] })
    },
    onError: () => {
      toast.error(
        "Ocorreu uma falha ao tentar excluir o registro, tente novamente mais tarde!"
      )
    },
  })

  const listRegistrations = useMemo(() => {
    const list = data ?? []
    return filter
      ? list.filter((registration) => registration.cpf.includes(filter))
      : list
  }, [data, filter])

  const loading = useMemo(() => {
    return (
      isLoading ||
      isRefetching ||
      mutateStatuRegistration.isPending ||
      mutateDeleteRegistration.isPending
    )
  }, [
    isLoading,
    isRefetching,
    mutateDeleteRegistration.isPending,
    mutateStatuRegistration.isPending,
  ])

  return (
    <S.Container>
      {loading && <LoadingSpinner />}
      <SearchByDocument onFilter={setFilter} onRefresh={() => refetch()} />
      <GridByStatus
        registrations={listRegistrations}
        onChangedStatus={({ id, status }) =>
          mutateStatuRegistration.mutate({ registrationId: id, status })
        }
        onDelete={(registrationId: string) =>
          mutateDeleteRegistration.mutate(registrationId)
        }
      />
    </S.Container>
  )
}
