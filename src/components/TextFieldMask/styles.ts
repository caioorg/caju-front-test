import InputMask from "react-input-mask"
import styled from "styled-components"

export const Input = styled(InputMask)`
  padding: 0 8px;
  border-radius: 2px;
  width: 100%;
  min-height: 36px;
  background-color: #ffffff;
  border: 1px solid rgba(36, 28, 21, 0.3);
  transition: all 0.2s ease-in-out 0s;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  border-radius: 8px;
  :focus {
    outline: none;
    border: 1px solid #007c89;
    box-shadow: inset 0 0 0 1px #007c89;
  }
`
export const MessageError = styled.span`
  font-size: 12px;
  color: red;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`
