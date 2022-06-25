import React from 'react'
import Image from 'next/image'
import cut_icon from '../public/assets/cut_icon.svg'
import cross2 from '../public/assets/cross2.svg'
import facebook from '../public/assets/facebook.png'
import google from '../public/assets/google.png'
import signup_login from '../public/assets/signup_login.jpg'

function SignIn({ setOnSignIn, setOnSignUp }) {
    return (
        <>

            {/* for small devices  */}
            <div className='md:hidden create-account z-50 w-[360px] h-screen transition duration-[1000ms] translate-y-[-15px] absolute top-[178px] bg-white '>
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



            {/* for medium & above devices */}
            <div className='hidden md:inline-flex w-[736px] h-[513px] absolute top-[186px] left-[15px] rounded-[8px] bg-white shadow-acc-shadow '>

                {/* cut icon  */}
                <div onClick={() => setOnSignIn(false)} className='cursor-pointer absolute top-[-38px] left-[710px] '>
                    <Image src={cross2} alt=''/>
                </div>

                {/* something written */}
                <div className='w-[736px] h-[50px] absolute bg-[#EFFFF4] rounded-tl-[8px] rounded-tr-[8px] '>
                    <p className='w-[619px] h-[16px] absolute top-[17px] left-[59px] font-IBM font-[600] text-[14px] leading-[16px] text-center text-[#008A45]  ' >Let&#8217;s learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</p>
                </div>

                {/* Sign In */}
                <h1 className='w-[130px] h-[23px] absolute top-[74px] left-[36px] font-IBM font-[900] text-[18px] leading-[23px] text-black '>Sign In</h1>


                {/* Email  */}
                <input className='absolute w-[320px] h-[46px] top-[174px] left-[36px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[15px]' placeholder='Email' type="email" />

                {/* Password  */}
                <input className='absolute w-[320px] h-[46px] top-[219px] left-[36px] text-[#8A8A8A] font-IBM font-[500] text-[13px] leading-[16px] bg-[#F7F8FA] outline-none box-border border-[1px] border-solid border-[#D9D9DB] p-[15px]' placeholder='Password' type="password" />

                {/* Sign in Button  */}
                <button className='w-[320px] h-[40px] absolute top-[329px] left-[36px] rounded-[20px] font-IBM font-[600] text-[13px] leading-[16px] text-center text-white bg-[#2F6CE5]'>Sign In</button>

                {/* Don’t have an account yet? Create new for free!  */}
                <p onClick={async () => { await setOnSignIn(false), await setOnSignUp(true) }} className='w-[196px] h-[17px] absolute top-[81px] left-[505px] font-IBM font-[500] text-[13px] leading-[17px] text-center text-[#495057] underline cursor-pointer'>Don’t have an account yet?  <span className='text-[#2F6CE5] font-[900] '>Create new for free!</span></p>

                {/* Sign in with Facebook  */}
                <div className='cursor-pointer w-[320px] h-[38px] absolute top-[393px] left-[36px] rounded-[2px] box-border bg-white border-[0.6px] border-solid border-[#D9D9DB]  '>
                    <div className='absolute top-[8px] left-[82px]  '><Image src={facebook} alt='' />
                        <p className='w-[131px] h-[16px] absolute top-[1.8px] left-[28px] font-IBM font-[400] text-[13px] leading-[16px] text-black cursor-pointer'>Sign in with Facebook</p>
                    </div>
                </div>

                {/* Sign in with Google  */}
                <div className='cursor-pointer w-[320px] h-[38px] absolute top-[439px] left-[36px] rounded-[2px] box-border bg-white border-[0.6px] border-solid border-[#D9D9DB]  '>
                    <div className='absolute top-[8px] left-[82px] w-[16px] h-[16px] '><Image src={google} alt='' />
                        <p className='w-[131px] h-[16px] absolute top-[1.8px] left-[28px] font-IBM font-[400] text-[13px] leading-[16px] text-black cursor-pointer'>Sign in with Google</p>
                    </div>
                </div>

                {/* forgot password  */}
                <p className='w-[317px] h-[16px] absolute top-[410px] left-[35px] font-IBM font-[600] text-[12px] leading-[16px] text-center tracking-[-0.008em] text-black '>Forgot Password?</p>

                {/* Image  */}
                <div className='w-[300px]  absolute top-[150px] left-[420px]  '>
                    <Image className='rounded-xl' src={signup_login} alt='' />
                </div>


            </div>

        </>
    )
}

export default SignIn