const addZeroIfNeeded = x => {
   if(x<10) {
      return `0${x}`
   } else {
      return x
   }
}

export const formatStoper = x => {
   let s = x
   let m = 0
   let h = 0
   if(s >= 60) {
      m = parseInt(s/60)
      s = s%60
      if(m >= 60) {
         h = parseInt(m/60)
         m = m%60
      }
   }

   if (h === 0 && m === 0) {
      return `00:${addZeroIfNeeded(s)}`
   } else if (h === 0) {
      return `${addZeroIfNeeded(m)}:${addZeroIfNeeded(s)}`
   } else {
      return `${addZeroIfNeeded(h)}:${addZeroIfNeeded(m)}:${addZeroIfNeeded(s)}`
   }

}

