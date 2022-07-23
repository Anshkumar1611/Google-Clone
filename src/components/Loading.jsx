import React from 'react'
import {Rings} from 'react-loader-spinner'
function Loading() {
  return (
    <div className='flex justify-center items-center'>
        <Rings ariaLabel="loading-indicator" />
    </div>
  )
}

export default Loading