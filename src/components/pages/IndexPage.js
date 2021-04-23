import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

const IndexPage = () => {

   const [time,setTime] = useState(new Date().toLocaleTimeString())
   const history = useHistory()

   useEffect(() => {
      const id = setInterval(() => {
         const newTime = new Date().toLocaleTimeString()
         setTime(newTime)
      }, 100)
      return () => clearInterval(id)
   }, [])

   const handleClick = () => {
      history.push('/main')
   }

   return (
      <div id="IndexPage">
         <div className="circle">
            <h3>{time}</h3>
         </div>
         <button onClick={ handleClick }>Start</button>
      </div>
   )
}

export default IndexPage
