export const addPause = time => {
   return {
      type: "pauses/addPause",
      payload: time
   }
}