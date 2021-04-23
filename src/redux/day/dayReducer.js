const initialState = {
   dayStart: null,
   dayEnd: null,
   dayStoperValue: null,
   stoperStatus: 0
}

const dayReducer = (state = initialState, action) => {
   switch(action.type) {

      case "day/setStartTime":
         return {
            ...state,
            dayStart: action.payload
         }
      
      case "day/endDay":
         return {
            ...state,
            dayEnd: action.payload.endTime,
            dayStoperValue: action.payload.stoperTime
         }
      
      case "day/changeStoperStatus":
         return {
            ...state,
            stoperStatus: action.payload
         }

      default:
         return state
   }
}

export default dayReducer