import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../../redux/charts/chartsActions'

const FiltersBtns = () => {

   const dispatch = useDispatch()
   const [status,setStatus] = useState(0)

   const handleGeneral = () => {
      dispatch(setFilter(0))
      setStatus(0)
   }
   const handlBreaks = () => {
      dispatch(setFilter(1))
      setStatus(1)
   }
   const handleTasks = () => {
      dispatch(setFilter(2))
      setStatus(2)
   }

   return (
      <div id="FilterBtns">
         <button className={ status===0?"active":"nActive" } onClick={ handleGeneral }>General</button>
         <button className={ status===1?"active":"nActive" } onClick={ handlBreaks }>Breaks</button>
         <button className={ status===2?"active":"nActive" } onClick={ handleTasks }>Tasks</button>
      </div>
   )
}

export default FiltersBtns
