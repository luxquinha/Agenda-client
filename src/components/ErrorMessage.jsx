import React from 'react'

function ErrorMessage({message, icon}) {
  return (
    <div className="flex flex-row gap-x-1 items-center  text-orange-700 self-start ml-7">
        {icon}
        <span className='text-sm font-medium'>{message}</span>
    </div>
  )
}

export default ErrorMessage