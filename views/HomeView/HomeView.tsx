import React from 'react'
import { Button } from '../../shared';

const HomeView = () => {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1>Hello World!</h1>
      <Button className='bg-blue-500 w-40 rounded-3xl text-white px-4 py-2 cursor-pointer hover:bg-blue-600'>
        Click
      </Button>
    </div>
  )
}

export default HomeView