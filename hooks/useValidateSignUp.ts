"use client";
import { useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';
import { ErrorContext, SuccessContext } from 'better-auth/react';

const useValidateSignUp = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [pending, setPending] = useState<boolean>(false);
    const { data: session } = authClient.useSession();
    const signUpSchema = z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(1, "Password is required").nonempty("Password is required"),
        confirmPassword: z.string().min(1, "Password is required").nonempty("Password is required"),
    }).refine((data) => data.password === data.confirmPassword, {
        message: "Passwords don't match",
        path: ["confirmPassword"],
    });
    const handleSignOut = () => {
        authClient.signOut()
    }
    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
    });
    const handleSignUp = async (data: z.infer<typeof signUpSchema>) => {
        setError(null);
        setPending(true);
        await authClient.signUp.email({
            name: data?.name,
            email: data?.email,
            password: data?.password,
        }, {
            onSuccess: (ctx: SuccessContext) => {
                toast.success("User created successfully");
                router.push("/");
                console.log("Success context:", ctx);
                setPending(false);
            },
            onError: (error: ErrorContext) => {
                toast.remove();
                setError(error.error.message);
                toast.error(error.error.message);
            },
        })
    }

  return {
    handleSignUp,
    session,
    handleSignOut,
    form,
    error,
    pending,
  }
}

export default useValidateSignUp