import React from 'react'
import FiltersBtns from '../chartsComponents/FiltersBtns'
import Chart from '../chartsComponents/Chart'
import BackBtn from '../chartsComponents/BackBtn'

const ChartsPage = () => {
   return (
      <div id="ChartsPage">
         <div className="content">
            <FiltersBtns />
            <Chart />
            <BackBtn />
         </div>
      </div>
   )
}

export default ChartsPage
