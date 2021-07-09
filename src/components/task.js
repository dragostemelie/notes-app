import React from "react"
import { CircleIcon, CheckedIcon, DeleteIcon, PenIcon, CloseIcon } from "../components"
import { Container, Name, NewTask, Error } from "./task.style"

export const Task = ({ addTask, checked, name, onCheck, onDelete, onSubmit, onClose, error }) => {
  return (
    <Container checked={checked} addTask={addTask}>
      {/* NEW TASK */}
      {addTask && (
        <>
          <PenIcon />
          <NewTask
            id="new-task"
            placeholder="New task"
            onKeyDown={(e) => e.key === "Enter" && onSubmit()}
            autoComplete="off"
          />
          <CloseIcon onClick={onClose} />
          {error && <Error>{error}</Error>}
        </>
      )}
      {/* NORMAL TASK */}
      {!addTask && (
        <>
          {checked ? <CheckedIcon /> : <CircleIcon />}
          <Name onClick={onCheck} checked={checked}>
            {name}
          </Name>
          <DeleteIcon onClick={onDelete} />
        </>
      )}
    </Container>
  )
}
