import { ButtonHTMLAttributes } from "react"
import styled from "styled-components"

const Button = styled.button<ButtonHTMLAttributes<HTMLButtonElement>>`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 36px;
  padding: 8px 32px;
  background-color: #64a98c;
  cursor: pointer;
  height: 56px;
  color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 16px;
  font-weight: 600;
`

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  bgcolor?: string
  color?: string
}

// Estilizando o botão com styled-components
export const ButtonSmall = styled.button<ButtonProps>`
  font-size: 12px;
  outline: none;
  border-radius: 4px;
  border: none;
  padding: 4px 16px;
  background-color: ${(props) => props.bgcolor ?? "none"};
  color: ${(props) => props.color ?? "#000"};
  cursor: pointer;
`

export default Button
