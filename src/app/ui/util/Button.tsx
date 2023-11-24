import { ReactNode } from 'react'
import './button.css'

function Button({size, children}: {size?: 'sm'|'lg',children: ReactNode}) {
  const btnSize = {sm: 'py-3 px-7', lg: 'py-5 px-9'}
  return (
    <button className='btn relative'>
      <div className={`cursor-pointer bg-regal-black text-white font-medium ${!size ? 'py-3 px-7' : btnSize[size]} flex items-center rounded-[100px] relative z-[4] wave`}>
        {children}
      </div>
      <div className='btn-effect  transition-all absolute overflow-hidden overflow-x-auto left-0 top-0 w-full h-full z-[3]'>
        <div className='absolute bg-white w-[120%] h-[100%] left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 z-[2] opacity-30'></div>
        <div className='absolute bg-button-gradient w-[150%] h-[500%] -left-1/4 -bottom-full z-[1] animate-spin-slow'></div>
      </div>
    </button>
  )
}

export default Button