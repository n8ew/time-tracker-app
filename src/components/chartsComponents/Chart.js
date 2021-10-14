import React from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

const getData = state => state

const Chart = () => {

   const data = useSelector(getData)

   // ChartData

   const getBreaksTotal = () => {
      let total = 0
      data.pauses.map(i => total+= i)
      return (total/1000).toFixed(2)
   }
   const getTasksTotal = () => {
      let totla = 0
      data.tasks.tasksList.map(i => totla += i.time )
      return (totla)
   }

   // General

   let generalY = parseInt((data.day.dayEnd.getTime() - data.day.dayStart.getTime()) / 1000)
   if (generalY < data.day.dayStoperValue) {generalY ++}

   const work = ((data.day.dayStoperValue/generalY)*100).toFixed(2)

   const breaks = ((getBreaksTotal() / generalY)*100).toFixed(2)

   const tasks = ((getTasksTotal() / generalY)*100).toFixed(2)

   const color = () => {
      if(data.ui.lightMode) {
         return "#616060"
      } else {
         return "#d38e05"
      }
   }

   const generalData = {
      labels: ["Work","Breaks","Tasks"],
      datasets: [{
         label: "General Data",
         data: [work,breaks,tasks],
         backgroundColor: color
      }]
   }

   // Breaks
   const breakesY = getBreaksTotal()
   const breaksLabels = () => {
      let arr = []
      data.pauses.map((i,index) => arr.push(`${index + 1}`))
      return arr
   }
   const breaksDatasets = () => {
      let arr = data.pauses.map(i => {
         let number = (i/1000/breakesY*100).toFixed(2)
         return(number)
      })
      return (arr)
   }
   const breaksData = {
      labels: breaksLabels(),
      datasets: [{
         label: "Breaks Data",
         data: breaksDatasets(),
         backgroundColor: color
      }]
   }

   // Tasks
   const tasksY = getTasksTotal()
   const tasksLabels = () => {
      let arr = []
      data.tasks.doneTasksList.map(i => arr.push(i.name))
      return arr
   }
   const tasksDatasets = () => {
      let arr = []
      data.tasks.doneTasksList.map(i => arr.push((i.time/tasksY*100).toFixed(2)))
      return arr
   }
   const tasksData = {
      labels: tasksLabels(),
      datasets: [{
         label: "Tasks Data",
         data: tasksDatasets(),
         backgroundColor: color
      }]
   }

   // ChartOptions
   const options = {
      responsive: true,
      scales: {
         xAxes: [{
            gridLones: {
               drawOnChartArea: false
            }
         }],
         yAxes: [{
            gridLines: {
               drawOnChartArea: false
            },
            
            ticks: {
               beginAtZero: true,
               suggestedMax: 100,
               stepSize: 20
            }
         }]
      }
   }

   let chart ;
   if(data.charts.status === 0) {
      chart = <Bar data={generalData} options={options} />
   }
   if(data.charts.status === 1) {
      chart = <Bar data={breaksData} options={options} />
   }
   if(data.charts.status === 2) {
      chart = <Bar data={tasksData} options={options} />
   }

   return (
      <div className="ChartContainer">
         <div id="Chart">
            { chart }
         </div>
      </div>
   )
}

export default Chart
