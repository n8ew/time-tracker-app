import React from 'react'
import DaySummary from '../summaryComponents/DaySummary'
import AdditionalData from '../summaryComponents/AdditionalData'
import ChartsBtn from '../summaryComponents/ChartsBtn'

import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../ui/FramerMotion'

const getMode = state => state.ui.lightMode

const SummaryPage = () => {

   const lightMode = useSelector(getMode)

   return (
      <motion.div
         id="SummaryPage"
         className={lightMode?"LSummaryPage":"DSummaryPage"}
         initial="initial"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}
         >
         <div className="content">
            <DaySummary />
            <AdditionalData />
            <ChartsBtn />
         </div>
      </motion.div>
   )
}

export default SummaryPage
