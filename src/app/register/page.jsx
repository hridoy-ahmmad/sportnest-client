'use client'

import React from 'react'
import { Input, Button, Form, TextField, Label, FieldError, Description } from '@heroui/react'
import Link from 'next/link'
import { Check } from '@gravity-ui/icons'

const RegisterPage = () => {
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
                <Form className="flex w-96 flex-col gap-8">

                    {/* Name */}
                    <TextField
                        isRequired
                        name="name"
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