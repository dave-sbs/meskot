import React from 'react'

const Home = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
        <h1 className='text-3xl font-bold'>
          <div className='h-[300px] w-full rounded-[20px] bg-hero bg-cover'>
            <div className='flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11'>
              <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meeting at: 12:30 PM</h2>
              <div className='flex flex-col gap-2'>
                <h1 className='text-4xl font-extrabold lg:text-7xl'>
                  {new Intl.DateTimeFormat('en-US', { timeStyle: 'short', hour12: true, hourCycle: 'h12' }).format(new Date())}
                </h1>
                <p className='text-lg font-medium text-sky-1 lg:text-2xl'>
                  {new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format(new Date())}
                </p>
              </div>
            </div>
          </div>
        </h1>
    </section>
  )
}

export default Home