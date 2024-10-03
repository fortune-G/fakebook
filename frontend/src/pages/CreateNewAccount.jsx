import React, { useState } from 'react'
import axios from 'axios'

const CreateNewAccount = () => { 
const [input,setInput] = useState({
  firstname:'', 
  lastname : '', 
  identity: '',
	password: '',
	confirmPassword: '',
})
 
const hdlChange = e=>{
  setInput(prev =>({...prev,[e.target.name]:e.target.value}))
} 

const hdlRegister = e =>{
  try {
    e.preventDefault()
			//validation
			const rs = axios.post('http://localhost:8001/auth/register', input)
			console.log(rs.data) 

      setInput({   //setค่าตอน register ให้กลับมาไม่มีข้อมูล
				firstname: 'Fill your Firstname',
				lastname: 'Fill your lastname',
				identity: 'Fill your id',
				password: 'Fill your Password',
				confirmPassword: 'Fill your ConfirmPassword',
			})
      e.target.closest('dialog').close()
  } catch (error) {
    const errMsg = error.response?.data?.error || error.message
			console.log(errMsg)
  }
}


  return (
      <form onSubmit={hdlRegister} className='flex flex-col gap-3 p-4 pt-10' >
        <div className='flex gap-2'>
            <input name='firstname'
					  value={input.firstname}
					  onChange={hdlChange} type="text" placeholder='Firstname' className='input input-bordered w-full' />
            <input name='lastname'
					  value={input.lastname}
					  onChange={hdlChange} type="text" placeholder='Surname' className='input input-bordered w-full' />
        </div>
            <input name='identity'
				    value={input.identity}
				    onChange={hdlChange} type="text" placeholder='Email or phone number' className='input input-bordered w-full' />
            <input name='password'
				    value={input.password}
				    onChange={hdlChange} type="text " placeholder='New Password' className='input input-bordered w-full' />
            <input 
            name='confirmPassword'
            value={input.confirmPassword}
            onChange={hdlChange} type="text " placeholder='Confirm Password' className='input input-bordered w-full' />
        <button className='btn text-xl text-white bg-primary-content'>
            Sign Up
        </button>
      </form>
  )
}

export default CreateNewAccount
