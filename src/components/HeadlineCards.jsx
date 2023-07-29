import React from 'react'

function HeadlineCards() {
  return (
    <div className='mx-auto py-12 grid sm:grid-cols-2 gap-6 lg:gap-0 lg:grid-cols-3'>
      {/* Card */}
      <div className='relative p-2 '>
        {/* overlay  */}
        <div className='absolute text-white rounded-xl bg-black/50 h-[160px] w-[268px] md:w-[300px] md:h-[210px]'> 
            <p className='font-bold text-[23px] pt-6 px-2 md:text-[27px]'> Sun's Out, <span className='text-orange-400'>BOGO's </span>  Out</p>
            <p className='px-2 text-lg'>Through 8/26</p>
            <button className='text-white bg-orange-500 mx-1   mt-9 md:mt-7 border-white hover:bg-orange-600'>Order now</button>
        </div>
        <img src="https://images.pexels.com/photos/421809/pexels-photo-421809.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"
         className=' h-[160px] object-cover md:h-[500px] max-w-[268px]  md:max-w-[300px] md:max-h-[210px] rounded-xl' />
      </div>
      


         {/* Card */}
         <div className='relative p-2 '>
        {/* overlay  */}
        <div className='absolute text-white rounded-xl bg-black/50 h-[160px] w-[262px] md:w-[300px] md:h-[210px]'> 
            <p className='font-bold text-[23px] pt-6 px-2 md:text-[27px]'> Large Canon <span className='text-orange-400'> MINGS's </span> Out</p>
            <p className='px-2 text-lg'>Through 8/26</p>
            <button className='text-white bg-orange-500 mx-1 mt  mt-1 md:mt-7 border-white hover:bg-orange-600'>Order now</button>
        </div>
        <img src="https://images.pexels.com/photos/1563045/pexels-photo-1563045.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="/"
         className='max-h-[160px] object-cover md:h-[500px] max-w-[288px]  md:max-w-[300px] md:max-h-[210px] rounded-xl' />
      </div>





   {/* Card */}
   <div className='relative p-2 '>
        {/* overlay  */}
        <div className='absolute text-white rounded-xl bg-black/50 h-[160px] w-[258px] md:w-[300px] md:h-[210px]'> 
            <p className='font-bold text-[23px] pt-6 px-2 md:text-[27px]'> Buffalo, speed <span className='text-orange-400'>NUTS's </span> Out</p>
            <p className='px-2 text-lg'>Through 8/26</p>
            <button className='text-white bg-orange-500 mx-1 mt  mt-1 md:mt-7 border-white hover:bg-orange-600'>Order now</button>
        </div>
        <img src="https://images.pexels.com/photos/11299730/pexels-photo-11299730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/"
         className='max-h-[160px] object-cover md:h-[500px] max-w-[268px] md:max-w-[300px] md:max-h-[210px] rounded-xl' />
      </div>



      
    </div>
  )
}

export default HeadlineCards
