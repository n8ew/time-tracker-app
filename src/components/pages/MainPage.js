import React from 'react'
import DateDisplay from '../mainPageComponents/DateDisplay'
import Stoper from '../mainPageComponents/Stoper'

const MainPage = () => {
   return (
      <div id="MainPage">
         <div className="content">
            <DateDisplay />
            <Stoper />
         </div>
      </div>
   )
}

export default MainPage
