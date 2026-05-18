import React from 'react';
import { PacmanLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
           <PacmanLoader color="#59a8fa" />
        </div>
    );
};

export default loading;