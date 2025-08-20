import React from 'react';
import { authClient } from '../lib/auth-client';
import toast from 'react-hot-toast';
import { ErrorContext, RequestContext, SuccessContext } from 'better-auth/react';

interface useValidateSignUpProps {
    name: string;
    email: string;
    password: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const useValidateSignUp = ({ name, email, password, setName, setEmail, setPassword }: useValidateSignUpProps) => {
  const { data: session, isPending } = authClient.useSession();
  const handleSignOut = () => {
    authClient.signOut()
  }
//   const signOut = authClient.signOut();
    const handleSignUp = async () => {
        await authClient.signUp.email({
            name,
            email,
            password
        }, {
            onRequest: (ctx: RequestContext) => {
                // toast.loading("Creating user...");
                toast.remove();
                console.log("Request context:", ctx);
            },
            onSuccess: (ctx: SuccessContext) => {
                toast.success("User created successfully");
                console.log("Success context:", ctx);
                setName("");
                setEmail("");
                setPassword("");
            },
            onError: (ctx: ErrorContext) => {
                toast.error(ctx?.error?.message);
                toast.remove();
            },
        })
    }
    const handleLogin = async () => {
        await authClient.signIn.email({
            email,
            password
        }, {
            onRequest: (ctx: RequestContext) => {
                console.log("Request context:", ctx);
                // toast.loading("Logging in...");
                toast.remove();
            },
            onSuccess: (ctx: SuccessContext) => {
                console.log("Success context:", ctx);
                toast.success("Login successful");
                setEmail("");
                setPassword("");
            },
            onError: (ctx: ErrorContext) => {
                toast.error(ctx?.error?.message);
                toast.remove();
            },
        })
    }

  return {
    handleSignUp,
    handleLogin,
    session,
    // signOut,
    handleSignOut,
    isPending,
  }
}

export default useValidateSignUp