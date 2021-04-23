import React, { useState } from 'react'

const AddTask = () => {

   const [isActive,setIsActive] = useState(false)

   const handleSubmit = e => {
      e.preventDefault()
      setIsActive(!isActive)
   }

   return (
      <div id="AddTask">
         {!isActive ? (
            <div className="contentNotA" style={{cursor: "pointer"}} onClick={() => setIsActive(!isActive)}>
               <h3>Add task</h3>
               <i className="fas fa-plus"></i>
            </div>
         ) : (
            <div className="contentA">
               <form onSubmit={ handleSubmit }>
                  <input type="text" placeholder="..."/>
                  <button type="submit"><i className="fas fa-plus"></i></button>
               </form>
            </div>
         )}
      </div>
   )
}

export default AddTask
