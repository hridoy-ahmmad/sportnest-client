'use client'

import React from 'react'
import { Button } from '@heroui/react'
import Link from 'next/link'

import { FcGoogle } from 'react-icons/fc'
import { authClient } from '@/lib/auth-client'
import { useRouter } from 'next/navigation'
import { toast } from 'react-toastify'

const LoginPage = () => {
    const router = useRouter()
    const handleLogin = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const userInfo = Object.fromEntries(formData.entries())
        const { data, error } = await authClient.signIn.email({
            email: userInfo.email,
            password: userInfo.password,
            rememberMe: true,
        });
        if (data?.user) {
            toast.success('Log In successful', {
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
        } else if (error) {
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


            console.log(data, error);

        }

    }

        const handleGoogleLogin = async () => {
            const data = await authClient.signIn.social({
                provider: "google",
            });
            router.push('/')
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
        

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-sky-50 via-white to-blue-100 px-4">
            <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8 border border-blue-100">

                {/* Title */}
                <h1 className="text-3xl font-black text-center text-gray-900">
                    Welcome to <span className="text-sky-600">SportNest</span>
                </h1>

                <p className="text-center text-gray-500 text-sm mt-2">
                    Login to book your favorite sports facilities
                </p>

                {/* Form */}
                <form onSubmit={handleLogin} className="mt-8 space-y-5">

                    {/* Email */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            name='email'
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            name='password'
                            type="password"
                            placeholder="Enter your password"
                            className="w-full mt-2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500"
                        />
                    </div>

                    {/* Login Button */}
                    <Button
                        type='submit'
                        className="w-full bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold h-12 rounded-xl shadow-md hover:shadow-xl transition-all"
                    >
                        Login
                    </Button>

                </form>

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

                {/* Register link */}
                <p className="text-center text-sm text-gray-500 mt-6">
                    Don’t have an account?{' '}
                    <Link href="/register" className="text-sky-600 font-semibold">
                        Register
                    </Link>
                </p>

            </div>
        </div>
    )
}

export default LoginPage