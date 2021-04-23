import React from 'react'
import DateDisplay from '../mainPageComponents/DateDisplay'
import Stoper from '../mainPageComponents/Stoper'
import AddTask from '../mainPageComponents/AddTask'

const MainPage = () => {
   return (
      <div id="MainPage">
         <div className="content">
            <DateDisplay />
            <Stoper />
            <AddTask />
         </div>
      </div>
   )
}

export default MainPage
