import React from 'react'
import Image from 'next/image'
import filter_dropdown from '../public/assets/filter_dropdown.svg'
import search_icon from '../public/assets/search_icon.svg'
import A from '../public/assets/A.svg'
import T from '../public/assets/T.svg'
import G from '../public/assets/G.svg'
import dot_atg from '../public/assets/dot_atg.svg'
import W from '../public/assets/W.svg'
import O from '../public/assets/O.svg'
import R from '../public/assets/R.svg'
import L from '../public/assets/L.svg'
import D from '../public/assets/D.svg'


function Navbar() {
    return (
        <>
            <div className='w-full h-[72px] '>
                <div className='absolute w-[18.61px] h-[21.45px] top-[25.17px] left-[38px]'><Image src={A} alt=' ' /></div>
                <div className='absolute w-[16.54.61px] h-[21.22px] top-[24.3px] left-[54px]'><Image src={T} alt=' ' /></div>
                <div className='absolute w-[16.79px] h-[21.7px] top-[25.17px] left-[70px]'><Image src={G} alt=' ' /></div>
                <div className='absolute w-[2.01px] h-[3.68px] top-[26px] left-[89px]'><Image src={dot_atg} alt=' ' /></div>
                <div className='absolute w-[25.89px] h-[21.6px] top-[24px] left-[90px]'><Image src={W} alt=' ' /></div>
                <div className='absolute w-[23.98px] h-[24px] top-[23px] left-[116px]'><Image src={O} alt=' ' /></div>
                <div className='absolute w-[15.2px] h-[21.3px] top-[24px] left-[142px]'><Image src={R} alt=' ' /></div>
                <div className='absolute w-[13.21px] h-[21.22px] top-[24px] left-[160px]'><Image src={L} alt=' ' /></div>
                <div className='absolute w-[16.21px] h-[21.23px] top-[24px] left-[175px]'><Image src={D} alt=' ' /></div>

                <div className='w-[360px] h-[42px] absolute top-[16px] left-[215px] rounded-[21px] bg-[#F2F2F2]  '>
                    <div className='absolute top-[12.75px] left-[16.75px] '><Image src={search_icon} alt='' /></div>
                    <input className='absolute w-[290px] top-[12px] left-[50px] font-IBM font-[600] text-[14px] leading-[18px] text-[#5C5C5C] bg-transparent outline-none ' placeholder='Search for your favorite groups in ATG' type="text" />
                </div>

                <h3 className='absolute w-[183px] h-[21px] top-[27px] text-[14px] left-[590px] font-IBM  leading-[21px] flex flex-row '>
                   <p className='font-[600] text-[#2E2E2E] '>Create account.</p><span className='font-[800] text-[#2F6CE5] '> It&#8217;s free! <Image src={filter_dropdown} alt='' /></span>
                </h3>
            </div>
        </>
    )
}

export default Navbar