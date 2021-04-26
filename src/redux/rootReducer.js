import { combineReducers } from 'redux'
import dayReducer from './day/dayReducer'
import tasksReducer from './tasks/tasksReducer'
import pausesReducer from './pauses/pausesReducer'
import chartsReducer from './charts/chartsReducer'
import uiReducer from './ui/uiReducer'

const rootReducer = combineReducers({
   day: dayReducer,
   tasks: tasksReducer,
   pauses: pausesReducer,
   charts: chartsReducer,
   ui: uiReducer
})

export default rootReducer