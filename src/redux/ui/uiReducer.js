const initialState = {
   lightMode: true
}

const uiReducer = (state = initialState, action) => {
   switch(action.type) {

      case "ui/change":
         return {
            ...state,
            lightMode: !state.lightMode
         }

      default:
         return state
   }
}

export default uiReducer