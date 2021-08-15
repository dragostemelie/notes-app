import React from "react"
import { Note, Icons } from "../../components"
import {
  CollapseControl,
  Container,
  Footer,
  Header,
  NotesList,
  NotesTitle,
  Username,
  Logout,
} from "./NotesSection.style"

export const NotesSection = ({
  notes,
  notesTitle,
  activeNote,
  noteError,
  notesCollapsed,
  username,
  onAdd,
  onDelete,
  onSelect,
  onCollapse,
  onLogout,
}) => {
  return (
    <Container className={notes.length ? "normal" : "extended"}>
      <Header className={notesCollapsed ? "hidden" : "show"}>
        <Icons.UserIcon />
        <Username>{username}</Username>
        <Icons.LogoutIcon onClick={onLogout} />
      </Header>
      <NotesTitle onClick={() => onCollapse(false)}>
        <Icons.LogoIcon />
        {notesCollapsed ? notes[activeNote].title : notesTitle}
        {notesCollapsed && <Icons.CaretDownIcon />}
      </NotesTitle>
      <NotesList className={notesCollapsed ? "hidden" : "show"}>
        {notes?.map((note, index) => (
          <Note
            key={"note-" + index}
            title={note.title}
            taskCount={note.tasks.length ? note.tasks.length : false}
            onSelect={() => onSelect(index)}
            active={activeNote === index ? true : false}
            onDelete={() => onDelete(index)}
          />
        ))}
        <Note addNote onAdd={onAdd} error={noteError} />
      </NotesList>
      <Footer>
        <CollapseControl
          className={notesCollapsed ? "hidden" : "show"}
          onClick={() => onCollapse(true)}
        >
          {notes.length > 0 && <Icons.CaretUpIcon />}
        </CollapseControl>
        <Logout className="desktop" onClick={onLogout}>
          <Icons.LogoutIcon />
        </Logout>
      </Footer>
    </Container>
  )
}
