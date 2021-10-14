const initialState = {
   tasksList: [],
   doneTasksList: [],
   activeTask: null
}

const tasksReducer = (state = initialState, action) => {
   switch(action.type) {

      case "tasks/addTask":
         return {
            ...state,
            tasksList: [...state.tasksList, action.payload]
         }
      case "tasks/setActive":
         return {
            ...state,
            tasksList: state.tasksList.filter(task => task.id !== action.payload.id),
            activeTask: action.payload
         }
      case "tasks/setDone":
         return {
            ...state,
            tasksList: state.tasksList.filter(task => task.id !== action.payload.id),
            doneTasksList: [...state.doneTasksList, action.payload]
         }
      case "tasks/removeTask":
         return {
            ...state,
            tasksList: state.tasksList.filter(task => task.id !== action.payload)
         }
      case "tasks/endActiveTask":
         return {
            ...state,
            tasksList: state.tasksList.filter(task => task.id !== action.payload.id),
            doneTasksList: [...state.doneTasksList, action.payload],
            activeTask: null
         }
      case "tasks/clearTasks":
         return {
            doneTasksList: [],
            tasksList: [],
            activeTask: null
         }
      
      default:
         return state
   }
}

export default tasksReducer