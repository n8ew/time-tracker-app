export const addPause = time => {
   return {
      type: "pauses/addPause",
      payload: time
   }
}
export const clearPause = () => {
   return {
      type: "pauses/clearPauses"
   }
}