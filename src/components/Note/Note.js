import React, { useState } from "react"
import { Icons } from "../UI"
import { Container, Title, Counter, Input, Error, IconWrapper } from "./Note.style"

export function Note({ addNote, active, error, title, taskCount, onAdd, onSelect, onDelete }) {
  const [newNoteTitle, setNewNoteTitle] = useState("")
  return (
    <Container addNote>
      {/* NEW NOTE */}
      {addNote && (
        <>
          <Icons.PlusIcon />
          <Input
            id="new-note"
            placeholder="NEW NOTE"
            autoComplete="off"
            value={newNoteTitle}
            onKeyUp={e => {
              if (e.key === "Enter") {
                onAdd(newNoteTitle)
                setNewNoteTitle("")
              }
            }}
            onChange={e => setNewNoteTitle(e.target.value.toUpperCase())}
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
