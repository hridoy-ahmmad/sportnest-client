'use client'
import { ArrowLeft } from '@gravity-ui/icons';
import { Button } from '@heroui/react';
import { useRouter } from 'next/navigation';


const GoBackBtn = () => {
    const router = useRouter()
    return (
        <Button
            onClick={() => router.back()}
            className='flex gap-2 items-center py-2 px-3 rounded-xl bg-blue-100 text-black/80 font-semibold'><ArrowLeft /><span>Go Back</span> </Button>
    );
};

export default GoBackBtn;