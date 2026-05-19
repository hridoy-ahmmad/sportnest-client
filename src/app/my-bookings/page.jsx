

import GoBackBtn from '@/components/GoBackBtn';
import MyBookingCard from '@/components/MyBookingCard';
import NoBookingsPage from '@/components/NoBookingPage';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookings = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user
    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`)
    const data = await res.json()

    return (
        <div className='container mx-auto my-5'>
            <h1 className='text-2xl text-center font-bold'>My bookings</h1>
            <div className='flex justify-between'>
                <GoBackBtn />
                <p className='text-right'>Total Bookings: {data.length}</p>
            </div>
            {
                data.length === 0 ? <NoBookingsPage /> :
                    data.map(booking =>
                        <MyBookingCard key={booking._id} booking={booking} />
                    )
            }
        </div>
    );
};

export default MyBookings;