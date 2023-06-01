import React, { useState } from 'react'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa"
import vector from "./assets/Vector.png"
import logo from "./assets/logo.png"
import slider from './assets/slider.png'
import petals from './assets/petals.png'

const Form: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isSubmit, setIsSubmit] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        setEmailError("");
        setPasswordError("");

        let isValid = true;

        if(!email){
            setEmailError("* Email is required");
            isValid = false;
        }else if(!validateEmail(email)){
            setEmailError("Please enter a valid email");
            isValid = false;
        }

        if(!password){
            setPasswordError("* Password is required");
            isValid = false;
        }else if(password.length <= 4){
            setPasswordError("Password must be more than 4 characters")
            isValid = false;
        }

        if(isValid){
            setEmail("")
            setPassword("");
            setIsSubmit(true);
        }
    }

    const validateEmail = (value: string):boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        return emailRegex.test(value);
    }

  return (
    <div className='flex w-full min-h-screen px-5 py-7'>
        <section className='px-8 py-9 flex flex-col justify-between bg-main bg-cover bg-no-repeat w-1/2 rounded-[35px]'>
            <div className="flex-1 cursor-pointer"><img src={logo} alt=""/></div>
            <div className="caption mb-[150px] text-white tracking-wide">
                <h1 className='text-[48px] font-semibold'>100%  Uptime😎</h1>
                <span className='text-[#BFBFBF] text-[36px]'>Zero Infrastructure <br /> Management</span>
                <img src={slider} alt=""  className='mt-8 cursor-pointer'/>
            </div>
            <div className="links flex items-center justify-between text-xl text-[#BFBFBF] ">
            <div className="flex items-center gap-0.5 cursor-pointer">
                <img src={vector} alt="" />
                <a href="https://aesthisia.com/" target='blank'>aesthisia.com</a>
            </div>
            <div className="socials flex gap-2 text-white">
                <a href="https://www.linkedin.com/company/aesthisia/" target='blank'><FaLinkedinIn/></a>
                <a href="https://www.facebook.com/aesthisia/" target='blank'><FaFacebookF/></a>
                <a href="https://www.instagram.com/aesthisia/" target='blank'><FaInstagram/></a>
            </div>
            </div>
        </section>
        <section className='right w-1/2 grid place-content-center'>
           <div className='h-[500px] flex flex-col items-center justify-between'>
             <div className='flex flex-col items-center justify-around'>
                <div className="petals w-[61px] h-[49px] "><img src={petals} alt="" /></div>
                <h2 className='text-[45px] font-[500]'>
                    Welcome <span className='text-[#08A593] '>Back!</span>
                </h2>
                <span className='font-[inter] text-[18px] text-[#667085]'>Glad to see you, Again!</span>
             </div>

             {!isSubmit? (
                <>
                <form
                onSubmit={handleSubmit}  
                className='font-[inter] relative flex flex-col items-center justify-even gap-7'>
                   <div>
                       <input 
                       className='border outline-slate-300 h-[55px] w-[440px] rounded-xl pl-5 placeholder:text-[14px]' 
                    //    type="email"
                       name='email' 
                       placeholder='Enter your email' 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       />
                       {emailError && <p className="text-red-500">{emailError}</p>}
                   </div>
                   <div>
                       <input 
                       className='border outline-slate-300 h-[55px] w-[440px] rounded-xl pl-5 placeholder:text-[14px]' 
                       type="password" 
                       name='password' 
                       placeholder='Enter your password' 
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                       />
                       {passwordError && <p className="text-red-500">{passwordError}</p>}
                   </div>
   
                   <a className='absolute bottom-[100px] right-2 text-[14px] text-[#667085] ' href="#">Forgot password?</a>
                   <button className='mt-10 bg-black text-white w-[440px] h-[60px] rounded-xl '>Log In</button>
                </form>
   
                <span className='font-[inter] text-[16px] text-[#667085] font-thin '>Don't have an account yet? <a className='text-[#08A593]' href="#">Sign Up</a></span>
                </>
             ) : (<p className='text-[#08A593] text-3xl absolute top-[50%]'>Signed In Successfully</p>)}
           </div>
        </section>
    </div>
  )
}

export default Form