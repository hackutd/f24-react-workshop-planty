import React, {useState} from 'react'
import Popup from './Popup.jsx'

function Valuedisplay() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }
  return (
    <div>
        {/* pop up right here ig */}
        <Popup isOpen={isPopupOpen} togglePopup={togglePopup}></Popup>
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
            <div className='px-4 flex flex-row items-center bg-backgroundDark text-primary rounded-xl border-backgroundDark border-2 hover:bg-backgroundDarker hover:border-backgroundDarker transition duration-150'>
                <button className='w-full flex text-xl font-bold justify-center'>buy 10 water (10g)</button>
            </div>
            <div className='px-4 bg-backgroundDark flex flex-row items-center justify-center text-primary rounded-xl border-backgroundDark border-2 hover:bg-backgroundDarker hover:border-backgroundDarker transition duration-150'>
                <button onClick={togglePopup} className='flex text-xl font-bold justify-center'>new plant(5g)</button>
            </div>
        </div>
    </div>
  )
}

export default Valuedisplay