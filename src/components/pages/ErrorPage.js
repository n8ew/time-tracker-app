import React from 'react'
import { motion } from 'framer-motion'
import { pageTransition, pageVariants } from '../ui/FramerMotion'

const ErrorPage = () => {
   return (
      <motion.div
         initial="initial"
         animate="in"
         exit="out"
         variants={pageVariants}
         transition={pageTransition}
         style={{width:"100vw",height:"50vh",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"32px"}}
         >
         404 PageNotFound
      </motion.div>
   )
}

export default ErrorPage
