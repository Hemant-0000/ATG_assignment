import React, { useState } from 'react'
import Image from 'next/image'
import cut_icon from '../public/assets/cut_icon.svg'
import cross2 from '../public/assets/cross2.svg'
import Line from '../public/assets/Line.svg'
import facebook from '../public/assets/facebook.png'
import google from '../public/assets/google.png'
import signup_login from '../public/assets/signup_login.jpg'
import eye from '../public/assets/eye.png'

function SignUp({ setOnSignUp, setOnSignIn }) {

    const [textType, setTextType] = useState('password')

    return (
        <>

            {/* for small devices  */}
            <div className='md:hidden create-account z-50 w-[360px] h-screen  translate-y-[-15px] absolute top-[178px] bg-white md:top-[24px] sm:left-[135px] left-2 '>

                {/* Heading  */}
                <h1 className='w-[130px] h-[23px] absolute top-[22px] left-[20px] font-IBM font-[700] text-[18px] leading-[23px] text-black '>Create Account</h1>

                {/* cut icon  */}
                <div onClick={() => setOnSignUp(false)} className='cursor-pointer absolute top-[24px] left-[318px] '><Image src={cut_icon} alt='' /></div>

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
                    <div className='absolute w-[320px] h-[40px] top-[75.4px] left-[-1px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[12px]'>
                        <input className='outline-none w-[250px] bg-[#F7F8FA]' placeholder='Password' type={textType} />
                        <div onClick={() => textType === 'password' ? setTextType('text') : setTextType('password')} className='w-[16.25px] h-[11.25px] absolute top-[10px] left-[284.75px] ' >
                            <Image className={`${textType === 'text' ? 'opacity-90' : 'opacity-50'}`} src={eye} alt='' />
                        </div>
                    </div>

                    {/* Confirm Password  */}
                    <input className='absolute w-[320px] h-[40px] top-[113.1px] left-[-1px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[12px]' placeholder='Confirm Password' type="password" />
                </div>

                {/* create acc button  */}
                <button className='w-[150px] h-[36px] absolute top-[244px] left-[20px] rounded-[20px] font-IBM font-[600] text-[13px] leading-[16px] text-center text-white bg-[#2F6CE5]'>Create Account</button>

                {/* or, Sign In  */}
                <p onClick={async () => { await setOnSignUp(false), await setOnSignIn(true) }} className='w-[60px] h-[17px] absolute top-[253px] left-[280px] font-IBM font-[600] text-[13px] leading-[17px] text-center text-[#495057] underline cursor-pointer'>or, Sign In</p>

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




            {/* for medium & above devices */}
            <div className='hidden md:inline-flex z-50 w-[736px] h-[513px] absolute top-[186px] left-[15px] rounded-[8px] bg-white shadow-acc-shadow lg:left-[150px] lg:top-[158px]  xl:left-[300px]  2xl:left-[358px] '>

                {/* cut icon  */}
                <div onClick={() => setOnSignUp(false)} className='cursor-pointer w-[23.33px] h-[23.33px] absolute top-[-38px] left-[710px] lg:left-[722px] opacity-60 '>
                    <Image src={cross2} alt='' />
                </div>

                {/* something written */}
                <div className='w-[736px] h-[50px] absolute bg-[#EFFFF4] rounded-tl-[8px] rounded-tr-[8px] '>
                    <p className='w-[619px] h-[16px] absolute top-[17px] left-[59px] font-IBM font-[600] text-[14px] leading-[16px] text-center text-[#008A45]  ' >Let&#8217;s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </div>

                {/* Create account */}
                <h1 className='w-[130px] h-[23px] absolute top-[74px] left-[36px] font-IBM font-[900] text-[18px] leading-[23px] text-black '>Create Account</h1>

                {/* First Name  */}
                <input className='absolute p-[15px] h-[46px] w-[160px] top-[129px] left-[36px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] ' placeholder='First Name' type="text" />

                {/* Last Name  */}
                <input className='absolute top-[129px] h-[46px] w-[160px]  p-[15px] left-[196px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB]' placeholder='Last Name' type="text" />

                {/* Email  */}
                <input className='absolute w-[320px] h-[46px] top-[174px] left-[36px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[15px]' placeholder='Email' type="email" />

                {/* Password  */}
                <div className='absolute w-[320px] h-[46px] top-[219px] left-[36px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] box-border border-[1px] border-solid border-[#D9D9DB] p-[15px]'>
                    <input className='outline-none w-[250px] bg-[#F7F8FA]' placeholder='Password' type={textType} />
                    <div onClick={() => textType === 'password' ? setTextType('text') : setTextType('password')} className='cursor-pointer w-[16.25px] h-[11.25px] absolute top-[12px] left-[284.75px]' >
                    <Image className={`${textType === 'text' ? 'opacity-90' : 'opacity-50'}`} src={eye} alt='' />
                    </div>
                </div>



                {/* Confirm Password  */}
                <input className='absolute w-[320px] h-[46px] top-[264px] left-[36px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[15px]' placeholder='Confirm Password' type="password" />

                {/* Create Acc Button  */}
                <button className='w-[320px] h-[40px] absolute top-[329px] left-[36px] rounded-[20px] font-IBM font-[600] text-[13px] leading-[16px] text-center text-white bg-[#2F6CE5]'>Create Account</button>

                {/* Already have an account? Sign In  */}
                <p onClick={async () => { await setOnSignUp(false), await setOnSignIn(true) }} className='w-[196px] h-[17px] absolute top-[81px] left-[505px] font-IBM font-[500] text-[13px] leading-[17px] text-center text-[#495057] underline cursor-pointer'>Already have an account? <span className='text-[#2F6CE5] font-[900] '>Sign In</span></p>

                {/* Sign up with Facebook  */}
                <div className='cursor-pointer w-[320px] h-[38px] absolute top-[393px] left-[36px] rounded-[2px] box-border bg-white border-[0.6px] border-solid border-[#D9D9DB]  '>
                    <div className='absolute top-[8px] left-[82px]  '><Image src={facebook} alt='' />
                        <p className='w-[131px] h-[16px] absolute top-[1.8px] left-[28px] font-IBM font-[400] text-[13px] leading-[16px] text-black cursor-pointer'>Sign up with Facebook</p>
                    </div>
                </div>

                {/* Sign up with Google  */}
                <div className='cursor-pointer w-[320px] h-[38px] absolute top-[439px] left-[36px] rounded-[2px] box-border bg-white border-[0.6px] border-solid border-[#D9D9DB]  '>
                    <div className='absolute top-[8px] left-[82px] w-[16px] h-[16px] '><Image src={google} alt='' />
                        <p className='w-[131px] h-[16px] absolute top-[1.8px] left-[28px] font-IBM font-[400] text-[13px] leading-[16px] text-black cursor-pointer'>Sign up with Google</p>
                    </div>
                </div>

                {/* Privacy Policy  */}
                <p className='w-[317px] h-[16px] absolute top-[461px] left-[383px] opacity-60 font-IBM font-[500] text-[11px] leading-[16px] text-black tracking-[-0.008em]  '>By signing up, you agree to our Terms & conditions, Privacy policy</p>

                <div className='w-[300px]  absolute top-[150px] left-[420px]  '>
                    <Image className='rounded-xl' src={signup_login} alt='' />
                </div>


            </div>

        </>
    )
}

export default SignUp