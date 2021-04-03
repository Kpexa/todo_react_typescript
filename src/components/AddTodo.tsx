import React, { useState } from 'react'

interface IAddTodoProps {
  onAddTodo(title: string): void
}

export const AddTodo: React.FC<IAddTodoProps> = (props) => {
  const [todoTitle, setTodoTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' && todoTitle !== '') {
      props.onAddTodo(todoTitle)
      setTodoTitle('')
    }
  }

  return (
    <div className="input-field mt2">
      <input
        type="text"
        id="title"
        placeholder="Type what U need to do"
        value={todoTitle}
        onChange={changeHandler}
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">
        I need to ...
      </label>
    </div>
  )
}
