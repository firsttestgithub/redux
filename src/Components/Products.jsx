import React, { useEffect } from 'react'
import shoePic from '../assets/shoe.jpg'
import { fetchProduct } from '../Store/slice/product'
import { useDispatch, useSelector } from 'react-redux'
const Products = () => {
  let  {getProduct,status} = useSelector((state)=>state.getReducer)
  
let dispatch =  useDispatch();

  useEffect(()=>{
    dispatch(fetchProduct())
  },[])


  return (
    <>
    <div className='h-[60vh] border flex flex-col justify-center items-center mt-6'>
      {getProduct.map((item,index)=>{

<div className='p-5 h-[440px] w-[300px] rounded border flex flex-col justify-between shadow-lg cursor-pointer
         shadow-black bg-white  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-90 duration-500'>
            <div className='w-60 flex justify-center items-center'>
                <img src={item.images} alt="" />
            </div>
            <div className=''>
                <h1 className='text-[20px] leading-6 font-[600]'>{item.title}</h1>
                <p className='text-[16px] mt-2 leading-5'>{item.description}</p>
                <p className='text-2xl font-bold mt-2'>{item.price}</p>
                <button className='bg-gradient-to-r from-sky-500 to-indigo-500 w-full rounded-full p-2 mt-3 text-white text-[20px]'>Add to cart</button>
            </div>
        </div>
      })
    }
      
      
        
    </div>
    </>
  )
}

export default Products