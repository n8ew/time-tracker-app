import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../ui/FramerMotion'

const getMode = state => state.ui.lightMode

const IndexPage = () => {

   const lightMode = useSelector(getMode)

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
      <motion.div
         id="IndexPage"
         className={lightMode?"lIndexPage":"dIndexPage"}
         initial="initial"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}
         >
         <div className="circle">
            <h3>{time}</h3>
         </div>
         <button onClick={ handleClick }>Start</button>
      </motion.div>
   )
}

export default IndexPage
