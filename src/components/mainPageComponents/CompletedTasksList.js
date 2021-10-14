import React from 'react'
import { useSelector } from 'react-redux'
import { formatStoper } from './formatStoper'

const getDoneTasks = state => state.tasks.doneTasksList

const CompletedTasksList = () => {

    const doneTasks = useSelector(getDoneTasks)

    return (
        <div id="DoneTasksList">
            <h2>Done Tasks List:</h2>
            <ul>
                {doneTasks ? (
                    doneTasks.map((task,index)=>(
                        <li key={ task.id }>
                            <h4 className="index">{index + 1}.</h4>
                            <h4 className="name">"{ task.name }"</h4>
                            <h5 className="time">{ task.time ? "time: " + formatStoper(task.time) : "set finished" }</h5>
                        </li>
                    ))
                ):(<h4>List is empty</h4>)}
            </ul>
        </div>
    )
}

export default CompletedTasksList
