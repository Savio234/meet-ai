"use client";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { authClient } from "../lib/auth-client";
import { useRouter } from "next/navigation";
import { ErrorContext, SuccessContext } from "better-auth/react";
import toast from "react-hot-toast";

const useValidateLogin = () => {
    const router = useRouter();
    const [error, setError] = useState<string | null>(null);
    const [pending, setPending] = useState<boolean>(false);
    const { data: session } = authClient.useSession();
    const loginSchema = z.object({
        email: z.string().email("Invalid email address").nonempty("Email is required"),
        password: z.string().min(1, "Password must be at least 1 characters").nonempty("Password is required"),
    });
    // const {
    //     register,
    //     handleSubmit,
    //     formState: { errors },
    //     reset,
    //     resetField,
    // } = useForm<z.infer<typeof loginSchema>>({
    //     resolver: zodResolver(loginSchema),
    //     defaultValues: {
    //         email: "",
    //         password: "",
    //     },
    // });

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });
    const handleLogin = async (data: z.infer<typeof loginSchema>) => {
        setError(null);
        setPending(true);
        authClient.signIn.email({
            email: data?.email,
            password: data?.password,
        }, {
            onSuccess: (ctx: SuccessContext) => {
                toast.success("Login successful");
                router.push("/");
                console.log("Login successful:", ctx.data);
                setPending(false);
                console.log("Session:", session);
            },
            onError: (error: ErrorContext) => {
                setError(error.error.message);
                toast.error(error.error.message);
            }
        })
    };
    const handleGithubLogin = () => {
        setPending(true);
        authClient.signIn.social({
            provider: "github",
            callbackURL: '/',
        }, 
        {
            onSuccess: (ctx: SuccessContext) => {
                console.log("Login successful:", ctx.data);
                setPending(false);
            },
            onError: (error: ErrorContext) => {
                setError(error.error.message);
                toast.error(error.error.message);
            }
        }
        )
    }
    const handleGoogleLogin = () => {
        setPending(true);
        authClient.signIn.social({
            provider: "google",
            callbackURL: '/',
        },
        {
            onSuccess: (ctx: SuccessContext) => {
                console.log("Login successful:", ctx.data);
                setPending(false);
            },
            onError: (error: ErrorContext) => {
                setError(error.error.message);
                toast.error(error.error.message);
            }
        })
    }
  return {
    form,
    handleLogin,
    error,
    pending,
    handleGithubLogin,
    handleGoogleLogin,
  }
}

export default useValidateLogin