import React from 'react'
import { Bar } from 'react-chartjs-2'
import { useSelector } from 'react-redux'

const getData = state => state

const Chart = () => {

   const data = useSelector(getData)

   console.log(data)
   // ChartData

   const getBreaksTotal = () => {
      let total = 0
      data.pauses.map(i => total+= i)
      return parseInt(total/1000)
   }
   const getTasksTotal = () => {
      let totla = 0
      data.tasks.tasksList.map(i => totla += i.time )
      return parseInt(totla/1000)
   }

   // General

   const generalY = parseInt((data.day.dayEnd.getTime() - data.day.dayStart.getTime()) / 1000)
   const work = parseInt((data.day.dayStoperValue/generalY)*100)
   const breaks = parseInt((getBreaksTotal() / generalY)*100)
   const tasks = parseInt((getTasksTotal() / generalY)*100)
   const generalData = {
      labels: ["Work","Breaks","Tasks"],
      datasets: [{
         label: "General Data",
         data: [work,breaks,tasks]
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
      let arr = []
      data.pauses.map(i => arr.push(parseInt(i/1000)))
      return arr
   }
   const breaksData = {
      labels: breaksLabels(),
      datasets: [{
         label: "Breaks Data",
         data: breaksDatasets()
      }]
   }

   // ChartOptions
   const options = {
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
               suggestedMax: 100
            }
         }]
      }
   }

   if(data.charts.status === 0) {
      return (<Bar data={generalData} options={options} />)
   }
   if(data.charts.status === 1) {
      return (<Bar data={breaksData} options={options} />)
   }
   return (
      <div>
         Hi
      </div>
   )
}

export default Chart
