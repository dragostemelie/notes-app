import styled from "styled-components"
import { A } from "../components"
import { colors } from "./common.style"

export const Container = styled.div`
  position: relative;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  & svg {
    height: 1em;
    color: white;
    &.plus-icon {
      width: 1em !important;
      color: ${colors.text.light};
    }
    &.delete-icon {
      height: 1.2em;
    }
  }
`

export const IconWrapper = styled.span`
  cursor: pointer;
  flex: 1;
  text-align: right;
`

export const Title = styled(A)`
  font-size: 1.25rem;
  font-weight: 400;
  color: white;
  margin-left: 0.5em;
  position: relative;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
`

export const Counter = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  background-color: ${colors.bg.yellow};
  width: 1.5em;
  height: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -0.25em;
  right: -1.5em;
  border-radius: 50%;
`

export const Input = styled.input`
  font-size: 1.25rem;
  font-weight: 400;
  border: 0;
  color: white;
  background-color: transparent;
  margin-left: 0.5em;
  padding-right: 0.5em;
  border-bottom: 2px solid white;
  outline: none;
  max-width: 200px;
  &::placeholder {
    color: ${colors.text.light};
    padding-left: 0.25em;
    font-size: 0.9em;
  }
`

export const Error = styled.p`
  position: absolute;
  bottom: -3em;
  left: 2em;
  color: ${colors.text.error};
  margin-right: 0.75em;
  margin-top: 0.25em;
`
