import styled from "styled-components"
import { Typography, colors } from "../UI"

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5em;
  background-color: ${({ checked }) => (checked ? colors.bg.grey : "white")};
  margin: 0.25em;
  padding: 0.25em 0.75em;
  border-radius: 0.5em;
  transition: all 300ms ease-in-out;
  & svg {
    height: 1.2em;
    &.circle-icon,
    &.pen-icon {
      color: ${colors.primary};
    }
    &.checked-icon {
      color: white;
    }
    &.delete-icon,
    &.close-icon {
      color: ${({ checked }) => (checked ? "white" : colors.text.light)};
      cursor: pointer;
      transition: color 300ms ease-in-out;
      &:hover,
      &:active {
        color: ${colors.accent};
      }
    }
  }
`
export const Name = styled(Typography.P)`
  font-size: 1.1em;
  color: ${({ checked }) => (checked ? "white" : colors.text.dark)};
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
  flex: 1;
  cursor: pointer;
  word-break: break-word;
`
export const NewTask = styled.input`
  font-size: 1.1em;
  font-weight: 400;
  height: 1.5em;
  border: 0;
  color: ${colors.text.dark};
  background-color: transparent;
  border-bottom: 2px solid white;
  outline: none;
  flex: 1;
  max-width: 100%;
  text-transform: uppercase;
  &::placeholder {
    color: ${colors.text.light};
    font-size: 0.9em;
  }
`

export const Error = styled.p`
  position: absolute;
  bottom: -3em;
  left: 1em;
  color: ${colors.text.error};
  margin-right: 0.75em;
  margin-top: 0.25em;
`
