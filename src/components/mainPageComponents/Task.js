import React from 'react'
import { useDispatch, useSelector  } from 'react-redux'
import { setActive, setDone, removeTask } from '../../redux/tasks/tasksActions'

const getActiveTask = state => state.tasks.activeTask

const Task = ({task}) => {

   const dispatch = useDispatch()
   const activeTask = useSelector(getActiveTask)

   // buttons functionality
   const handlePlayBtn = () => {
      if(!activeTask) {
         dispatch(setActive(task))
      }
   }
   const handleDoneBtn = () => {
      task.time = 0
      dispatch(setDone(task))
   }
   const handleRemoveBtn = () => {
      dispatch(removeTask(task.id))
   }

   return (
      <li id="Task">
         <h3>{ task.name }</h3>
         <div className='btns'>
            <button className="btn-play" onClick={ handlePlayBtn }>
               <i className="fas fa-play"></i>
            </button>
            <button className="btn-done" onClick={ handleDoneBtn }>
               <i className="fas fa-check"></i>
            </button>
            <button className="btn-remove" onClick={ handleRemoveBtn }>
               <i className="fas fa-trash"></i>
            </button>
         </div>
      </li>
   )
}

export default Task
