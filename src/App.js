import React, { useReducer } from "react"
import Notes from "./pages/Notes"
import { initialState, reducer, actions } from "./state"

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Notes state={state} dispatch={dispatch} actions={actions} />
}
