import { TransitionGroup, CSSTransition } from 'react-transition-group'
import Task from './Task'

export default function Tasks({ tasks, setTasks }) {
  return (
    <div className="all-tasks">
      <TransitionGroup>
        {tasks.map((task) => (
          <CSSTransition key={task.id} timeout={500} classNames={'item'} mountOnEnter={true} unmountOnExit={true}>
            <Task task={task} key={task.id} setTasks={setTasks} tasks={tasks} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}

function enter(node) {
  console.log('enter')
}
function exit(node) {
  console.log('exit')
}
