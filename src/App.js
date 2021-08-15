import React, { useReducer } from "react"
import Notes from "./pages/Notes"
import Login from "./pages/Login"
import { initialState, reducer, actions } from "./state"

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  // return <Login state={state} dispatch={dispatch} actions={actions} />
  return <Notes state={state} dispatch={dispatch} actions={actions} />
}
