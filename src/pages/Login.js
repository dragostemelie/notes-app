import React from "react"
import { Icons, Typography, Input, Button } from "../components"
import { Container, LoginForm } from "./Login.style"

export default function Login() {
  return (
    <Container>
      <Typography.H2>
        <Icons.LogoIcon />
        Notes App
      </Typography.H2>
      <LoginForm>
        <Typography.H3>LOGIN</Typography.H3>
        <Input icon={<Icons.UserIcon />} />
        <Input icon={<Icons.PasswordIcon />} />
        <Button title="Log in" icon={<Icons.CaretRightIcon />} right />
      </LoginForm>
    </Container>
  )
}
