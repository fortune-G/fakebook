import React, { useState } from 'react'
import { FacebookTitle, ImageCreate, Support01, Support02, Support03, Support04, Support05, Support06, Support07, Support08, Support09 } from '../icons'
import axios from 'axios'
import CreateNewAccount from './CreateNewAccount'
import Supporter from '../component/Supporter'



const Login = () => { 
    const[input,setInput] = useState({
        identity : '', 
        password : '',
    }) 

    const hdlChange = e =>{
        setInput(prev =>({...prev, [e.target.name]: e.target.value}))
    } 
    const hdlLogin = async e =>{
        try {
            e.preventDefault()
        if(!(input.identity.trim()&& input.password.trim())){   //validate ข้อมูลที่กรอกตรง login , pass
            return alert('Pls fill all input')
        }
        const rs = await axios.post('http://localhost:8001/auth/login',input)
        console.log(rs.data)
        } catch (error) { 
            const errorMsg = error.response?.data?.error || error.message
            console.log(errorMsg)
        }
    }

  return (
    <div className='flex flex-col '>
    <div className="h-[700px] pt-20 pb-28 bg-[#f2f4f7] ">
			<div className="p-5 mx-auto max-w-screen-lg min-h-[540px] flex justify-center items-start">
				<div className="flex flex-col gap-4 mt-20 basis-3/5 ">
                <FacebookTitle className='ms-8 w-80'/>
					<h2 className='text-[30px] leading-10 -mt-6 w-[514px] '>
						Fakebook helps you connect and share with the people in your life.
					</h2>
                    <p className='text-sm text-error font-extralight'>***this is fakebook!!</p>
				</div>
				<div className="flex flex-1">
					<div className="card bg-base-100 w-full h-[350px] shadow-xl mt-8">
                        <form onSubmit={hdlLogin}>
						<div className="card-body gap-3 p-3">
                        <input name='identity' value={input.identity} onChange={hdlChange} type="text" placeholder="E-mail or PhoneNumber" className="input input-bordered w-full " />
                        <input name='password' value={input.password} onChange={hdlChange} type="password" placeholder="Password" className="input input-bordered w-full " />
                        <button className="btn btn-warning text-white">LOGIN</button>
                        <p className='opacity-70 text-center cursor-pointer font-extralight'>forgetten password</p>
                        <div className="divider divider-neutral  mt-0"></div> 
                        <button type='button' onClick={()=>document.getElementById('register_modal').showModal()} className="btn btn-outline btn-success  flex text-center mx-auto w-fit">Create new Account</button>
						</div> 
                        </form>
					</div>
				</div>
			</div>

	</div> 
    <dialog id="register_modal" className="modal">
    <div className="modal-box">
        {/* if there is a button in form, it will close the modal */}
        <button type='button' onClick={e=>e.target.closest('dialog').close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <CreateNewAccount/>
    </div>
    </dialog>  
    <Supporter/>                                                                         
  </div>
  )
}

export default Login
