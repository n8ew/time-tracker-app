import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const getTasksList = state => state.tasks.tasksList

const TasksList = () => {

   const tasksList = useSelector(getTasksList)

   if(tasksList.length <= 0) {
      return ""
   } 
   return (
      <div id="TasksList">
         <h2>Task list:</h2>
         <ul>
            {tasksList.map(task => (<Task key={ task.id } task={ task } />))}
         </ul>
      </div>
   )
}

export default TasksList
