import styled from "styled-components"
import { colors } from "../components"

export const Container = styled.div`
  display: flex;
  margin: 1rem auto;
  width: 95%;
  max-width: 900px;
  min-height: 500px;
  align-items: stretch;
  & h2 {
    display: flex;
    & span {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  & svg {
    height: 1em;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
    margin: 0;
  }
`

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  max-width: 100%;
  &.left {
    background-color: ${colors.bg.dark};
    border-radius: 1rem 0 0 1rem;
    justify-content: flex-start;
    flex: 1;
    color: white;
  }
  &.right {
    background-color: ${colors.bg.light};
    border-radius: 0 1rem 1rem 0;
    justify-content: flex-start;
    flex: 2;
  }
  &.extended {
    border-radius: 1rem;
  }
  &.hidden {
    display: none;
  }
  @media (max-width: 767px) {
    border-radius: 0 !important;
    max-width: 100% !important;
  }
`
