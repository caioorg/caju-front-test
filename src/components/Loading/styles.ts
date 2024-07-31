import styled, { keyframes } from "styled-components"

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
`

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
}`

export const Loader = styled.div`
  border: 10px solid rgba(232, 5, 55, 1);
  border-radius: 50%;
  border-top-color: rgba(255, 117, 0, 1);
  opacity: 1;
  position: fixed;
  inset: 0;
  margin: auto;
  width: 60px;
  height: 60px;
  z-index: 1000;
  transition: opacity 200ms;
  animation: ${rotate} 1s linear;
  animation-iteration-count: infinite;
  transition-delay: 200ms;
`
