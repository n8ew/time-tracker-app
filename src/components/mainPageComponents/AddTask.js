import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTask } from '../../redux/tasks/tasksActions'

import { v4 as uuidv4 } from 'uuid'

// const getActiveTask = state => state.tasks.activeTask
const getStoperStatus = state => state.day.stoperStatus
const getDayStart = state => state.day.dayStart

const AddTask = () => {

   const [isActive,setIsActive] = useState(false)
   const [newTask, setNewTask] = useState({ name: '' })

   const dispatch = useDispatch()
   // const activeTask = useSelector(getActiveTask)
   const stoperStatus = useSelector(getStoperStatus)
   const dayStart = useSelector(getDayStart)

   const handleChange = e => setNewTask({ name: e.target.value })

   const handleSubmit = e => {
      e.preventDefault()
      if( newTask.name !== "") {
         newTask.id = uuidv4()
         dispatch(addTask(newTask))
         setIsActive(!isActive)
      }
   }

   const handleNotActive = () => {
      if(dayStart) {
         setIsActive(!isActive)
      }
   }

   if(stoperStatus === 3) {
      return("")
   } 
   return (
      <div id="AddTask">
         {!isActive ? (
            <div className="contentNotA" style={{cursor: "pointer"}} onClick={ handleNotActive }>
               <h3>Add task</h3>
               <i className="fas fa-plus"></i>
            </div>
         ) : (
            <div className="contentA">
               <form onSubmit={ handleSubmit }>
                  <input type="text" autoFocus placeholder="..." value={ isActive.name } onChange={ handleChange } />
                  <button type="submit"><i className="fas fa-plus"></i></button>
               </form>
            </div>
         )}
      </div>
   )
}

export default AddTask
