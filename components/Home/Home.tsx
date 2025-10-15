"use client";
import React from "react";
import { Button} from "../../shared";
import { useValidateSignUp } from "../../hooks";
import SignUp from "../AuthenticationPages/SignUp/SignUp";

const Home = () => {
    const { session, handleSignOut } = useValidateSignUp();
    if (session) {
        return (
            <section className="font-sans gap-6 flex flex-col items-center min-h-screen p-8 pb-20 sm:p-20">
                <h1 className="text-2xl font-bold">Welcome back, {session?.user?.name}!</h1>
                <Button onClick={handleSignOut}
                    className='bg-green-600 w-[250px] h-12 rounded-[5rem] text-white px-4 py-2 
                        cursor-pointer hover:bg-green-500'
                >
                    Sign Out
                </Button>
            </section>
        );
    }
    
  return <SignUp />
}

export default Home