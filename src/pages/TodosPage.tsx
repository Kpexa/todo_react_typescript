import React, { useEffect, useState } from 'react'
import { AddTodo } from '../components/AddTodo'
import { TodoList } from '../components/TodoList'
import { ITodo } from '../interfaces'

export const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('todos') || '[]') as ITodo[]
    setTodos(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodoHandler = (title: string) => {
    const newTodo: ITodo = {
      title,
      id: Date.now(),
      completed: false,
    }
    setTodos((prevState) => [newTodo, ...prevState])
  }

  const toggleTodoStatusHandler = (id: number) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed }
        }
        return todo
      })
    )
  }

  const removeTodoHandler = (id: number) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id))
  }
  return (
    <>
      <AddTodo onAddTodo={addTodoHandler} />
      <TodoList
        todos={todos}
        onToggle={toggleTodoStatusHandler}
        onRemove={removeTodoHandler}
      />
    </>
  )
}
