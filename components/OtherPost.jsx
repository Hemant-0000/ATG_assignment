import React from 'react'
import Image from 'next/image'
import three_dots from '../public/assets/three_dots.svg'
import share_icon from '../public/assets/share_icon.svg'
import calendar from '../public/assets/calendar.svg'
import location_icon from '../public/assets/location_icon.svg'
import location_icon2 from '../public/assets/location_icon2.svg'

function OtherPost({ img, emoji, category, title, date, location, site, userimg, username, views }) {
    return (
        <>
            <div className='relative w-[360px] h-[374px] bg-white shadow-my-shadow mb-2'>

                {/* Post image  */}
                <img src={img} className='w-[360px] h-[120px] object-fill post-bg' alt='' />

                {/* post genre */}
                <p className='absolute top-[134px] left-[16px] h-[19px] font-IBM font-[500] text-[14px]  leading-[18px] text-[#343A40] '>{emoji} {category}</p>

                {/* title  */}
                <h3 className='absolute top-[159px] left-[16px] w-[280px] h-[42px] font-IBM font-[600] text-[16px] leading-[21px] text-[#212529] '>{title}</h3>

                {/* three dots icon */}
                <div className='cursor-pointer h-[4.67px] w-[18.67px] text-[#212529] absolute top-[155.55px] left-[318.67px] '><Image src={three_dots} alt='' /></div>

                {/* date */}
                <div className='absolute top-[211px] left-[16px] w-[324px] h-[18px] font-IBM font-[400] text-[14px] leading-[18px] text-[#495057] '>
                    <div className='absolute top-[0.67px] left-[2px]'><Image src={calendar} alt=''/></div>
                    <p className='w-[120px] h-[16px] absolute top-[0] left-[20px] font-IBM font-[600] text-[12px] leading-[16px]  '>{date}</p>
                    </div>

                {/* location */}
                <p className='absolute top-[211px] left-[16px] w-[324px] h-[18px] font-IBM font-[400] text-[14px] leading-[18px] text-[#495057] '>
                    <div className='absolute top-[-6px] left-[184px] '><Image src={location_icon2} alt=''/></div>
                    <div className='absolute top-[0.8px] left-[181.33px] '><Image src={location_icon} alt=''/></div>
                    <p className='w-[100px] h-[16px] absolute top-[0px] left-[196px] font-IBM font-[600] text-[12px] leading-[16px] tracking-[-0.01em] text-[#212529]  '>{location}</p>
                    </p>

                {/* visit site */}
                <button className={`absolute top-[245px] left-[17px] w-[328px] h-[34px] bg-white rounded-[8px] box-border border-[0.07px] border-solid border-[#A9AEB8] text-[13px] leading-[18px] text-center ${category=='Meetup'? 'text-[#E56135]' : 'text-[#02B875]'} font-IBM font-[600] `}>{site}</button>

                {/* userimage  */}
                <div className='w-[37px] h-[37px] absolute top-[310px] left-[16px] '><img className='rounded-[24px]' src={userimg} alt='' /></div>

                {/* username  */}
                <p className='absolute top-[312px] left-[65px] h-[17px] font-IBM font-[700] text-[13px] leading-[17px] text-[#212529] '>{username}</p>

                {/* views  */}
                <p className='absolute top-[329px] left-[65px] h-[16px] font-IBM font-[500] text-[12px] leading-[16px] text-[#495057] '>{views}</p>

                {/* share button  */}
                <button className='absolute w-[70px] h-[36px] top-[311px] left-[272px] bg-[#F1F3F5] rounded-[4px] '>
                    <div className='absolute top-[7.6px] left-[10.25px] w-[13.5px] h-[14.94px] text-[#212529] '><Image src={share_icon} alt='' /></div>
                    <p className='absolute w-[32px] h-[16px] top-[10px] left-[30px] font-IBM font-[500] text-[12px] leading-[16px] text-[#212529] '>Share</p>
                </button>

            </div>
        </>
    )
}

export default OtherPost