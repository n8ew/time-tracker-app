import React from 'react'
import DataDisplay from '../mainPageComponents/DateDisplay'
import DaySummary from '../summaryComponents/DaySummary'
import AdditionalData from '../summaryComponents/AdditionalData'
import ChartsBtn from '../summaryComponents/ChartsBtn'

const SummaryPage = () => {

   return (
      <div id="SummaryPage">
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
