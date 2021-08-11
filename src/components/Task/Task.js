import React from "react"
import { Icons } from "../UI"
import { Container, Name, NewTask, Error } from "./Task.style"

export const Task = ({ addTask, checked, name, onCheck, onDelete, onSubmit, onClose, error }) => {
  return (
    <Container checked={checked} addTask={addTask}>
      {/* NEW TASK */}
      {addTask && (
        <>
          <Icons.PenIcon />
          <NewTask
            id="new-task"
            placeholder="New task"
            onKeyDown={(e) => e.key === "Enter" && onSubmit()}
            autoComplete="off"
            autoFocus={true}
          />
          <Icons.CloseIcon onClick={onClose} />
          {error && <Error>{error}</Error>}
        </>
      )}
      {/* NORMAL TASK */}
      {!addTask && (
        <>
          {checked ? <Icons.CheckedIcon /> : <Icons.CircleIcon />}
          <Name onClick={onCheck} checked={checked}>
            {name}
          </Name>
          <Icons.DeleteIcon onClick={onDelete} />
        </>
      )}
    </Container>
  )
}
