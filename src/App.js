// Import libs
import { useState } from 'react'

import './styles/App.scss'
import Header from './components/Header'
import Input from './components/InputField'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([])
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
