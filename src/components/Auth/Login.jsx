import React, { useState } from 'react'

const Login = ({handleLogin}) => {

    

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const submitHandler = (e)=>{
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className=" rounded-xl  p-16 bg-[#34a9e4] bg-opacity-25 shadow-2xl">
        <h1 className="text-blue-400 font-extrabold text-3xl text-center mb-4">Login</h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none bg-[#172554]  border-1 border-[#0284c7] font-medium text-lg py-2 px-6 rounded-2xl placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none bg-[#172554] border-1 border-[#0284c7] font-medium text-lg py-2 px-6 rounded-2xl mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-7 text-white border-none outline-none hover:bg-[#1867de] font-semibold bg-[#0284c7] text-lg py-2 px-8 w-full rounded-2xl placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login