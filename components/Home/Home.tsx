"use client";
import React, { useState } from "react";
import { Button, Input } from "../../shared";
// import { authClient } from "../../lib/auth-client";
// import toast from "react-hot-toast";
import { useValidateSignUp } from "../../hooks";

const Home = () => {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { handleSignUp, session, handleSignOut, handleLogin } = useValidateSignUp({ name, email, password, setName, setEmail, setPassword });
    if (session) {
        return (
            <section className="font-sans gap-6 flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20">
                <h1 className="text-2xl font-bold">Welcome back, {session?.user?.name}!</h1>
                <Button onClick={handleSignOut}
                    className='bg-blue-500 w-[250px] h-16 rounded-[5rem] text-white px-4 py-2 
                        cursor-pointer hover:bg-blue-600'
                >
                    Sign Out
                </Button>
            </section>
        );
    }
    console.log("Session data:", session);
    
  return (
    <section className="font-sans gap-6 flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20">
        <>
            <h1 className="text-2xl font-bold">Create a new user</h1>
            <Input placeholder="Enter your name" value={name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <Input placeholder="Enter your email" value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <Input placeholder="Enter password" type="password" value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <Button onClick={handleSignUp}
                className='bg-blue-500 w-[250px] h-16 rounded-[5rem] text-white px-4 py-2 
                    cursor-pointer hover:bg-blue-600'
            >
                Create user
            </Button>
        </>
        <>
            <h1 className="text-2xl font-bold">Login</h1>
            <Input placeholder="Enter your email" value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
            <Input placeholder="Enter password" type="password" value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
            />
            <Button onClick={handleLogin}
                className='bg-blue-500 w-[250px] h-16 rounded-[5rem] text-white px-4 py-2 
                    cursor-pointer hover:bg-blue-600'
            >
                Login
            </Button>
        </>
    </section>
  )
}

export default Home