import MyBookingCard from '@/components/MyBookingCard';
import React from 'react';

const MyBookings = async () => {
    const res = await fetch('http://localhost:5000/bookings')
    const data = await res.json()
    console.log(data);

    return (
        <div className='container mx-auto'>
            <h1>my booking</h1>
            {data.length}
            {
                data.map(booking =>
                    <MyBookingCard key={booking._id} booking={booking} />
                )
            }

        </div>
    );
};

export default MyBookings;