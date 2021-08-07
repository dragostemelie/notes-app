import React, { useState } from "react"
import { LogoIcon, H2, H3, Button, Note, Task, CaretIcon, PlusIcon } from "../components"
import { Container, Section } from "./notes.style"

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

  const handleAddNote = () => {
    const noteTitle = document.querySelector("#new-note").value.toUpperCase()
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

  const handleAddTask = () => {
    const taskTitle = document.querySelector("#new-task").value.toUpperCase()
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
        <H2>
          <LogoIcon /> Notes app
        </H2>
        <H3>{notes?.[selectedNote]?.title ? "MY NOTES" : "ADD A NOTE"}</H3>
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
        <Note add onSubmit={handleAddNote} error={noteError} />
      </Section>
      <Section className={notes?.length ? "right" : "hidden"}>
        <H3>
          {notes?.[selectedNote].tasks.length
            ? notes[selectedNote].title + " TASKS:"
            : "NO TASKS YET."}
        </H3>
        {notes &&
          notes[selectedNote].tasks.map((task, idx) => (
            <Task
              key={"task-" + idx}
              name={task.title}
              checked={task.checked}
              onCheck={() => handleCheckTask(idx)}
              onDelete={() => handleDeleteTask(idx)}
            />
          ))}
        {addTask ? (
          <>
            <Task
              addTask
              onClose={() => setAddTask(false)}
              onSubmit={handleAddTask}
              error={taskError}
            />
            <Button title="Add task" icon={<CaretIcon />} right onClick={handleAddTask} />
          </>
        ) : (
          notes && <Button title="New task" icon={<PlusIcon />} onClick={() => setAddTask(true)} />
        )}
      </Section>
    </Container>
  )
}
