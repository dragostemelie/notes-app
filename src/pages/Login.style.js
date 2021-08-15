import styled from "styled-components"
import { colors } from "../components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  padding: 1.5rem 1rem 0 1rem;
  width: 95%;
  max-width: 900px;
  min-height: 500px;
  border-radius: 1rem;
  color: ${colors.text.light};
  background-color: ${colors.bg.dark};
  & svg {
    height: 1em;
  }
  @media (max-width: 767px) {
    min-height: 100vh;
    border-radius: 0;
    margin: 0;
    width: 100%;
    & .desktop {
      display: none;
    }
  }
`
export const LoginForm = styled.div`
  align-self: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2em;
  margin: 3em auto 2em auto;
  width: 100%;
  max-width: 310px;
  & svg {
    width: 2em;
    height: auto;
    color: ${colors.text.light};
    &.caret-right {
      height: 1em;
      width: auto;
    }
  }

  @media (max-width: 767px) {
    align-self: unset;
  }
`
