import React from 'react'
import { useDispatch } from 'react-redux'
import { change } from '../../../redux/ui/uiActions'
import '../../../style/additionalStyle.css'

const Switch = () => {

   const dispatch = useDispatch()

   const handleClick = () => {
      dispatch(change())
   }

   return (
      <input type="checkbox" id="switch" onClick={handleClick}/>
   )
}

export default Switch
