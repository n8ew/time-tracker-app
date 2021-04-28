import React from 'react'
import DateDisplay from '../mainPageComponents/DateDisplay'
import Stoper from '../mainPageComponents/Stoper'
import AddTask from '../mainPageComponents/AddTask'
import ActiveTask from '../mainPageComponents/ActiveTask'
import TasksList from '../mainPageComponents/TasksList'
import SummaryBtn from '../mainPageComponents/SummaryBtn'

import { useSelector } from 'react-redux'

const getMode = state => state.ui.lightMode

const MainPage = () => {

   const lightMode = useSelector(getMode)

   return (
      <div id="MainPage" className={lightMode?"LMainPage":"DMainPage"}>
         <div className="content">
            <DateDisplay />
            <Stoper />
            <AddTask />
            <ActiveTask />
            <TasksList />
            <SummaryBtn />
         </div>
      </div>
   )
}

export default MainPage
