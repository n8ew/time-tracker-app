import React from 'react'
import DataDisplay from '../mainPageComponents/DateDisplay'
import DaySummary from '../summaryComponents/DaySummary'
import AdditionalData from '../summaryComponents/AdditionalData'
import ChartsBtn from '../summaryComponents/ChartsBtn'

import { useSelector } from 'react-redux'

const getMode = state => state.ui.lightMode

const SummaryPage = () => {

   const lightMode = useSelector(getMode)

   return (
      <div id="SummaryPage" className={lightMode?"LSummaryPage":"DSummaryPage"}>
         <div className="content">
            <DataDisplay />
            <DaySummary />
            <AdditionalData />
            <ChartsBtn />
         </div>
      </div>
   )
}

export default SummaryPage
