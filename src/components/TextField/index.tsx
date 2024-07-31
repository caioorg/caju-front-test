import { forwardRef, InputHTMLAttributes } from "react"
import * as S from "./styles"

type TextFieldProps = {
  label?: string
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ label, error, ...rest }, ref) => {
    return (
      <S.Wrapper>
        {label && <label htmlFor={rest.id}>{label}</label>}
        <S.Input ref={ref} {...rest} />
        {error && <S.MessageError>{error}</S.MessageError>}
      </S.Wrapper>
    )
  }
)

TextField.displayName = "TextField"

export default TextField
