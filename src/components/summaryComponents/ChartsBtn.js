import React from 'react'
import { useHistory } from 'react-router-dom'

const ChartsBtn = () => {

   const history = useHistory()

   const handleClick = () => {
      history.push('/charts')
   }

   return (
      <button id="ChartBtn" onClick={ handleClick }>
         View Charts
      </button>
   )
}

export default ChartsBtn
