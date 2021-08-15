import React from "react"
import { Icons } from "../UI"
import { Container, Name, NewTask, Error } from "./Task.style"

export const Task = ({
  addTask,
  checked,
  name,
  newTaskTitle,
  onTaskCheck,
  onDelete,
  onAdd,
  onClose,
  onInputChange,
  error,
}) => {
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
              e.key === "Escape" && onClose()
              e.key === "Enter" && onAdd()
            }}
            onChange={e => onInputChange(e.target.value.toUpperCase())}
          />
          <Icons.CloseIcon onClick={onClose} />
          {error && <Error>{error}</Error>}
        </>
      )}
      {/* NORMAL TASK */}
      {!addTask && (
        <>
          {checked ? <Icons.CheckedIcon /> : <Icons.CircleIcon />}
          <Name onClick={onTaskCheck} checked={checked}>
            {name}
          </Name>
          <Icons.DeleteIcon onClick={onDelete} />
        </>
      )}
    </Container>
  )
}
