import React from 'react'
import FiltersBtns from '../chartsComponents/FiltersBtns'
import Chart from '../chartsComponents/Chart'

const ChartsPage = () => {
   return (
      <div id="ChartsPage">
         <div className="content">
            <FiltersBtns />
            <Chart />
         </div>
      </div>
   )
}

export default ChartsPage
