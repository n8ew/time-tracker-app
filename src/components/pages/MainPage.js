import React from 'react'
import DateDisplay from '../mainPageComponents/DateDisplay'
import Stoper from '../mainPageComponents/Stoper'
import AddTask from '../mainPageComponents/AddTask'
import ActiveTask from '../mainPageComponents/ActiveTask'
import TasksList from '../mainPageComponents/TasksList'
import SummaryBtn from '../mainPageComponents/SummaryBtn'

import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../ui/FramerMotion'

const getMode = state => state.ui.lightMode

const MainPage = () => {

   const lightMode = useSelector(getMode)

   return (
      <motion.div
         id="MainPage"
         className={lightMode?"LMainPage":"DMainPage"}
         initial="initial"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}
         >
         <div className="content">
            <DateDisplay />
            <Stoper />
            <AddTask />
            <ActiveTask />
            <TasksList />
            <SummaryBtn />
         </div>
      </motion.div>
   )
}

export default MainPage
