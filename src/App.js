// Import libs
import { useState, useEffect } from 'react'

import './styles/App.scss'
import Header from './components/Header'
import Input from './components/InputField'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([])

  //retrieving data
  useEffect(() => {
    const str = localStorage.getItem('data')
    const data = JSON.parse(str)
    if (data) {
      setTasks(data)
    } else {
      setTasks([])
    }
  }, [])

  // Saving data to local storage
  useEffect(() => {
    const data = JSON.stringify(tasks)
    localStorage.setItem('data', data)
  }, [tasks])
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Input setTasks={setTasks} />
        <Tasks tasks={tasks} setTasks={setTasks} />
      </div>
    </div>
  )
}

export default App
