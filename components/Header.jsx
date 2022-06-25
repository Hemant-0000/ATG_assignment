import React from 'react'
import Image from 'next/image'
import back_arrow from '../public/assets/back_arrow.svg'
import filter_dropdown from '../public/assets/filter_dropdown.svg'
import join_group from '../public/assets/join_group.svg'
import Navbar from './Navbar'

function Header({ setOnSignUp, onSignUp, onSignIn }) {

    return (
        <>

            <div className='hidden md:inline-flex'><Navbar /></div>

            <div id='header' className={`header ${(onSignUp || onSignIn) ? 'backdrop-blur-sm' : ''} w-[360px] h-[236px] mb-[66px] bg-[url('../public/assets/cardimage/headerbg.png')] bg-no-repeat bg-cover w-full xl:h-[440px] `}>

                {/* Back Arrow  */}
                <div className='absolute w-[16px] h-[16px] left-[20px] top-[20px] text-white md:hidden '><Image src={back_arrow} alt='' /></div>

                {/* Join Group  */}
                <div onClick={() => setOnSignUp(true)} className='cursor-pointer w-[76px] h-[28px] absolute top-[14px] left-[266px] rounded-[4px] text-white box-border border-[0.8px] border-solid border-white sm:left-[550px] md:hidden'><span className='absolute w-[60px] h-[16px] top-[6px] left-[8px] font-[600] text-[12px] leading-[16px] text-white font-IBM'>Join Group</span></div>


                {/* Computer Engineering  */}
                <h3 className='absolute top-[164px] left-[16px] w-[179px] h-[22px] font-[800] font-IBM text-[17px] leading-[22.1px] text-white sm:left-[30px] sm:text-[19px] sm:w-[200px]  md:left-[80px] md:text-[22px] md:w-[250px] md:top-[236px] xl:top-[358px] xl:text-[36px] xl:leading-[47px] xl:w-[378px] '>Computer Engineering</h3>
                <p className='w-[218px] h-[16px] absolute top-[188px] left-[16px] font-IBM font-[400] text-[12px] leading-[16px] text-white sm:left-[30px] sm:top-[190px] sm:text-[13px] sm:w-[280px] md:left-[80px] md:text-[12px] md:leading-[10px] md:top-[268px] mb-[32px] xl:top-[409px] xl:text-[18px] xl:leading-[23px] xl:w-[327px] '>142,765 Computer Engineers follow this</p>

                <div className='md:hidden'>
                    {/* Posts(368) */}
                    <p className='w-[73px] h-[18px] absolute top-[258px] left-[16px] font-IBM font-[900] text-[14px] leading-[18px] text-[#212529] tracking-[0.01em] sm:left-[30px]'>Posts(368)</p>

                    {/* Filter button  */}
                    <button className='w-[106px] h-[32px] absolute top-[250px] left-[236px] rounded-[4px] bg-[#F1F3F5] sm:left-[500px]'><span className='absolute top-[8px] left-[10px] w-[55px] h-[17px] font-IBM font-[700] text-[13px] leading-[17px] text-[#212529] '>Filter: All</span>
                        <div className='absolute top-[1.8px] left-[81.83px]'><Image src={filter_dropdown} alt='' /></div>
                    </button>
                </div>


                {/* Other post section  */}
                <div className='hidden md:inline-flex md:absolute md:top-[80px] md:mx-auto '>

                    {/* All Posts(32) */}
                    <p className='w-[93px] h-[21px] absolute top-[258px] ml-[50px] font-IBM font-[600] text-[16px] leading-[21px] text-[#000000] lg:ml-[140px] xl:top-[487px] '>All Posts(32)</p>

                    {/* Article */}
                    <p className='w-[47px] h-[21px] absolute top-[258px] ml-[163px] font-IBM font-[400] text-[16px] leading-[21px] text-[#8A8A8A] lg:ml-[253px] xl:top-[487px] '>Article</p>

                    {/* Events */}
                    <p className='w-[41px] h-[21px] absolute top-[258px] ml-[230px] font-IBM font-[400] text-[16px] leading-[21px] text-[#8A8A8A] lg:ml-[320px] xl:top-[487px] '>Event</p>


                    {/* Education */}
                    <p className='w-[41px] h-[21px] absolute top-[258px] ml-[291px] font-IBM font-[400] text-[16px] leading-[21px] text-[#8A8A8A] lg:ml-[381px] xl:top-[487px] '>Education</p>


                    {/* Job */}
                    <p className='w-[41px] h-[21px] absolute top-[258px] ml-[380px] font-IBM font-[400] text-[16px] leading-[21px] text-[#8A8A8A] lg:ml-[470px] xl:top-[487px] '>Job</p>


                    {/* Write a Post  */}
                    <button className='w-[133px] h-[36px] absolute top-[250px] ml-[490px] rounded-[4px] bg-[#EDEEF0] lg:ml-[580px] xl:top-[478px] xl:left-[400px] '>
                        <span className='absolute top-[8px] left-[12px] w-[83px] h-[20px] font-IBM font-[700] text-[15px] leading-[20px] text-black '>Write a Post</span>
                        <div className='absolute top-[2.5px] left-[111.42px]'><Image src={filter_dropdown} alt='' /></div>
                    </button>

                    {/* Join Group  */}
                    <button className='w-[125px] h-[36px] absolute top-[250px] ml-[630px] bg-[#2F6CE5] rounded-[4px] lg:ml-[720px] xl:top-[478px] xl:left-[410px] '>
                        <div className='w-[22px] h-[11.92px] absolute top-[5.5px] left-[10px]  '><Image src={join_group} alt=''/></div>
                        <span className='w-[75px] h-[20px] absolute left-[38px] top-[8px] font-IBM font-[700] text-[15px] leading-[20px] text-white '>Join Group</span>
                    </button>

                    {/* Partition Line  */}
                    <div className='w-[705.2px] mt-[12px] h-0 absolute top-[290px] ml-[50px] border-[1px] border-solid bg-[#E0E0E0] border-[#E0E0E0] lg:ml-[140px] xl:top-[528px] xl:w-[1113.5px] '></div>

                    {/* Underline */}
                    <div className='w-[93px] h-0 absolute mt-[12px] top-[290px] ml-[50px] border-[1px] border-solid bg-black border-black lg:ml-[140px] xl:top-[528px] '></div>

                </div>

            </div>

        </>
    )
}

export default Header