import React from 'react'
import Navbar from './Navbar'

const Name = (props ) => {
  return (
    <div>
      <Navbar/>
      {props.child}
    </div>
  )
}

export default Name
