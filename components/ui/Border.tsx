'use client'
import React from 'react'
import { motion } from 'framer-motion'

type TBorder = {
  style: string
}

const Border = ({ style }: TBorder) => {
  return (
    <motion.div
      className={style}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    ></motion.div>
  )
}

export default Border
