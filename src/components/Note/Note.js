import React from "react"
import { Icons } from "../UI"
import { Container, Title, Counter, Input, Error, IconWrapper } from "./Note.style"

export function Note({ addNote, active, error, title, taskCount, onSubmit, onSelect, onDelete }) {
  return (
    <Container addNote>
      {/* NEW NOTE */}
      {addNote && (
        <>
          <Icons.PlusIcon />
          <Input
            id="new-note"
            placeholder="NEW NOTE"
            onKeyDown={(e) => e.key === "Enter" && onSubmit()}
            autoComplete="off"
          />
          {error && <Error>{error}</Error>}
        </>
      )}
      {/* NORMAL NOTE */}
      {!addNote && (
        <>
          <Icons.ListIcon active={active} />
          <Title href="#" onClick={onSelect} active={active}>
            {title}
            {taskCount && <Counter>{taskCount}</Counter>}
          </Title>
          <IconWrapper>
            <Icons.DeleteIcon onClick={onDelete} />
          </IconWrapper>
        </>
      )}
    </Container>
  )
}
