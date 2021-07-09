import styled from "styled-components"
import { colors } from "./common.style"

export const Container = styled.div`
  display: flex;
  justify-content: ${({ right }) => (right ? "flex-end" : "flex-start")};
  margin: 0.5em;
`

export const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  background-color: ${colors.primary};
  border-radius: 2em;
  padding: 0.5em 1em;
  cursor: pointer;
  transition: background-color 300ms ease-in-out;
  & p {
    font-size: 1rem;
    font-weight: 600;
    color: white;
    margin: 0;
  }
  & svg {
    height: 1em;
    color: white;
  }
  &:hover {
    background-color: ${colors.accent};
  }
  &:active {
    background-color: ${colors.bg.disabled};
  }
`
