import { Fragment, ReactNode } from "react"
import * as S from "./styles"

export function Layout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <S.Header>
        <h1>Caju Front Teste</h1>
      </S.Header>
      <S.Wrapper>{children}</S.Wrapper>
    </Fragment>
  )
}
