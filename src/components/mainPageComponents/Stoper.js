import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setStartTime, endDay, changeStoperStatus } from '../../redux/day/dayActions'
import { addPause } from '../../redux/pauses/pausesActions'
import { formatStoper } from './formatStoper'

const Stoper = () => {

   const [count,setCount] = useState(0)
   const[interv,setInterv] = useState()
   const [status,setStatus] = useState(0)
   // 0=not started, 1=started, 2=paused, 3=stopped
   const [pause,setPause] = useState(null)

   const dispatch = useDispatch()

   let updatedCount = count

   const run = () => {
      updatedCount ++
      setCount(updatedCount)
   }
   const start = () => {
      dispatch(setStartTime(new Date()))
      dispatch(changeStoperStatus(1))
      setStatus(1)
      run()
      setInterv(setInterval(run,1000))
   }
   const pausing = () => {
      setStatus(2)
      clearInterval(interv)
      setPause(new Date().getTime())
      dispatch(changeStoperStatus(2))
   }
   const continuing = () => {
      dispatch(addPause(new Date().getTime() - pause))
      setPause(null)
      setStatus(1)
      setInterv(setInterval(run,1000))
      dispatch(changeStoperStatus(1))
   }
   const stop = () => {
      setStatus(3)
      clearInterval(interv)
      dispatch(endDay(new Date(), count))
      pause && dispatch(addPause(new Date().getTime() - pause))
      setPause(null)
      dispatch(changeStoperStatus(3))
      setCount(0)
   }

   return (
      <div id="Stoper">
         <div className="display">
            <h2>{ formatStoper(count) }</h2>
         </div>
         <div className="buttons">
            <button
               className="playBtn"
               onClick={ status === 0 ? start : continuing }
               style={ status === 1 ? active : notActive}>
                  <i className="fas fa-play"></i>
            </button>
            <button
               className="pauseBtn"
               onClick={ pausing }
               style={ status===2 ? active : notActive }>
                  <i className="fas fa-pause"></i>
            </button>
            <button
               className="stopBtn"
               onClick={ stop }
               style={ status === 3 ? active : notActive }>
                  <i className="fas fa-stop"></i>
            </button>
         </div>
      </div>
   )
}

const active = {
   backgroundColor: "#f3f3f3",
   boxShadow: "inset 2px 2px 4px var(--light-dark-shadow), inset -2px -2px 2px var(--light-light-shadow)"
}
const notActive = {
   backgroundColor: "var(--light-secondary-color)",

}

export default Stoper
