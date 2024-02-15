import {data} from '../data/data.js'
import React, { useState } from 'react'


const Fooditems = () => {

const[foods,setFoods] = useState(data)


const filterType = (category) =>{
  setFoods(
    data.filter((item) =>{
      return item.category === category;
    })
  );
};

const filterPrice = (price) =>{
  setFoods(
    data.filter((item) =>{
      return item.price === price;
    })
  );
};



  return (
    <div className='max-h-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-500 font-bold text-4xl text-center'>Most rated Menu items</h1>

      {/* filter row */}
      <div className='flex flex-col lg:flex-row justify-between'>

        {/* filter type */}
        <div>
          <p className='font-bold text-gray-600'>Filter Type</p>

          <div className='flex justify-between flex-wrap'>
              <button onClick={()=> setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
              <button onClick={()=> filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
              <button onClick={()=> filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
              <button onClick={()=> filterType('salad')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salad</button>
              <button onClick={()=> filterType('chicken')}  className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
             
          </div>

        </div>


        {/* filter price */}
        <div>
           <p className='font-bold text-gray-600'>Filter Price</p>

                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=> filterPrice('$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$</button>
                    <button onClick={()=> filterPrice('$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$</button>
                    <button onClick={()=> filterPrice('$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$</button>
                    <button onClick={()=> filterPrice('$$$$')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>$$$$</button>
        
                  
                </div>
        </div>
      </div>


{/* display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-5'>
          {foods.map((item,index)=> (
            <div key={index} className='border shadow-lg hover:scale-105 duration-300 rounded-xl hover:bg-orange-400 hover:cursor-pointer'>
              <img src={item.image} alt={item.name}
              className='w-full h-[200px]  object-cover rounded-xl' />
              <div className='flex justify-between px-2 py-5'>
                <p className='font-bold'>{item.name}</p>
                <p>
                  <span className='bg-orange-500 text-white p-1 rounded-xl'>{item.price}</span>
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Fooditems