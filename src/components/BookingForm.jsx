"use client"
import { authClient } from '@/lib/auth-client';
import { Button, FieldError, Form, Input, Label, TextField, Select, ListBox } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaClock, FaRegCalendarAlt, FaStopwatch } from 'react-icons/fa';
import { Bounce, toast } from 'react-toastify';

const BookingForm = ({ data }) => {
    const [duration, setDuration] = useState(1)
    const { data: session } = authClient.useSession()
    const router = useRouter()

    const handleBooking = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const bookingInfo = Object.fromEntries(formData.entries())
        const bookingData = {
            ...bookingInfo,
            facility_id: data._id,
            user_id: session?.user?.id,
            user_email: session?.user?.email,
            user_name: session?.user?.name,
            total_price: data.price_per_hour * duration,
            image: data.image_url,
            location: data.location
        }
        const res = await fetch(`http://localhost:5000/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bookingData)
        })
        const result = await res.json()

        if (res.ok) {
            toast.success('Booking Successful', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
        
            });
            router.push('/my-bookings')
        } else {
            toast.error('Booking failed', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }


    }


    return (
        <div className="min-h-screen w-full  flex items-center justify-center px-4">
            <div className="w-full bg-white shadow-xl rounded-2xl p-8 border border-blue-100">
                <div className="bg-white border border-blue-100 rounded-3xl shadow-sm p-6 sm:p-8">

                    <div>
                        <h1 className="text-3xl font-black text-gray-900">
                            Book This Facility
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Fill in your details to reserve this spot
                        </p>
                    </div>
                </div>
                {/* Form */}
                <Form onSubmit={handleBooking} className="mt-8 space-y-5 flex flex-col gap-5">
                    {/* Name */}
                    <TextField
                        isRequired
                        name="name"
                        type='text'
                        value={data.name}
                    >
                        <Label>Facility Name</Label>
                        <Input />
                        <FieldError />
                    </TextField>

                    {/* date */}
                    <TextField
                        isRequired
                        name="date"
                        type='date'
                    >
                        <Label className='flex items-center gap-2'><FaRegCalendarAlt /> Booking Date</Label>
                        <Input />
                        <FieldError />
                    </TextField>

                    {/* time slots */}
                    <Select
                        name='slot'
                        className="w-[256px]" placeholder="Select a slot">
                        <Label className='flex items-center gap-2'> <FaClock /> Select a time</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                {
                                    data?.available_slots?.map((slot) => (
                                        <ListBox.Item
                                            key={slot}
                                            id={slot}
                                        >
                                            {slot}
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    ))
                                }
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    {/* duration */}
                    <TextField
                        isRequired
                        name="duration"
                        type='number'
                        value={duration}
                        onChange={(value) => setDuration(Number(value))}
                    >
                        <Label className='flex items-center gap-2'><FaStopwatch /> Duration(Hours)</Label>
                        <Input />
                        <FieldError />
                    </TextField>

                    <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
                        <div className="flex items-center justify-between text-gray-600">
                            <p>
                                ${data.price_per_hour} x {duration} hr(s)
                            </p>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                            <h3 className="text-xl font-black text-gray-900">
                                Total Price
                            </h3>
                            <h3 className="text-2xl font-black text-blue-700">
                                $ {data.price_per_hour * duration}
                            </h3>
                        </div>
                    </div>

                    {/* Booking Button */}
                    <Button
                        type='submit'
                        className="w-full bg-gradient-to-r from-sky-500 to-blue-700 text-white font-semibold h-12 rounded-xl shadow-md hover:shadow-xl transition-all"
                    >
                        Confirm Booking
                    </Button>

                </Form>





            </div>
        </div>
    );
};

export default BookingForm;