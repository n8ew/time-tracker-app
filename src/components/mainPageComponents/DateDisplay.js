import React, { useState, useEffect} from 'react'

const DataDisplay = () => {

   const [time,setTime] = useState(new Date().toLocaleTimeString())

   useEffect(() => {
      const id = setInterval(() => {
         const newTime = new Date().toLocaleTimeString()
         setTime(newTime)
      },100)
      return() => clearInterval(id)
   }, [])

   return (
      <div id="DateDisplay">
         <h3> {new Date().toLocaleDateString() } </h3>
         <h3>{time }</h3>
      </div>
   )
}

export default DataDisplay
