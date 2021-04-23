import { combineReducers } from 'redux'
import dayReducer from './day/dayReducer'
import tasksReducer from './tasks/tasksReducer'
import pausesReducer from './pauses/pausesReducer'
import uiReducer from './ui/uiReducer'

const rootReducer = combineReducers({
   day: dayReducer,
   tasks: tasksReducer,
   pauses: pausesReducer,
   ui: uiReducer
})

export default rootReducer