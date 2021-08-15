import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  margin: 1rem auto;
  width: 95%;
  max-width: 900px;
  min-height: 500px;
  align-items: stretch;
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
