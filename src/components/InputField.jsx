import { useState } from 'react'

export default function InputField({ setTasks }) {
  const [todo, setTodo] = useState('')
  const addTasks = (e) => {
    e.preventDefault()
    if (todo) {
      setTasks((oldArray) => oldArray.concat({ text: todo, id: Math.random() * 10000 }))
      setTodo('')
    } else {
      alert('Please enter a task')
    }
  }

  return (
    <div className="todo-input">
      <form className="form" onSubmit={(e) => addTasks(e)}>
        <div className="form__group">
          <input type="text" value={todo} className="form__input" placeholder="Enter Task here" onChange={(e) => setTodo(e.target.value)} />
          <button className="btn btn--primary">Add</button>
        </div>
      </form>
    </div>
  )
}
