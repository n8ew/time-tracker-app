export const addTask = task => {
   return {
      type: "tasks/addTask",
      payload: task
   }
}

export const endActiveTask = task => {
   return {
      type: "tasks/endActiveTask",
      payload: task
   }
}