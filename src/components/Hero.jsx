import React from 'react'

function Hero() {
  return (
    <div>
      <div className='relative pl-2 mx-auto ' >
        {/* overlay */}
        <div className='absolute  h-[800px] w-full flex flex-col justify-center  bg-black/50'>
            <h1 className='text-white sm:text-5xl lg:text-7xl text-4xl px-4 font-bold '> The <span className='text-orange-400'>Best </span></h1>
            <h1 className='text-4xl sm:text-5xl lg:text-7xl px-4 text-orange-400 font-bold '> Food <span className='text-white'>Delivered </span></h1>
            <div className= ' sm:text-sm md:text-lg lg:text-2xl text-xs text-white p-3 mt-12  ml-3 font font-semibold rounded-full bg-orange-500 w-fit cursor-pointer hover:bg-orange-700 '>Buy now </div>
        </div>
        <img src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-full h-[800px]  ' alt="" />
      </div>
    </div>
  )
}

export default Hero
