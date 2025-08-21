"use client";
import React from "react";
import { Card, CardContent, Input, Button, Form, FormControl, FormLabel,
    FormMessage, FormField, FormItem, Alert, AlertTitle
} from "../../../shared";
import { OctagonAlertIcon } from "lucide-react";
import { useValidateLogin } from "../../../hooks";
import Link from "next/link";
import Image from "next/image";

const Login = () => {
    const { form, handleLogin, error, pending } = useValidateLogin();
  return (
    <div className="flex flex-col gap-6">
        <Card className="overflow-hidden p-0">
            <CardContent className="grid p-0 md:grid-cols-2">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleLogin)} className="p-4 md:p-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col items-center text-center">
                                <h1 className="text-2xl font-bold">Welcome Back</h1>
                                <p className="text-muted-foreground text-balance">
                                    Login to your account to continue
                                </p>
                            </div>
                            <div className="grid gap-4">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email</FormLabel>
                                            <FormControl>
                                                <Input type="email" placeholder="m@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}     
                                />
                            </div>
                            <div className="grid gap-4">
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" placeholder="********" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}     
                                />
                            </div>
                            {error && (
                                <Alert variant="destructive" className="bg-destructive/10 border-none">
                                    <OctagonAlertIcon className="h-4 w-4 !text-destructive" />
                                    <AlertTitle>{error}</AlertTitle>
                                </Alert>
                            )}
                            <Button disabled={pending} className="w-full h-[2.8rem] md:h-[3.5rem] bg-green-700 font-black" type="submit">
                                Login
                            </Button>
                            <div className="after:border-border relative text-center text-sm after:absolute
                                after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center 
                                after:border-t"
                            >
                                <span className="relative z-10 bg-card text-muted-foreground px-2">
                                    Or continue with
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <Button disabled={pending} variant="outline" type="button" className="w-full">
                                    {/* <Image src="/svgs/google.svg" alt="Google" width={20} height={20} /> */}
                                    Google
                                </Button>
                                <Button disabled={pending} variant="outline" type="button" className="w-full">
                                    {/* <Image src="/svgs/github.svg" alt="GitHub" width={20} height={20} /> */}
                                    GitHub
                                </Button>
                            </div>
                            <div className="text-center text-sm">
                                Don&apos;t have an account?{" "}
                                <Link href="/sign-up" className="underline underline-offset-4">
                                    Sign Up
                                </Link>
                            </div>
                            <p className="text-muted-foreground text-center">
                                By logging in, you agree to our{" "}
                                <Link href="/terms" className="text-blue-500 hover:underline">
                                    Terms of Service
                                </Link>{" "}
                                and{" "}
                                <Link href="/privacy" className="text-blue-500 hover:underline">
                                    Privacy Policy
                                </Link>
                            </p>
                        </div>
                    </form>
                </Form>
                <div className="bg-radial from-green-700 to-green-900 relative hidden 
                    md:flex flex-col gap-y-4 items-center justify-center"
                >
                    <div className="relative w-[6rem] h-[6rem]">
                        <Image src="/svgs/logo.svg" alt="Logo" fill />
                    </div>
                    <p className="text-2xl font-semibold text-white">
                        Meet.AI
                    </p>
                </div>
            </CardContent>
        </Card>
        <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance 
            *:[a]:underline *:[a]:underline-offset-4"
        >
            {/* <p> */}
                By clicking continue, you agree to our{" "}
                <Link href="/terms" className="text-blue-500 hover:underline">
                    Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-500 hover:underline">
                    Privacy Policy
                </Link>
            {/* </p> */}
        </div>
        <div className="text-center text-sm text-muted-foreground">
            <p>
                &copy; {new Date().getFullYear()} Meet.AI. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Login