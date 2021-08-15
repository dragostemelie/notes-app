import React from "react"
import { Icons } from ".."
import { Container, InputWrapper, InputField } from "./Input.style"

export const Input = ({ icon }) => {
  return (
    <Container>
      <InputWrapper>
        {icon}
        <InputField />
      </InputWrapper>
    </Container>
  )
}
