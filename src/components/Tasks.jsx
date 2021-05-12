import Task from './Task'

export default function Tasks({ tasks, setTasks }) {
  return (
    <div className="all-tasks">
      {tasks.map((task) => (
        <Task task={task} key={task.id} setTasks={setTasks} tasks={tasks} />
      ))}
    </div>
  )
}
