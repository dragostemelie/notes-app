import styled from "styled-components"
import { Typography, colors } from "../UI"

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  & svg {
    height: 1em;
    color: ${colors.text.light};
    &.active {
      color: white;
    }
    &.plus-icon {
      width: 1em !important;
      color: ${colors.text.light};
      cursor: pointer;
      transition: color 300ms ease-in-out;
      &:hover,
      &:active {
        color: white;
      }
    }
    &.delete-icon {
      height: 1.2em;
      transition: color 300ms ease-in-out;
      &:hover,
      &:active {
        color: white;
      }
    }
  }
`

export const IconWrapper = styled.span`
  cursor: pointer;
  flex: 1;
  text-align: right;
`

export const Title = styled(Typography.A)`
  font-size: 1.25rem;
  font-weight: 400;
  color: ${({ active }) => (active ? "white" : colors.text.light)};
  margin-left: 0.5em;
  position: relative;
  text-decoration: ${({ active }) => (active ? "underline" : "none")};
  max-width: 180px;
`

export const Counter = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
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
  border-bottom: 2px solid ${colors.text.light};
  outline: none;
  max-width: 200px;
  text-transform: uppercase;
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

export const Error = styled.p`
  position: absolute;
  bottom: -3em;
  left: 2em;
  color: ${colors.text.error};
  margin-right: 0.75em;
  margin-top: 0.25em;
`
