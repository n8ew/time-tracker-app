const initialState = {
   status: 0
}

const chartsReducer = (state = initialState, action) => {
   switch(action.type) {

      case "charts/setFilter":
         return {
            ...state,
            status: action.payload
         }

      default:
         return state
   }
} 

export default chartsReducer