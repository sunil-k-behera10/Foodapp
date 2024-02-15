import React from 'react'

const Body = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        <div className='absolute w-full h-full text-gray-200  max-h-[500px] bg-black/40 flex flex-col justify-center'>
          <h1 className='font-bold px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>The <span className='text-orange-600'>Best</span></h1>
          <h1 className='font-bold px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Foods <span className='text-orange-600'>Delivered</span></h1>
        </div>
        <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='w-full max-h-[500px] object-cover'/>
      </div>
    </div>
  )
}

export default Body