"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Dropdown, Label } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
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
            <div className="py-2 bg-blue-50 border border-gray-200 rounded-2xl">
                <Button
                    variant="light"
                    className="rounded-xl  px-3 py-2 flex items-center gap-3"
                >
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <Image
                            alt="user"
                            src={user?.image}
                            width={32}
                            height={32}
                            className="w-10 h-10 object-cover"
                        />
                    </div>
                    <p className="font-medium flex items-center gap-2 text-gray-800 max-w-40 truncate text-lg uppercase">
                        
                        <span className="truncate">{user?.name}</span>
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