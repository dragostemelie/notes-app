import { ACTION_TYPES } from "./actionTypes"
// ### NOTES DATA ACTIONS ###
export const initialNotes = notes => {
  return {
    type: ACTION_TYPES.INITIAL_NOTES,
    payload: notes,
  }
}

export const noteAdded = note => {
  if (note.length > 2)
    return {
      type: ACTION_TYPES.NOTE_ADDED,
      payload: note,
    }
  else
    return {
      type: ACTION_TYPES.UI_NOTE_ERROR,
      payload: "Invalid note name!",
    }
}

export const noteDeleted = noteIndex => ({
  type: ACTION_TYPES.NOTE_DELETED,
  payload: noteIndex,
})

export const taskAdded = task => {
  if (task.length > 2)
    return {
      type: ACTION_TYPES.TASK_ADDED,
      payload: task,
    }
  else
    return {
      type: ACTION_TYPES.UI_TASK_ERROR,
      payload: "Invalid task name!",
    }
}

export const taskChecked = taskIndex => ({
  type: ACTION_TYPES.TASK_CHECKED,
  payload: taskIndex,
})

export const taskDeleted = taskIndex => ({
  type: ACTION_TYPES.TASK_DELETED,
  payload: taskIndex,
})

// ### UI ACTIONS ###
export const uiNoteSelected = noteIndex => ({
  type: ACTION_TYPES.UI_NOTE_SELECTED,
  payload: noteIndex,
})

export const uiNotesCollapsed = current => ({
  type: ACTION_TYPES.UI_NOTES_COLLAPSED,
})

export const uiNoteErrorCleared = value => ({
  type: ACTION_TYPES.UI_NOTE_ERROR,
  payload: "",
})

export const uiTaskAdded = value => ({
  type: ACTION_TYPES.UI_TASK_ADDED,
  payload: value,
})
export const uiNewTaskInputChange = value => ({
  type: ACTION_TYPES.UI_NEW_TASK_INPUT_CHANGE,
  payload: value,
})

export const uiTaskErrorCleared = value => ({
  type: ACTION_TYPES.UI_TASK_ERROR,
  payload: "",
})
