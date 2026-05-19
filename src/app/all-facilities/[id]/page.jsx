import BookingForm from '@/components/BookingForm';
import FacilityDetails from '@/components/FacilityDetails';
import Link from 'next/link';
import React from 'react';

const BookNow = async ({ params }) => {
    const { id } = await params
    const res = await fetch(`http://localhost:5000/facilities/${id}`, { cache: 'no-store' }) 
    const data = await res.json()
    console.log(data);
    
    return (
        <div className='container mx-auto'>
            <Link href={'/'}>Back to facilities</Link>
            <div className='flex gap-4'>
                <div className='flex-1'>
                    <FacilityDetails data={data}  />
                </div>
                <div className='flex-1 justify-center items-center'>
                    <BookingForm data={data}/>
                </div>
            </div>
        </div>
    );
};

export default BookNow;
