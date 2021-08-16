import styled from "styled-components"
import { Typography, colors } from "../UI"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 2rem 0 2rem;
  max-width: 100%;
  background-color: ${colors.bg.dark};
  border-radius: 1rem 0 0 1rem;
  justify-content: flex-start;
  flex: 1;
  color: white;
  position: relative;
  max-height: 800px;
  transition: max-height 0.6s ease-in;
  &.extended {
    border-radius: 1rem;
    flex: 1;
  }
  & .hidden {
    display: none;
  }
  @media (max-width: 767px) {
    flex: unset;
    border-radius: 0 !important;
    max-width: 100% !important;
    & .desktop {
      display: none;
    }
  }
`
export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 1.5rem;
  margin-bottom: 1em;
  color: ${colors.text.light};
  @media (min-width: 767px) {
    & .logout-icon {
      display: none;
    }
  }
`
export const Username = styled(Typography.H2)`
  font-size: inherit;
  margin: 0;
  flex: 1;
`
export const NotesTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 1.5rem;
  font-weight: 700;
  color: ${colors.text.light};
`
export const NotesList = styled.div`
  margin-top: 0.25em;
  display: flex;
  flex-direction: column;
  gap: 1em;
  & div:last-child {
    margin-top: 1.5em;
  }
`

export const Footer = styled.div`
  @media (min-width: 767px) {
    flex: 1;
    display: flex;
    align-items: flex-end;
    align-self: flex-end;
    padding-bottom: 1em;
  }
`
export const CollapseControl = styled.div`
  margin: auto;
  width: fit-content;
  font-size: 2rem;
  color: ${colors.text.light};
  @media (min-width: 767px) {
    display: none;
  }
`
export const Logout = styled.div`
  margin-left: auto;
  width: fit-content;
  font-size: 2rem;
  color: ${colors.text.light};
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  &:hover {
    color: white;
  }
`
