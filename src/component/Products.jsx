import React from 'react'
import {BsArrowRight, BsArrowLeft} from "react-icons/bs"

const Products = () => {
  return (
    <div className='w-4/5 m-auto space-y-10 pt-3'>
      <div className='flex justify-between'>
        <ul className='flex space-x-8'>
          <li>Collection</li>
          <li>Phones</li>
          <li>Shirts</li>
          <li>Shoes</li>
          <li>Glasses</li>
        </ul>
        <div className='space-x-4'>
          <button><BsArrowLeft size={'1.5rem'}/></button>
          <button className='bg-rose-300 rounded-full text-white p-2 drop-shadow-sm'><BsArrowRight size={'1.5rem'} /></button>
        </div>
      </div>

      <div className='products grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 content-center'>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full object-cover h-4/5' src="../../images/laptop.jpg" alt="" />
          <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit.</p>
          <h1 className='text-xl font-semibold'>$700</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full object-cover h-4/5' src="../../images/cout.jpg" alt="" />
          <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit.</p>
          <h1 className='text-xl font-semibold'>$700</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full object-cover h-4/5' src="../../images/glases.jpg" alt="" />
          <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit.</p>
          <h1 className='text-xl font-semibold'>$700</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full object-cover h-4/5' src="../../images/shoes.jpg" alt="" />
          <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit.</p>
          <h1 className='text-xl font-semibold'>$700</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full object-cover h-4/5' src="../../images/glases.jpg" alt="" />
          <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit.</p>
          <h1 className='text-xl font-semibold'>$700</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full object-cover h-4/5' src="../../images/laptop.jpg" alt="" />
          <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit.</p>
          <h1 className='text-xl font-semibold'>$700</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full object-cover h-4/5' src="../../images/cout.jpg" alt="" />
          <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit.</p>
          <h1 className='text-xl font-semibold'>$700</h1>
        </div>
        <div className='product h-[350px] space-y-2'>
          <img className='w-full object-cover h-4/5' src="../../images/shoes.jpg" alt="" />
          <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit.</p>
          <h1 className='text-xl font-semibold'>$700</h1>
        </div>
      </div>

      <div className='relative w-full h-[300px]'>
        <img className='w-full top-0 rounded-xl h-full object-cover absolute' src="../../images/phone.jpg" alt="" />
        <div className='w-11/12 xl:w-1/2 h-full m-auto flex flex-col absolute justify-center space-y-3 p-5 text-white'>
          <h1 className='text-4xl text-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, reprehenderit?</h1>
          <p className=''>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, corporis omnis perspiciatis mollitia nam iusto reprehenderit commodi eveniet beatae quaerat!</p>
          <button className='rounded-md bg-rose-300 w-28 p-2'>See More</button>
        </div>
      </div>
    </div>
  )
}

export default Products