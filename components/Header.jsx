import React from 'react'
import Image from 'next/image'
import back_arrow from '../public/assets/back_arrow.svg'
import filter_dropdown from '../public/assets/filter_dropdown.svg'

function Header() {
    return (
        <>
            <div className='header w-[360px] h-[236px] absolute left-0'>
                <div className='absolute w-[16px] h-[16px] left-[20px] top-[20px] text-white'><Image src={back_arrow} alt='' /></div>

                <div className='cursor-pointer w-[76px] h-[28px] absolute top-[14px] left-[266px] rounded-[4px] text-white box-border border-[0.8px] border-solid border-white'><span className='absolute w-[60px] h-[16px] top-[6px] left-[8px] font-[600] text-[12px] leading-[16px] text-white font-IBM'>Join Group</span></div>

                <h3 className='absolute top-[164px] left-[16px] w-[179px] h-[22px] font-[800] font-IBM text-[17px] leading-[22.1px] text-white '>Computer Engineering</h3>
                <p className='w-[218px] h-[16px] absolute top-[188px] left-[16px] font-IBM font-[400] text-[12px] leading-[16px] text-white '>142,765 Computer Engineers follow this</p>
            </div>

            <p className='w-[73px] h-[18px] absolute top-[258px] left-[16px] font-IBM font-[900] text-[14px] leading-[18px] text-[#212529] tracking-[0.01em]'>Posts(368)</p>

            <button className='w-[106px] h-[32px] absolute top-[250px] left-[236px] rounded-[4px] bg-[#F1F3F5]'><span className='absolute top-[8px] left-[10px] w-[55px] h-[17px] font-IBM font-[700] text-[13px] leading-[17px] text-[#212529] '>Filter: All</span> 
            <div className='absolute top-[1.8px] left-[81.83px]'><Image src={filter_dropdown} alt='' /></div>
            </button>
        </>
    )
}

export default Header