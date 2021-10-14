export const setStartTime = time => {
   return {
      type: "day/setStartTime",
      payload: time
   }
}

export const endDay = (endTime, stoperTime) => {
   return {
      type: "day/endDay",
      payload: {
         endTime,
         stoperTime
      }
   }
}

export const changeStoperStatus = status => {
   return {
      type: "day/changeStoperStatus",
      payload: status
   }
}
export const clearDay = () => {
   return {
      type: "day/clearDay"
   }
}