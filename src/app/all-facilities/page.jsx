import FacultyCard from '@/components/FacultyCard';
import React from 'react';

const AllFaculties = async() => {
     const res = await fetch('http://localhost:5000/faculties')
    const data = await res.json()

    return (
        <div>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-10'>
             {
                data.map(faculty => <FacultyCard key={faculty._id} faculty={faculty} />)
            }
           </div>
        </div>
    );
};

export default AllFaculties;