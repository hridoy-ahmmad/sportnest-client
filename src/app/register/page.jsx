'use client'

import React from 'react'
import { Input, Button, Form, TextField, Label, FieldError, Description } from '@heroui/react'
import Link from 'next/link'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'
import { FcGoogle } from 'react-icons/fc'

const RegisterPage = () => {
    const router = useRouter()
    const handleRegister = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userInfo = Object.fromEntries(formData.entries())
        // console.log(userInfo);

        const { data, error } = await authClient.signUp.email({
            email: userInfo.email,
            password: userInfo.password,
            name: userInfo.name,
            image: userInfo.photo,
            rememberMe: true,
        });

        if (data?.user) {
            toast.success('Register successful', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            router.push('/')
        }
        else if (error) {
            toast.error(error.message, {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }


    }
    const handleGoogleLogin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });

        if (data) {
            toast.success('Login successful', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",

            })
            router.push('/')
        }else{
            toast.error('Google login failed', {
                position: "top-center",
                autoClose: 2000,        
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,

                progress: undefined,
                theme: "light",
            })
        }



    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 via-white to-blue-100 px-4">

            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-blue-100">

                <div className='mb-5'>
                    {/* Title */}
                    <h1 className="text-3xl font-black text-center text-gray-900">
                        Create <span className="text-sky-600">Account</span>
                    </h1>

                    <p className="text-center text-gray-500 text-sm mt-2">
                        Join SportNest and start booking facilities
                    </p>
                </div>

                {/* Form */}
                <Form onSubmit={handleRegister} className="flex w-96 flex-col gap-8">

                    {/* Name */}
                    <TextField
                        isRequired
                        name="name"
                        type='text'
                    >
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    {/* Email */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    {/* Photo URL */}
                    <TextField
                        isRequired
                        name="photo"
                        type='url'
                    >
                        <Label>Photo URL</Label>
                        <Input placeholder="Paste your photo URL" />
                        <FieldError />
                    </TextField>

                    {/* Password */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    {/* Submit */}
                    <div className="flex gap-2">
                        <Button type="submit" className="flex-1 bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold h-12 rounded-xl shadow-md hover:shadow-xl transition-all">
                            Submit
                        </Button>
                    </div>
                </Form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <p className="px-3 text-sm text-gray-400">OR</p>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Google Login */}
                <Button
                    onClick={handleGoogleLogin}
                    variant='outline'
                    className="w-full flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-xl hover:bg-gray-50 transition"
                >
                    <FcGoogle className="text-red-500" />
                    Continue with Google
                </Button>

                {/* Login link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{' '}
                    <Link href="/login" className="text-sky-600 font-semibold">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default RegisterPage