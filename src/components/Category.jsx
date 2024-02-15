import React from 'react'
import { categories } from '../data/data.js'


const Category = () => {
  console.log(categories)
  return (
    <div className='max-w-[1640px] px-4 mx-auto py-12 '>
      <h1 className='text-orange-500 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6 '>
        {categories.map((item,index)=>(
            <div className='bg-gray-100 rounded-lg flex justify-between items-center hover:bg-orange-500 hover:cursor-pointer hover:scale-105 duration-300 ' key={index}>
              <h2 className='font-bold sm:text-lg'>{item.name}</h2>
              <img src={item.image} alt={item.name} />
            </div>

        ))}
      </div>
    </div>
  )
}

export default Category