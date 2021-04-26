import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { endActiveTask } from '../../redux/tasks/tasksActions'
import { formatStoper } from './formatStoper'

const getActiveTask = state => state.tasks.activeTask
const getTaskList = state => state.tasks.tasksList
const getStoperStatus = state => state.day.stoperStatus

const ActiveTask = () => {

   const activeTask = useSelector(getActiveTask)
   const tasksList = useSelector(getTaskList)
   const stoperStatus = useSelector(getStoperStatus)
   const dispatch = useDispatch()

   const [time,setTime] = useState(0)
   const [isActive,setIsActive] = useState(false)
   const [iterv,setInterv] = useState()
   const [status,setStatus] = useState(0)

   useEffect(() => {
      if(stoperStatus===2) {
         clearInterval(iterv)
      }
      if(stoperStatus===1&&isActive) {
         setInterv(setInterval(run,1000))
      }
      if(stoperStatus===3&&isActive) {
         if(activeTask) {
            handleStop()
         }
      }
   },// eslint-disable-next-line
   [stoperStatus])

   let updatedTime = time

   const run = () => {
      updatedTime ++
      setTime(updatedTime)
   }

   const start = () => {
      if(stoperStatus === 1) {
         run()
         setInterv(setInterval(run,1000))
         setStatus(1)
         setIsActive(true)
      }
   }

   const handleStop = () => {
      clearInterval(iterv)
      const finishedTask = {
         name: activeTask.name,
         time,
         id: tasksList.length
      }
      dispatch(endActiveTask(finishedTask))
      setTime(0)
      setStatus(0)
   }

   if(!activeTask) {
      return("")
   }
   return (
      <div id="ActiveTask">
         <div className="content">
            <h3>{ formatStoper(time) }</h3>
            <h3>{ activeTask.name }</h3>
         </div>
         <div className="btn">
            {status === 0 ? (
                  <button onClick={ start }>
                     <i className="fas fa-play"></i>
                  </button>
               ) : (
                  <button onClick={ handleStop  }>
                     <i className="fas fa-stop"></i>
                  </button>
               )}
         </div>
      </div>
   )
}

export default ActiveTask
