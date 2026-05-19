
import GoBackBtn from '@/components/GoBackBtn';
import MyBookingCard from '@/components/MyBookingCard';
import NoBookingsPage from '@/components/NoBookingPage';
import { ArrowLeft } from '@gravity-ui/icons';
import Link from 'next/link';
import React from 'react';

const MyBookings = async () => {
    const res = await fetch('http://localhost:5000/bookings')
    const data = await res.json()
    console.log(data);


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