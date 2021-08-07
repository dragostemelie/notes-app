import React from "react"
import { ListIcon, PlusIcon, DeleteIcon } from "../components"
import { Container, Title, Counter, Input, Error, IconWrapper } from "./note.style"

export function Note({ add, active, error, title, taskCount, onSubmit, onSelect, onDelete }) {
  return (
    <Container add>
      {/* NEW NOTE */}
      {add && (
        <>
          <PlusIcon />
          <Input
            id="new-note"
            placeholder="NEW NOTE"
            onKeyDown={e => e.key === "Enter" && onSubmit()}
            autoComplete="off"
          />
          {error && <Error>{error}</Error>}
        </>
      )}
      {/* NORMAL NOTE */}
      {!add && (
        <>
          <ListIcon active={active} />
          <Title href="#" onClick={onSelect} active={active}>
            {title}
            {taskCount && <Counter>{taskCount}</Counter>}
          </Title>
          <IconWrapper>
            <DeleteIcon onClick={onDelete} />
          </IconWrapper>
        </>
      )}
    </Container>
  )
}
