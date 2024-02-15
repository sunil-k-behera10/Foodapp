import React from 'react'

const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 '>
      <div className='rounded-xl relative hover:scale-105 duration-300 '>
        <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'> 
          <p className='font-bold text-4xl pt-4 px-3'>Sun's Out, POGO's out</p>
          <p className='px-3'>Through 8/26</p>
          <button className='border border-white  bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 hover:border-none'>Order Now</button>
        </div>
        <img
        className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl ' 
        src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>

      <div className='rounded-xl relative hover:scale-105 duration-300'>
        <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'> 
          <p className='font-bold text-4xl pt-4 px-3'>Mom's Done, John out</p>
          <p className='px-3'>Through 5/21</p>
          <button className='border border-white  bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 hover:border-none'>Order Now</button>
        </div>
        <img
        className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl' 
        src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>

      <div className='rounded-xl relative hover:scale-105 duration-300'>
        <div className='absolute w-full h-full bg-black/50 text-white rounded-xl'> 
          <p className='font-bold text-4xl pt-4 px-3'>New Hotels, Try Now</p>
          <p className='px-3'>Through 82/26</p>
          <button className='border border-white  bg-white text-black mx-2 absolute bottom-4 hover:bg-orange-500 hover:border-none'>Order Now</button>
        </div>
        <img
        className='max-h-[168px] md:max-h-[200px] w-full object-cover rounded-xl' 
        src="https://images.pexels.com/photos/4015334/pexels-photo-4015334.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
    </div>
  )
}

export default Cards