import React from 'react'

function Valuedisplay() {
  return (
    <div>
        <div className='flex flex-wrap gap-8 justify-center font-balsamiq'>
            <div className='flex flex-row justify-evenly items-center bg-backgroundDark text-primary rounded-xl border-backgroundDark border-2'>
                <h1 className='px-2 flex text-xl font-bold justify-center bg-backgroundDark translate-x-2'>gold</h1>
                <div className='w-24 h-full bg-background rounded-xl flex justify-center'>
                    <h1 className='font-bold text-xl text-text'>
                        500
                        {/* Will later be a prop value */}
                    </h1>
                </div>
            </div>
            <div className='flex flex-row justify-evenly items-center bg-backgroundDark text-primary rounded-xl border-backgroundDark border-2'>  
                <h1 className='px-2 flex text-xl font-bold justify-center bg-backgroundDark translate-x-2'>water</h1>
                <div className='w-24 h-full px-4 bg-background rounded-xl flex justify-center'>
                    <h1 className='font-bold text-xl text-text'>
                        25
                        {/* Will later be a prop value */}
                    </h1>
                </div>
            </div>
            <div className='cursor-pointer px-4 flex flex-row items-center bg-backgroundDark text-primary rounded-xl border-backgroundDark border-2 hover:bg-backgroundDarker hover:border-backgroundDarker transition duration-150'>
                <h1 className='w-full flex text-xl font-bold justify-center'>buy 10 water (10g)</h1>
            </div>
            <div className='cursor-pointer px-4 bg-backgroundDark flex flex-row items-center justify-center text-primary rounded-xl border-backgroundDark border-2 hover:bg-backgroundDarker hover:border-backgroundDarker transition duration-150'>
                <h1 className='flex text-xl font-bold justify-center'>newplant(5g)</h1>
            </div>
        </div>
    </div>
  )
}

export default Valuedisplay