import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

const getStoperStatus = state => state.day.stoperStatus

const SummaryBtn = () => {

   const stoperStatus = useSelector(getStoperStatus)
   const history = useHistory()

   const handleClick = () => {
      history.push('/summary')
   }

   if(stoperStatus !== 3) {
      return ""
   }
   return (
      <button id="SummaryBtn" onClick={ handleClick } >Summary</button>
   )
}

export default SummaryBtn
