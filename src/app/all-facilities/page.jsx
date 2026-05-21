import FacilityCard from '@/components/FacilityCard';
import React from 'react';

const AllFaculties = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`)
    const data = await res.json()
    console.log(data);
    

    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 p-10'>
                {
                    data.map(facility => <FacilityCard key={facility._id} facility={facility} />)
                }
            </div>
        </div>
    );
};

export default AllFaculties;