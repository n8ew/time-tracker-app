const initialState = []

const pausesReducer = (state = initialState, action) => {
   switch(action.type) {

      case "pauses/addPause":
         return [
            ...state,action.payload
         ]

      default:
         return state

   }
}

export default pausesReducer