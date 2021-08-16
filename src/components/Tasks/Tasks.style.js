import styled from "styled-components"
import { Typography, colors } from "../UI"

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem 2rem 0 2rem;
  max-width: 100%;
  background-color: ${colors.bg.light};
  border-radius: 0 1rem 1rem 0;
  justify-content: flex-start;
  flex: 2;
  &.hidden {
    display: none;
  }
  @media (max-width: 767px) {
    border-radius: 0 !important;
    max-width: 100% !important;
  }
`
export const TasksTitle = styled(Typography.H3)`
  font-weight: 400;
`
export const TasksList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  font-size: 1.25rem;
  font-weight: 300;
`
export const NewTask = styled.div`
  margin-top: 0.25em;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
  font-size: 1.25rem;
`
