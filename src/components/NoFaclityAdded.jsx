import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { ImSad2 } from 'react-icons/im';

const NoFaclityAdded = () => {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-4">

            <div className="text-center max-w-md space-y-5">

                {/* Icon */}
                <div className="flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center">
                        <ImSad2 size={40} className="text-gray-500" />

                    </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold text-gray-800">
                    No Facility Found
                </h2>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                    You don’t have added any facility yet. Once you add a facility,
                    it will appear here.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">

                    <Link href="/add-facility">
                        <Button
                            color="primary"
                            className="rounded-xl px-5 w-full sm:w-auto"
                        >
                            Add Facilities
                        </Button>
                    </Link>

                    <Link href="/">
                        <Button
                            variant="flat"
                            className="rounded-xl px-5 w-full sm:w-auto"
                        >
                            Go Home
                        </Button>
                    </Link>

                </div>

            </div>
        </div>
    );
};

export default NoFaclityAdded;