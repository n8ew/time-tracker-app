export const addTask = task => {
   return {
      type: "tasks/addTask",
      payload: task
   }
}

export const aenActiveTask = task => {
   return {
      type: "tasks/endActibeTask",
      payload: task
   }
}