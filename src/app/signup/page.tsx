"use client"
import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import statement
import axios from "axios";
import { Toaster, toast } from 'react-hot-toast';
import Link from "next/link";

export default function SignUpPage() {
  const router = useRouter(); // Now using useRouter for client-side routing

  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0 && user.username.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("SignUp success", response.data);
      router.push("/login");
      toast.success('Successfully SignUp!');
    } catch (error) {
      toast.error("SignUp Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <h1 className="text-center text-white text-2xl m-2 text-decoration-line-underline">
        {loading ? "Processing" : "SignUp"}
      </h1>
      <hr />
      <label
        className="text-xl text-center text-green-400 m-1"
        htmlFor="username"
      >
        UserName
      </label>
      <input
        className="p-4 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-gray-700 text-black"
        id="username"
        type="text"
        placeholder="Enter Your UserName"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <label className="text-xl text-center text-green-400 m-1" htmlFor="Email">
        Email
      </label>
      <input
        className="p-4 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-gray-700 text-black"
        id="email"
        type="text"
        placeholder="Enter Your Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
      />
      <label className="text-xl text-center text-green-400 m-1" htmlFor="Email">
        Password
      </label>
      <input
        className="p-4 border border-gray-600 rounded-lg mb-4 focus:outline-none focus:border-gray-700 text-black"
        id="password"
        type="text"
        placeholder="Enter Your Password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button
        className="m-2 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800"
        onClick={onSignUp}
        disabled={buttonDisabled}
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {buttonDisabled ? "Not SignUp" : "SignUp"}
        </span>
      </button>
      <Link href="/login">Visit Login Page</Link>
    </div>
  );
}

