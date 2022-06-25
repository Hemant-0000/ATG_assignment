import Image from 'next/image'
import React from 'react'
import location_icon from '../public/assets/location_icon.svg'
import location_icon2 from '../public/assets/location_icon2.svg'
import edit_icon from '../public/assets/edit_icon.svg'
import warning from '../public/assets/warning.svg'

function WritePost() {
  return (
    <>
        <div className='xl:col-span-1'>
            {/* location icon  */}
            <div className='absolute top-[657.5px] left-[1000.75px] '><Image src={location_icon} alt=''/></div>
            <div className='absolute top-[650px] left-[1003.6px] '><Image src={location_icon2} alt=''/></div>

            {/* location  */}
            <h2 className='h-[18px] absolute top-[660px] left-[1019px] font-IBM font-[600] text-[14px] leading-[18px] text-black '>Noida, India</h2>

            {/* edit icon  */}
            <div className='absolute top-[657.5px] left-[1222.5px] '><Image src={edit_icon} alt=''/></div>

            {/* underline  */}
            <div className='w-[243px] absolute top-[685px] left-[997px] border-[0.4px] border-solid border-[#B8B8B8] '></div>

            {/* warning  */}
            <div className='absolute top-[719.33px] left-[998.33px] opacity-50 '><Image src={warning} alt=''/></div>
            <p className='absolute w-[280px] h-[32px] top-[717px] left-[1020px] opacity-50 font-IBM font-[400] text-black leading-[16px] '>Your location will help us serve better and extend a personalised experience.</p>

        </div>
    </>
  )
}

export default WritePost