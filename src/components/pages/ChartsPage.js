import React from 'react'
import FiltersBtns from '../chartsComponents/FiltersBtns'
import Chart from '../chartsComponents/Chart'
import BackBtn from '../chartsComponents/BackBtn'

import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../ui/FramerMotion'

const getMode = state => state.ui.lightMode

const ChartsPage = () => {

   const lightMode = useSelector(getMode)

   return (
      <motion.div
         id="ChartsPage"
         className={lightMode?"LChartPage":"DChartPage"}
         initial="initial"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}
         >
         <div className="content">
            <FiltersBtns />
            <Chart />
            <BackBtn />
         </div>
      </motion.div>
   )
}

export default ChartsPage
