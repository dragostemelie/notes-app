import React from "react"
import { Task, Button, Icons } from ".."
import { Container, NewTask, TasksList, TasksTitle } from "./Tasks.style"

export const Tasks = ({
  tasksTitle,
  newTaskTitle,
  showTasks,
  showAddTask,
  tasks,
  onAdd,
  onTaskCheck,
  onDelete,
  onClose,
  onInputChange,
  onShowAddTask,
  taskError,
}) => {
  return (
    <Container className={showTasks ? "" : "hidden"}>
      <TasksTitle>{tasksTitle}</TasksTitle>
      <TasksList>
        {tasks?.map((task, index) => (
          <Task
            key={"task-" + index}
            name={task.title}
            checked={task.checked}
            onTaskCheck={() => onTaskCheck(index)}
            onDelete={() => onDelete(index)}
          />
        ))}
      </TasksList>
      <NewTask>
        {showAddTask && (
          <>
            <Task
              addTask
              newTaskTitle={newTaskTitle}
              onClose={onClose}
              onAdd={onAdd}
              error={taskError}
              onInputChange={onInputChange}
            />
            <Button
              title="Add task"
              icon={<Icons.CaretUpIcon />}
              right
              onClick={onAdd}
            />
          </>
        )}
        {!showAddTask && (
          <Button
            title="New task"
            icon={<Icons.PlusIcon />}
            onClick={onShowAddTask}
          />
        )}
      </NewTask>
    </Container>
  )
}
