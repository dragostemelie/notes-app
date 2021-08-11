import React, { useState } from "react"
import { Button, Icons, Typography, Note, Task } from "../components"
import { Container, Section } from "./Notes.style"

const readNotes = () => {
  let notes = JSON.parse(localStorage.getItem("notes"))
  if (!notes || notes.length === 0) return null
  else return notes
}

export default function Notes() {
  const [notes, setNotes] = useState(() => readNotes())
  const [selectedNote, setSelectedNote] = useState(0)
  const [addTask, setAddTask] = useState(false)
  const [taskError, setTaskError] = useState(false)
  const [noteError, setNoteError] = useState(false)

  const handleAddNote = noteTitle => {
    if (noteTitle.length > 2) {
      const newNotes = notes ? [...notes] : []
      newNotes.push({ title: noteTitle, tasks: [] })
      setNotes(newNotes)
      setSelectedNote(newNotes.findIndex(note => note.title === noteTitle))
      localStorage.setItem("notes", JSON.stringify(newNotes))
      document.querySelector("#new-note").value = ""
    } else {
      setNoteError("Invalid note!")
      setTimeout(() => setNoteError(false), 1500)
      document.querySelector("#new-note").focus()
    }
  }

  const handleDeleteNote = noteIndex => {
    const newNotes = [...notes]
    newNotes.splice(noteIndex, 1)
    setSelectedNote(Math.max(0, noteIndex - 1))
    if (newNotes.length === 0) {
      localStorage.removeItem("notes")
      setNotes(null)
    } else {
      localStorage.setItem("notes", JSON.stringify(notes))
      setNotes(newNotes)
    }
  }

  const handleAddTask = taskTitle => {
    if (taskTitle.length > 2) {
      const newNotes = [...notes]
      newNotes[selectedNote].tasks.push({ title: taskTitle, checked: false })
      setNotes(newNotes)
      setAddTask(false)
      localStorage.setItem("notes", JSON.stringify(newNotes))
    } else {
      setTaskError("Invalid task!")
      setTimeout(() => setTaskError(false), 1500)
      document.querySelector("#new-task").focus()
    }
  }

  const handleCheckTask = taskIndex => {
    const newNotes = [...notes]
    newNotes[selectedNote].tasks[taskIndex].checked = !notes[selectedNote].tasks[taskIndex].checked
    setNotes(newNotes)
    localStorage.setItem("notes", JSON.stringify(newNotes))
  }

  const handleDeleteTask = taskIndex => {
    const newNotes = [...notes]
    newNotes[selectedNote].tasks.splice(taskIndex, 1)
    setNotes(newNotes)
    localStorage.setItem("notes", JSON.stringify(newNotes))
  }

  return (
    <Container>
      <Section className={notes?.length ? "left" : "left extended"}>
        <Typography.H2>
          <Icons.LogoIcon />
          Notes app
        </Typography.H2>
        <Typography.H3>{notes?.[selectedNote]?.title ? "MY NOTES" : "ADD A NOTE"}</Typography.H3>
        {notes &&
          notes.map((note, idx) => (
            <Note
              key={"note-" + idx}
              title={note.title}
              taskCount={note.tasks.length ? note.tasks.length : false}
              onSelect={() => setSelectedNote(idx)}
              active={selectedNote === idx ? true : false}
              onDelete={() => handleDeleteNote(idx)}
            />
          ))}
        <Note addNote onAdd={handleAddNote} error={noteError} />
      </Section>
      <Section className={notes?.length ? "right" : "hidden"}>
        <Typography.H3>
          {notes?.[selectedNote].tasks.length
            ? notes[selectedNote].title + " TASKS:"
            : "NO TASKS YET."}
        </Typography.H3>
        {notes &&
          notes[selectedNote].tasks.map((task, index) => (
            <Task
              key={"task-" + index}
              name={task.title}
              checked={task.checked}
              onCheck={() => handleCheckTask(index)}
              onDelete={() => handleDeleteTask(index)}
            />
          ))}
        {addTask ? (
          <>
            <Task
              addTask
              onClose={() => setAddTask(false)}
              onAdd={handleAddTask}
              error={taskError}
            />
            <Button
              title="Add task"
              icon={<Icons.CaretUpIcon />}
              right
              onClick={() => handleAddTask(document.querySelector("#new-task").value.toUpperCase())}
            />
          </>
        ) : (
          notes && (
            <Button title="New task" icon={<Icons.PlusIcon />} onClick={() => setAddTask(true)} />
          )
        )}
      </Section>
    </Container>
  )
}
