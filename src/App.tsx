import React, { useEffect, useState } from 'react'
import { AddTodo } from './components/AddTodo'
import { Navbar } from './components/Navbar'
import { TodoList } from './components/TodoList'
import { ITodo } from './interfaces'

const App: React.FC = (props) => {
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

  console.log(todos)

  return (
    <>
      <Navbar />
      <div className="container">
        <AddTodo onAddTodo={addTodoHandler} />
        <TodoList
          todos={todos}
          onToggle={toggleTodoStatusHandler}
          onRemove={removeTodoHandler}
        />
      </div>
    </>
  )
}

export default App
