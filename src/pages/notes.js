import React, { useEffect } from "react"
import { NotesSection, TasksSection } from "../components"
import { Container } from "./Notes.style"

export default function Notes({ state, dispatch, actions }) {
  const handleAddNote = title => dispatch(actions.noteAdded(title))
  const handleDeleteNote = index => dispatch(actions.noteDeleted(index))
  const handleAddTask = () =>
    dispatch(actions.taskAdded(state.ui.notes.taskInput))
  const handleCheckTask = index => dispatch(actions.taskChecked(index))
  const handleDeleteTask = index => dispatch(actions.taskDeleted(index))
  const handleSelectNote = index => dispatch(actions.uiNoteSelected(index))
  const handleCollapseNotes = () => dispatch(actions.uiNotesCollapsed())
  const handleUIAddTask = showInput => dispatch(actions.uiTaskAdded(showInput))
  const handleUINewTaskInputChange = inputValue =>
    dispatch(actions.uiNewTaskInputChange(inputValue))

  useEffect(() => {
    //Clear errors
    if (state.ui.notes.noteError.length > 0)
      setTimeout(() => dispatch(actions.uiNoteErrorCleared()), 2000)
    if (state.ui.notes.taskError.length > 0)
      setTimeout(() => dispatch(actions.uiTaskErrorCleared()), 2000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  return (
    <Container>
      <NotesSection
        notes={state.notes}
        notesTitle={state.notes.length ? "NOTES" : "ADD A NOTE"}
        activeNote={state.ui.notes.selectedNote}
        noteError={state.ui.notes.noteError}
        notesCollapsed={state.ui.notes.notesCollapsed}
        username={state.user.name}
        onAdd={handleAddNote}
        onDelete={handleDeleteNote}
        onSelect={handleSelectNote}
        onCollapse={handleCollapseNotes}
        onLogout={() => console.log("logout")}
      />
      <TasksSection
        tasksTitle={
          state.notes[state.ui.notes.selectedNote]?.tasks.length
            ? state.notes[state.ui.notes.selectedNote].title + " TASKS:"
            : "NO TASKS YET."
        }
        newTaskTitle={state.ui.notes.taskInput}
        showTasks={state.notes?.length ? true : false}
        showAddTask={state.ui.notes.addTask}
        tasks={
          state.notes[state.ui.notes.selectedNote]?.tasks
            ? state.notes[state.ui.notes.selectedNote]?.tasks
            : []
        }
        onAdd={handleAddTask}
        onTaskCheck={handleCheckTask}
        onInputChange={handleUINewTaskInputChange}
        onDelete={handleDeleteTask}
        onClose={() => handleUIAddTask(false)}
        onShowAddTask={() => handleUIAddTask(true)}
        taskError={state.ui.notes.taskError}
      />
    </Container>
  )
}
