const initialState = []

const pausesReducer = (state = initialState, action) => {
   switch(action.type) {

      case "pauses/addPause":
         return [
            ...state,action.payload
         ]
      case "pauses/clearPauses":
         return []

      default:
         return state

   }
}

export default pausesReducer