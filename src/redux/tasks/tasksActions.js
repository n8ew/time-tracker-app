export const addTask = task => {
   return {
      type: "tasks/addTask",
      payload: task
   }
}

export const setActive = task => {
   return {
      type: "tasks/setActive",
      payload: task
   }
}
export const setDone = task => {
   return {
      type: "tasks/setDone",
      payload: task
   }
}
export const removeTask = id => {
   return {
      type: "tasks/removeTask",
      payload: id
   }
}
export const endActiveTask = task => {
   return {
      type: "tasks/endActiveTask",
      payload: task
   }
}
export const clearTasks = () => {
   return {
      type: "tasks/clearTasks"
   }
}