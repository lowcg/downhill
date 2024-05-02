import React from 'react'

const card = (image,content) => {
  return (
    <div className='flex flex-row items-start'>
        {image}
        {content}
        
    </div>
  )
}

export default card