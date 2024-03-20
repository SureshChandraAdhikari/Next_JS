"use client"
import Link from "next/link"
import React from "react"
import { useRouter } from "next/navigation"
import { Axios } from "axios"


export default function LoginPage() {
    const [user, setUser] = React.useState({
        email: "",
        password: "",
        
    })

    const onLogin = async () => {

    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-center text-white text-2xl m-2 text-decoration-line-underline"> SignUp
            </h1>
            <hr />
            
            <label className="text-xl text-center text-green-400 m-1" htmlFor="Email">Email</label>
            <input className="p-4 border border-gray-600" id="email" type="text" placeholder="Enter Your Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            <label className="text-xl text-center text-green-400 m-1" htmlFor="Email">Password</label>
            <input className="p-4 border border-gray-600" id="password" type="text" placeholder="Enter Your Password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            <button className="m-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"onClick={onLogin} >
<span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Login Here
</span>

</button><Link href="/signup">Visit SignUp Page</Link>
        </div>
    )
}