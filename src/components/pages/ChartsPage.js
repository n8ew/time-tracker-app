import React from 'react'
import FiltersBtns from '../chartsComponents/FiltersBtns'
import Chart from '../chartsComponents/Chart'
import BackBtn from '../chartsComponents/BackBtn'

import { useSelector } from 'react-redux'

const getMode = state => state.ui.lightMode

const ChartsPage = () => {

   const lightMode = useSelector(getMode)

   return (
      <div id="ChartsPage" className={lightMode?"LChartPage":"DChartPage"} >
         <div className="content">
            <FiltersBtns />
            <Chart />
            <BackBtn />
         </div>
      </div>
   )
}

export default ChartsPage
