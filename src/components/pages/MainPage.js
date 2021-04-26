import React from 'react'
import DateDisplay from '../mainPageComponents/DateDisplay'
import Stoper from '../mainPageComponents/Stoper'
import AddTask from '../mainPageComponents/AddTask'
import ActiveTask from '../mainPageComponents/ActiveTask'
import TasksList from '../mainPageComponents/TasksList'
import SummaryBtn from '../mainPageComponents/SummaryBtn'

const MainPage = () => {
   return (
      <div id="MainPage">
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
