'use client';


import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineClock, HiOutlineTag, HiOutlineUser } from "react-icons/hi";
import { HiOutlineCalendarDays, HiOutlineXMark } from "react-icons/hi2";
import { MdOutlineEmail, MdOutlinePriceChange } from "react-icons/md";

export default function BookingCard({ booking }) {
    const {
        image,
        name,
        date,
        duration,
        total_price,
        _id,
        location,
        slot
    } = booking;

    return (
     <Card className="w-full mt-3 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden flex flex-col sm:flex-row items-stretch">
    {/* Image Section */}
    <div className="w-full sm:w-48 h-48 sm:h-auto relative shrink-0">
        <Image 
            fill 
            src={image} 
            alt={name} 
            className="object-cover" 
            priority
        />
    </div>

    {/* Content Section */}
    <div className="p-5 flex flex-col justify-between grow gap-4">
        {/* Top Content Layout */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            
            {/* Left Content: Text & Tags */}
            <div className="space-y-3 w-full">
                <div className="space-y-1">
                    <p className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                        ID: {_id}
                    </p>
                    <div className="flex items-baseline gap-1.5">
                        <span className="text-xs font-semibold text-gray-400 uppercase tracking-tight">
                            Facility:
                        </span>
                        <h2 className="text-lg font-bold text-gray-800 leading-snug">
                            {name}
                        </h2>
                    </div>
                </div>

                {/* Meta Row (Badges/Tags) */}
                <div className="flex flex-wrap gap-2 pt-1">
                    {/* location */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200/60 text-gray-600 text-xs font-medium">
                        <FaLocationDot size={14} className="text-gray-400" />
                        <span>Location: <strong className="text-gray-700">{location}</strong></span>
                    </div>
                    {/* Date */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200/60 text-gray-600 text-xs font-medium">
                        <HiOutlineCalendarDays size={14} className="text-gray-400" />
                        <span>Date: <strong className="text-gray-700">{date}</strong></span>
                    </div>
                    {/* Time */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200/60 text-gray-600 text-xs font-medium">
                        <HiOutlineClock size={14} className="text-gray-400" />
                        <span> <strong className="text-gray-700">{slot}</strong></span>
                    </div>

                    {/* Duration */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200/60 text-gray-600 text-xs font-medium">
                        <HiOutlineClock size={14} className="text-gray-400" />
                        <span>Duration: <strong className="text-gray-700">{duration} hr</strong></span>
                    </div>

                    {/* Price */}
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold">
                        <MdOutlinePriceChange size={14} className="text-emerald-600" />
                        <span>${total_price}</span>
                    </div>
                </div>
            </div>

            {/* Right Content: Desktop Cancel Button */}
            <div className="hidden md:block shrink-0">
                <Button
                   
                    variant="danger"
                    className="rounded-xl font-semibold px-4 py-2 flex items-center gap-1.5 text-xs tracking-wide"
                >
                    <HiOutlineXMark size={16} />
                    Cancel Booking
                </Button>
            </div>
        </div>

        {/* Bottom Section: Footer Line & Contact */}
        <div className="pt-3 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-gray-500 min-w-0">
                <MdOutlineEmail size={15} className="text-gray-400 shrink-0" />
                <span className="truncate">
                    <span className="text-gray-400">Booking Email:</span>{" "}
                    <strong className="text-gray-600 font-medium">{booking.user_email}</strong>
                </span>
            </div>

            {/* Mobile/Tablet Cancel Button */}
            <div className="block md:hidden w-full">
                <Button
                    color="danger"
                    variant="flat"
                    className="w-full rounded-xl font-semibold py-2.5 flex items-center justify-center gap-1.5 text-xs"
                >
                    <HiOutlineXMark size={16} />
                    Cancel Booking
                </Button>
            </div>
        </div>
    </div>
</Card>
    );
}