import React from 'react'
import Image from 'next/image'
import three_dots from '../public/assets/three_dots.svg'
import share_icon from '../public/assets/share_icon.svg'

function Post({ img, category, emoji, title, desc, userimg, username, views }) {
    return (
        <>
            <div className='relative w-[360px] h-[307px] md:w-[500px] md:h-[400px] bg-white shadow-my-shadow md:mt-[28px] mx-auto'>

                {/* Post image  */}
                <img src={img} className='w-[360px] md:w-[500px] h-[120px] md:h-[220px] object-fill post-bg' alt='' />

                {/* post genre */}
                <p className='absolute top-[134px] left-[16px] h-[19px] font-IBM font-[500] text-[14px]  leading-[18px] text-[#343A40] md:top-[228.5px] '>{emoji} {category}</p>

                {/* title  */}
                <h3 className='absolute top-[159px] left-[16px] w-[280px] h-[42px] font-IBM font-[600] text-[16px] leading-[21px] text-[#212529] md:w-[400px] md:top-[255px] '>{title}</h3>

                {/* three dots icon */}
                <div className='cursor-pointer h-[4.67px] w-[18.67px] text-[#212529] absolute top-[155.55px] left-[318.67px] md:left-[460px] md:top-[255px] '><Image src={three_dots} alt='' /></div>

                {/* description */}
                <p className='absolute top-[211px] left-[16px] w-[324px] h-[18px] font-IBM font-[400] text-[14px] leading-[18px] text-[#495057] md:top-[310px] '>{desc}</p>

                {/* userimage  */}
                <div className='w-[37px] h-[37px] absolute top-[250px] left-[16px] md:top-[350px] '><img className='rounded-[24px]' src={userimg} alt='' /></div>

                {/* username  */}
                <p className='absolute top-[252px] left-[65px] h-[17px] font-IBM font-[700] text-[13px] leading-[17px] text-[#212529] md:top-[360px] '>{username}</p>

                {/* views  */}
                <p className='absolute top-[269px] left-[65px] h-[16px] font-IBM font-[500] text-[12px] leading-[16px] text-[#495057] md:top-[355px] md:left-[360px] '>{views}</p>

                {/* share button  */}
                <button className='absolute w-[70px] h-[36px] top-[251px] left-[272px] bg-[#F1F3F5] rounded-[4px] md:top-[345px] md:w-[38px] md:left-[445px]'>
                    <div className='absolute top-[7.6px] left-[10.25px] w-[13.5px] h-[14.94px] text-[#212529] '><Image src={share_icon} alt='' /></div>
                    <p className='md:hidden absolute w-[32px] h-[16px] top-[10px] left-[30px] font-IBM font-[500] text-[12px] leading-[16px] text-[#212529] '>Share</p>
                </button>

            </div>
        </>
    )
}

export default Post