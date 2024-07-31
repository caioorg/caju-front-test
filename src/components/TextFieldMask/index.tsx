import { forwardRef, InputHTMLAttributes } from "react"
import * as S from "./styles"

interface TextFieldMaskProps extends InputHTMLAttributes<HTMLInputElement> {
  mask: string
  error?: string
  label?: string
}

export const TextFieldMask = forwardRef<HTMLInputElement, TextFieldMaskProps>(
  ({ mask, label, error, ...rest }, ref) => {
    return (
      <S.Wrapper>
        {label && <label htmlFor={rest.id}>{label}</label>}
        <S.Input inputRef={ref} {...rest} maskChar="_" mask={mask} />
        {error && <S.MessageError>{error}</S.MessageError>}
      </S.Wrapper>
    )
  }
)
TextFieldMask.displayName = "CustomInputMask"
