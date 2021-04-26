import React from 'react'
import { formatStoper } from './formatStoper'

const Task = task => {

   return (
      <li id="Task">
         <h3>{task.task.name}</h3>
         <h3>{formatStoper(task.task.time)}</h3>
      </li>
   )
}

export default Task
