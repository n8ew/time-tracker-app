import React from 'react'
import { useSelector } from 'react-redux'
import { formatStoper } from '../mainPageComponents/formatStoper'

const getDayData = state => state.day

const DaySummary = () => {

   const dayData = useSelector(getDayData)

   return (
      <div id="DaySummary">
         <h2>Summary</h2>
         <div className="time">
            <div className="start">
               <span>Start</span>
               <h3>{ dayData.dayStart.toLocaleTimeString() }</h3>
            </div>
            <div className="stop">
               <span>End</span>
               <h3>{ dayData.dayEnd.toLocaleTimeString() }</h3>
            </div>
         </div>
         <div className="total">
            <h3>Total:</h3>
            <h3>{ formatStoper(dayData.dayStoperValue) }</h3>
         </div>

      </div>
   )
}

export default DaySummary
