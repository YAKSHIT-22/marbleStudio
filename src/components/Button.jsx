import React from 'react'

const Button = () => {
  return (
    <button  className="bg-white p-4 w-40 flex items-center justify-center rounded-full">
    <p className="flex items-center justify-center gap-2 text-sm">APPLY NOW <span className="text-black"><svg width="11" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m6.143 9 4-4-4-4M10.143 5H1" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></path></svg></span></p>
  </button>
  )
}

export default Button