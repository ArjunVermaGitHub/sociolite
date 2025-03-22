import MySvg from '../../../public/static/sociolite.svg'
import styles  from "./Sociolite.module.scss"

import React from 'react'

const Sociolite = () => {
  return (
    <div className='sociolite'>
      <MySvg
        style={{width:"100%"}}
      />
  </div>
  )
}

export default Sociolite