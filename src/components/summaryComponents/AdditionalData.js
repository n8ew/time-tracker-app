import React from 'react'
import { useSelector } from 'react-redux'
import { formatStoper } from '../mainPageComponents/formatStoper'

const getPausesData = state => state.pauses
const getTasksData = state => state.tasks.tasksList

const AdditionalData = () => {

   const pausesData = useSelector(getPausesData)
   const tasksData = useSelector(getTasksData)

   const pausesTotal = () => {
      let total = 0
      pausesData.map(i => total += i)
      return formatStoper(parseInt(total/1000))
   }
   const tasksTotal = () => {
      let totla = 0
      tasksData.map(i => totla += i.time)
      return formatStoper(totla)
   }

   return (
      <div id="AdditionalData">
         <h2>Additional Informations</h2>
         <div className="pauses">
            <h3>Breaks</h3>
            <div className="breaksTaken">
               <p>Breaks taken:</p>
               <p>{ pausesData.length }</p>
            </div>
            <div className="breaksTotal">
               <p>Breakes duration:</p>
               <p>{ pausesTotal() }</p>
            </div>
         </div>
         <div className="tasks">
            <h3>Tasks</h3>
            <div className="breaksTaken">
               <p>Tasks completed:</p>
               <p>{ tasksData.length }</p>
            </div>
            <div className="breaksTotal">
               <p>Tasks duration:</p>
               <p>{ tasksTotal() }</p>
            </div>
         </div>
      </div>
   )
}

export default AdditionalData
