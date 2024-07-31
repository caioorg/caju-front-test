import styled from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const DialogContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 500px;
  width: 100%;
`

export const DialogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const DialogTitle = styled.h2`
  margin: 0;
`

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 1.5em;
  cursor: pointer;
`
export const DialogBody = styled.div`
  margin-top: 20px;
`

export const DialogFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  column-gap: 16px;
`
export const DialogFooterCloseButton = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  background: rgba(232, 5, 55, 1);
  border-radius: 36px;
  padding: 8px 32px;
  height: 45px;
  cursor: pointer;
  color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 16px;
  font-weight: 600;
`

export const DialogFooterConfirmButton = styled.button`
  outline: none;
  display: flex;
  align-items: center;
  border: none;
  border-radius: 36px;
  padding: 8px 32px;
  height: 45px;
  cursor: pointer;
  color: #fff;
  background: #64a98c;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  font-size: 16px;
  font-weight: 600;
`
