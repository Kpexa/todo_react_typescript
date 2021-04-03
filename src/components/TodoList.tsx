import React from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove(id: number): void
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onToggle,
  onRemove,
}) => {
  return (
    <ul>
      {todos.map((todo) => {
        const { id, completed, title } = todo
        const classes = ['todo']
        if (completed) {
          classes.push('completed')
        }

        return (
          <li className={classes.join(' ')} key={id}>
            <label>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => onToggle(id)}
              />
              <span>{title}</span>
              <i
                className="material-icons red-text"
                onClick={() => onRemove(id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>
  )
}
