import React, { useState } from "react"
import { Icons } from "../UI"
import { Container, Name, NewTask, Error } from "./Task.style"

export const Task = ({ addTask, checked, name, onCheck, onDelete, onAdd, onClose, error }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("")
  return (
    <Container checked={checked} addTask={addTask}>
      {/* NEW TASK */}
      {addTask && (
        <>
          <Icons.PenIcon />
          <NewTask
            id="new-task"
            placeholder="New task name"
            autoComplete="off"
            autoFocus={true}
            value={newTaskTitle}
            onKeyUp={e => {
              if (e.key === "Enter") {
                onAdd(newTaskTitle)
                setNewTaskTitle("")
              }
            }}
            onChange={e => setNewTaskTitle(e.target.value.toUpperCase())}
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
