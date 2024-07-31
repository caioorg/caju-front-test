import { Fragment } from "react"
import * as S from "./styles"

export const LoadingSpinner = () => {
  return (
    <Fragment>
      <S.Overlay />
      <S.Loader />
    </Fragment>
  )
}
