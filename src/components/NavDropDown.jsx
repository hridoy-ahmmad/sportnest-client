"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsCalendarCheckFill } from "react-icons/bs";
import { CgNametag } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { FaPlusCircle } from "react-icons/fa";

export function NavDropDown() {

    const { data: session, } = authClient.useSession()
    const user = session?.user

    const handleLogout = async () => {
        await authClient.signOut()
        alert('Logged out successfully')
    }
    return (

        <Dropdown >
            <div className="bg-linear-to-br from-blue-50 to-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
                <Button
                    variant="light"
                    className="rounded-2xl px-4 py-6 flex items-center gap-3 w-full hover:bg-white/60 transition"
                >
                    <div className="w-9 h-9 rounded-full overflow-hidden ring-2 ring-blue-200 shadow-sm">
                        <Image
                            alt="user"
                            src={user?.image}
                            width={30}
                            height={30}
                            className="w-11 h-11 object-cover"
                        />
                    </div>

                    <p className="font-semibold flex items-center gap-2 text-gray-800 max-w-40 truncate text-base uppercase tracking-wide">
                        <span className="truncate">{user?.name.split(' ')[0]}</span>
                    </p>
                </Button>
            </div>
            <Dropdown.Popover className={'rounded-xl p-5'}>

                <p className="border-b border-gray-300 pb-2">User: {user.email} </p>
                <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
                    <Dropdown.Item id="new-file" textValue="New file">
                        <Link href={'/my-bookings'} className="flex gap-2 items-center text-gray-600"> <BsCalendarCheckFill /> My bookings </Link>
                    </Dropdown.Item>
                    <Dropdown.Item id="copy-link" textValue="Copy link">
                        <Link href={'/my-bookings'} className="flex gap-2 items-center text-gray-600">
                            <FaPlusCircle /> Add Facilities </Link>
                    </Dropdown.Item>
                    <Dropdown.Item id="edit-file" textValue="Edit file">
                        <Link href={'/my-bookings'} className="flex  gap-2 items-center text-gray-600"> <CiSettings /> Manage Facilities</Link>
                    </Dropdown.Item>
                    <Dropdown.Item >
                        <Button
                            onClick={handleLogout}
                            variant='danger'
                            className={'rounded-xl w-full'}>
                            Log Out
                        </Button>

                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown.Popover>
        </Dropdown>
    );
}
