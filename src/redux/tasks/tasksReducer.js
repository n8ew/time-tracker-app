const initialState = {
   tasksList: [],
   activeTask: null
}

const tasksReducer = (state = initialState, action) => {
   switch(action.type) {

      case "tasks/addTask":
         return {
            ...state,
            activeTask: action.payload
         }
      
      case "tasks/endActiveTask":
         return {
            ...state,
            tasksList: [...state.tasksList, action.payload],
            activeTask: null
         }
      
      default:
         return state
   }
}

export default tasksReducer