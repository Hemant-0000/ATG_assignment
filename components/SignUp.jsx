import React from 'react'
import Image from 'next/image'
import cut_icon from '../public/assets/cut_icon.svg'
import Line from '../public/assets/Line.svg'
import facebook from '../public/assets/facebook.png'
import google from '../public/assets/google.png'
import Link from 'next/link'

function Signup() {
    return (
        <>
            <div className='create-account w-[360px] h-[462px] absolute top-[178px] bg-white '>
                <h1 className='w-[130px] h-[23px] absolute top-[22px] left-[20px] font-IBM font-[700] text-[18px] leading-[23px] text-black '>Create Account</h1>
                <Link href={'/'}><div className='cursor-pointer absolute top-[24px] left-[318px] '><Image src={cut_icon} alt='' /></div></Link>

                {/* Form  */}
                <div className='absolute top-[65px] left-[20px] w-[320px] h-[40px] bg-[#F7F8FA] box-border border-[1px] border-solid border-[#D9D9DB] rounded-t-[2px] rounded-b-[2px] '>

                    {/* First Name  */}
                    <input className='absolute top-[12px] left-[12px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none ' placeholder='First Name' type="text" />

                    {/* Line  */}
                    <div className='absolute left-[160px] top-[0px] '><Image src={Line} alt='' /></div>

                    {/* Last Name  */}
                    <input className='absolute top-[12px] left-[172px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none' placeholder='Last Name' type="text" />

                    {/* Email  */}
                    <input className='absolute w-[320px] h-[40px] top-[37.7px] left-[-1px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[12px]' placeholder='Email' type="email" />

                    {/* Password  */}
                    <input className='absolute w-[320px] h-[40px] top-[75.4px] left-[-1px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[12px]' placeholder='Password' type="password" />

                    {/* Confirm Password  */}
                    <input className='absolute w-[320px] h-[40px] top-[113.1px] left-[-1px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[12px]' placeholder='Confirm Password' type="password" />
                </div>

                <button className='w-[150px] h-[36px] absolute top-[244px] left-[20px] rounded-[20px] font-IBM font-[600] text-[13px] leading-[16px] text-center text-white bg-[#2F6CE5]'>Create Account</button>

                <Link href={'/sign-in'}>
                    <p className='w-[60px] h-[17px] absolute top-[253px] left-[280px] font-IBM font-[600] text-[13px] leading-[17px] text-center text-[#495057] underline cursor-pointer'>or, Sign In</p>
                </Link>

                {/* Sign up with Facebook  */}
                <div className='cursor-pointer w-[320px] h-[38px] absolute top-[302px] left-[20px] rounded-[2px] box-border bg-white border-[0.6px] border-solid border-[#D9D9DB]  '>
                    <div className='absolute top-[8px] left-[82px]  '><Image src={facebook} alt='' />
                        <p className='w-[131px] h-[16px] absolute top-[1.8px] left-[28px] font-IBM font-[400] text-[13px] leading-[16px] text-black cursor-pointer'>Sign up with Facebook</p>
                    </div>
                </div>

                {/* Sign up with Google  */}
                <div className='cursor-pointer w-[320px] h-[38px] absolute top-[352px] left-[20px] rounded-[2px] box-border bg-white border-[0.6px] border-solid border-[#D9D9DB]  '>
                    <div className='absolute top-[8px] left-[82px] w-[16px] h-[16px] '><Image src={google} alt='' />
                        <p className='w-[131px] h-[16px] absolute top-[1.8px] left-[28px] font-IBM font-[400] text-[13px] leading-[16px] text-black cursor-pointer'>Sign up with Google</p>
                    </div>
                </div>

                {/* Conditions & Terms  */}
                <p className='absolute top-[421px] left-[57px] w-[240px] h-[32px] font-IBM font-[400] text-[11px] leading-[16px] text-center text-[#212529] tracking-[-0.008em] '>By signing up, you agree to our Terms & conditions, Privacy policy</p>

            </div>
        </>
    )
}

export default Signup