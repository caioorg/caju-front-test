import RegistrationService from "@caju/services/registration"
import { useMemo, useState } from "react"
import useSwr from "swr"
import { GridByStatus } from "./components/GridByStatus"
import { SearchByDocument } from "./components/SearchByDocument"
import * as S from "./styles"

export default function DashboardPage() {
  const [filter, setFilter] = useState<string>("")
  const { data } = useSwr("/api/registration", RegistrationService.findMany)

  const listRegistrations = useMemo(() => {
    const list = data ?? []
    return filter
      ? list.filter((registration) => registration.cpf.includes(filter))
      : list
  }, [data, filter])

  return (
    <S.Container>
      <SearchByDocument onFilter={setFilter} />
      <GridByStatus registrations={listRegistrations} />
    </S.Container>
  )
}
