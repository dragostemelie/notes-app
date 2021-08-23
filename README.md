# Notes App

A notes app built with ReactJS. Each note can have some tasks. Each task can be active or disabled with a click. The app uses `localStorage` to hold the notes data. It uses a global state and it can easily be scaled up to use an api.

### State object structure:

```
{
  notes: [
          {
            "title": "NOTE 1",
            "tasks": [
                {
                    "title": "TASK 1",
                    "checked": false
                },
                {
                    "title": "TASK 2",
                    "checked": false
                },
            ]
            },
        {
            "title": "NOTE 2",
            "tasks": []
        }
    ],
  ui: {
    notes: {
      selectedNote: 0,
      addTask: false,
      taskInput: "",
      taskError: "",
      noteInput: "",
      noteError: "",
      notesCollapsed: false,
    },
  },
  user: {
    name: "User",
  },
}
```

### Live demo [HERE](https://dragostemelie.go.ro/projects/notes-app/).

## Install and start

```bash
git clone https://github.com/dragostemelie/notes-app.git
cd notes-app/
npm install
npm start
```

## Screenshot

![Notes screenshot](https://github.com/dragostemelie/notes-app/raw/main/screenshot.jpg)
