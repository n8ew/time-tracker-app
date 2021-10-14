import React from 'react'
import Switch from './element/Switch'
import { useLocation, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux' 
import { clearTasks } from '../../redux/tasks/tasksActions'
import { clearPause } from '../../redux/pauses/pausesActions'
import { clearDay } from '../../redux/day/dayActions'


const Navbar = () => {

   const history = useHistory()
   const location = useLocation()
   const dispatch = useDispatch()

   const handleClick = () => {
      if(location.pathname==="/summary" || location.pathname==="/charts") {
         dispatch(clearTasks())
         dispatch(clearPause())
         dispatch(clearDay())
         history.push("/")
      }
   }
   const cursorPointer = () => {
      if(location.pathname==="/summary" || location.pathname==="/charts") {
         return {cursor:"pointer"}
      }
      return {cursor:"default"}
   }

   return (
      <div id="Navbar" onClick={ handleClick } style={ cursorPointer() }>
         <div className="content">
            <h3 style={{color:"coral"}}>TimeTracker</h3>
            <Switch />
         </div>
      </div>
   )
}

export default Navbar
