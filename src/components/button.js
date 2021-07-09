import React from "react"
import { Container, Wrapper } from "./button.style"

export const Button = ({ title, icon, onClick, right }) => {
  return (
    <Container right={right}>
      <Wrapper onClick={onClick}>
        <p>{title}</p>
        {icon}
      </Wrapper>
    </Container>
  )
}
