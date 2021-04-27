import React from 'react'
import Switch from './element/Switch'
import { useSelector } from 'react-redux'

const getMode = state => state.ui.lightMode

const Navbar = () => {

   const lightMode = useSelector(getMode)
   console.log(lightMode)

   return (
      <div id="Navbar">
         <div className="content">
            <h3>TimeTracker</h3>
            <Switch />
         </div>
      </div>
   )
}

export default Navbar
