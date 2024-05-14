import React from 'react'

function InputIcon({placeholder, register, type, width, label, required, icon: Icon}) {
  return (
    <div className={`${width} flex flex-row justify-between border-b border-orange-300 self-center`}>
        <input autoComplete='off' placeholder={placeholder} {...register(label, {required:`The ${label} is required`})} type={type} className={`h-8 flex flex-row gap-x-1 text-white bg-transparent outline-none`}/>
        <Icon className='text-orange-500'/>
    </div>
  )
}

export default InputIcon