import styled from "styled-components"
import { colors } from "../colors"

export const Container = styled.div``
export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
`
export const InputField = styled.input`
  font-size: 1.25rem;
  font-weight: 400;
  border: 0;
  color: white;
  background-color: transparent;
  width: 100%;
  margin-left: 0.5em;
  padding-right: 0.5em;
  border-bottom: 2px solid ${colors.text.light};
  outline: none;
  text-overflow: ellipsis;
  overflow: hidden;
  &::placeholder {
    color: ${colors.text.light};
    padding-left: 0.25em;
    font-size: 0.9em;
  }
  transition: border-color 300ms ease-in-out;
  &:focus {
    border-color: white;
  }
`
