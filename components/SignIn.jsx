import React from 'react'
import Image from 'next/image'
import cut_icon from '../public/assets/cut_icon.svg'
import facebook from '../public/assets/facebook.png'
import google from '../public/assets/google.png'

function SignIn({ setOnSignIn, setOnSignUp }) {
    return (
        <>
            <div className='create-account z-50 w-[360px] h-screen transition duration-[1000ms] translate-y-[-15px] absolute top-[178px] bg-white '>
                <h1 className='w-[130px] h-[23px] absolute top-[22px] left-[20px] font-IBM font-[700] text-[18px] leading-[23px] text-black '>Welcome back!</h1>
                <div onClick={() => setOnSignIn(false)} className='cursor-pointer absolute top-[24px] left-[318px] '><Image src={cut_icon} alt='' /></div>

                <div className='absolute border-[#D9D9DB] rounded-t-[2px] rounded-b-[2px]'>

                    {/* Email  */}
                    <input className='absolute w-[320px] h-[40px] top-[65px] left-[20px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[12px]' placeholder='Email' type="email" />

                    {/* Password  */}
                    <input className='absolute w-[320px] h-[40px] top-[104px] left-[20px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[12px]' placeholder='Password' type="password" />
                </div>


                {/* Sign in  */}
                <button className='w-[150px] h-[36px] absolute top-[166px] left-[20px] rounded-[20px] font-IBM font-[600] text-[13px] leading-[16px] text-center text-white bg-[#2F6CE5]'>Sign In</button>

                {/* or, Create Acc  */}
                <p onClick={async () => { await setOnSignIn(false), await setOnSignUp(true) }} className='w-[110px] h-[17px] absolute top-[175px] left-[230px] font-IBM font-[600] text-[13px] leading-[17px] text-center text-[#495057] underline cursor-pointer'>or, Create Account</p>


                {/* Sign up with Facebook  */}
                <div className='cursor-pointer w-[320px] h-[38px] absolute top-[224px] left-[20px] rounded-[2px] box-border bg-white border-[0.6px] border-solid border-[#D9D9DB]  '>
                    <div className='absolute top-[8px] left-[82px]  '><Image src={facebook} alt='' />
                        <p className='w-[131px] h-[16px] absolute top-[1.8px] left-[28px] font-IBM font-[400] text-[13px] leading-[16px] text-black cursor-pointer'>Sign in with Facebook</p>
                    </div>
                </div>

                {/* Sign up with Google  */}
                <div className='cursor-pointer w-[320px] h-[38px] absolute top-[274px] left-[20px] rounded-[2px] box-border bg-white border-[0.6px] border-solid border-[#D9D9DB]  '>
                    <div className='absolute top-[8px] left-[82px] w-[16px] h-[16px] '><Image src={google} alt='' />
                        <p className='w-[131px] h-[16px] absolute top-[1.8px] left-[28px] font-IBM font-[400] text-[13px] leading-[16px] text-black cursor-pointer'>Sign in with Google</p>
                    </div>
                </div>

                {/* Conditions & Terms  */}
                <p className='cursor-pointer absolute top-[334px] left-[57px] w-[240px] h-[16px] font-IBM font-[600] text-[11px] leading-[16px] text-center text-[#212529] tracking-[-0.008em] '>Forgot Password?</p>

            </div>
        </>
    )
}

export default SignIn