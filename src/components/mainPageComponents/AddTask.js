import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../../redux/tasks/tasksActions'

const getActiveTask = state => state.tasks.activeTask
const getStoperStatus = state => state.day.stoperStatus
const getMode = state => state.ui.lightMode

const AddTask = () => {

   const [isActive,setIsActive] = useState(false)
   const [newTask, setNewTask] = useState({ name: '' })

   const dispatch = useDispatch()
   const activeTask = useSelector(getActiveTask)
   const stoperStatus = useSelector(getStoperStatus)
   const lightMode = useSelector(getMode)

   const handleChange = e => setNewTask({ name: e.target.value })

   const handleSubmit = e => {
      e.preventDefault()
      if( newTask.name !== "") {
         dispatch(addTask(newTask))
         setIsActive(!isActive)
      }
   }

   if(activeTask || stoperStatus === 3) {
      return("")
   } 
   return (
      <div id="AddTask">
         {!isActive ? (
            <div className={lightMode?"LContentNot contentNotA":"DContentNot contentNotA"} style={{cursor: "pointer"}} onClick={() => setIsActive(!isActive)}>
               <h3>Add task</h3>
               <i className="fas fa-plus"></i>
            </div>
         ) : (
            <div className="contentA">
               <form onSubmit={ handleSubmit }>
                  <input className={lightMode?"LInput":"DInput"} type="text" placeholder="..." value={ isActive.name } onChange={ handleChange } />
                  <button className={lightMode?"LActiveBtn":"DActiveBtn"} type="submit"><i className="fas fa-plus"></i></button>
               </form>
            </div>
         )}
      </div>
   )
}

export default AddTask
