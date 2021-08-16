import React, { useEffect, useReducer } from "react"
import Notes from "./pages/Notes"
import { initialState, reducer, actions } from "./state"

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  //Read local storage first time
  useEffect(() => {
    let notes = JSON.parse(localStorage.getItem("notes"))
    if (!notes) {
      localStorage.setItem("notes", "[]")
      notes = []
    }
    dispatch(actions.initialNotes(notes))
  }, [])
  //Write notes to local storage when state changes
  useEffect(
    () => localStorage.setItem("notes", JSON.stringify(state.notes)),
    [state]
  )
  return <Notes state={state} dispatch={dispatch} actions={actions} />
}
