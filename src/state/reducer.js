import { ACTION_TYPES } from "./actionTypes"

export function reducer(state, action) {
  // console.log(action.type)
  switch (action.type) {
    case ACTION_TYPES.NOTE_ADDED:
      return {
        ...state,
        notes: [...state.notes, { title: action.payload, tasks: [] }],
      }
    case ACTION_TYPES.UI_NOTE_SELECTED:
      return {
        ...state,
        ui: {
          ...state.ui,
          notes: { ...state.ui.notes, selectedNote: action.payload },
        },
      }
    case ACTION_TYPES.UI_NOTES_COLLAPSED:
      return {
        ...state,
        ui: {
          ...state.ui,
          notes: {
            ...state.ui.notes,
            notesCollapsed: !state.ui.notes.notesCollapsed,
          },
        },
      }
    case ACTION_TYPES.NOTE_DELETED:
      return {
        ...state,
        notes: [...state.notes.splice(action.payload, 1)],
        ui: {
          ...state.ui,
          notes: {
            ...state.ui.notes,
            selectedNote: Math.max(0, action.payload - 1),
          },
        },
      }
    case ACTION_TYPES.UI_NOTE_ERROR:
      return {
        ...state,
        ui: {
          ...state.ui,
          notes: {
            ...state.ui.notes,
            noteError: action.payload,
          },
        },
      }
    case ACTION_TYPES.TASK_ADDED:
      return {
        ...state,
        notes: [...state.notes].map((note, index) =>
          index === state.ui.notes.selectedNote
            ? {
                ...note,
                tasks: [
                  ...note.tasks,
                  {
                    title: action.payload,
                    checked: false,
                  },
                ],
              }
            : note
        ),
        ui: { ...state.ui, notes: { ...state.ui.notes, taskInput: "" } },
      }
    case ACTION_TYPES.TASK_CHECKED:
      return {
        ...state,
        notes: [...state.notes].map((note, index) =>
          index === state.ui.notes.selectedNote
            ? {
                ...note,
                tasks: [...note.tasks].map((task, index) =>
                  index === action.payload
                    ? { ...task, checked: !task.checked }
                    : task
                ),
              }
            : note
        ),
      }
    case ACTION_TYPES.TASK_DELETED:
      const deletedNotes = [...state.notes]
      deletedNotes[state.ui.notes.selectedNote].tasks.splice(action.payload, 1)
      return {
        ...state,
        notes: deletedNotes,
      }
    case ACTION_TYPES.UI_TASK_ADDED:
      return {
        ...state,
        ui: {
          ...state.ui,
          notes: {
            ...state.ui.notes,
            addTask: action.payload,
            taskInput: "",
          },
        },
      }
    case ACTION_TYPES.UI_NEW_TASK_INPUT_CHANGE:
      return {
        ...state,
        ui: {
          ...state.ui,
          notes: {
            ...state.ui.notes,
            taskInput: action.payload,
          },
        },
      }
    case ACTION_TYPES.UI_TASK_ERROR:
      return {
        ...state,
        ui: {
          ...state.ui,
          notes: {
            ...state.ui.notes,
            taskError: action.payload,
          },
        },
      }

    default:
      return state
  }
}
