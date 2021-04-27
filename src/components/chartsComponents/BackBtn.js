import React from 'react'
import { useHistory } from 'react-router-dom'

const BackBtn = () => {

   const history = useHistory()
   const handleClick = () => {
      history.push('/summary')
   }

   return (
      <button id="BackBtn" onClick={ handleClick }>
         <i className="fas fa-arrow-left"></i>
         Back
      </button>
   )
}

export default BackBtn
