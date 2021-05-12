export default function Task({ task, tasks, setTasks }) {
  const deleteTask = () => {
    setTasks(tasks.filter((x) => x.id !== task.id))
  }
  const editTask = () => {
    const temp = prompt('Enter new task', task.text)
    let tempTasks = tasks.map((el) => {
      if (el.id === task.id) {
        el.text = temp
      }
      return el
    })
    setTasks(tempTasks)
    console.log(tasks)
  }
  return (
    <div className="task">
      <h4 className="heading-secondary">{task.text}</h4>
      <div className="cta">
        <button className="btn btn--delete" onClick={deleteTask}>
          <i className="fas fa-trash-alt"></i>
        </button>
        <button className="btn btn--edit" onClick={editTask}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </div>
  )
}
