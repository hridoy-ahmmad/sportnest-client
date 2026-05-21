import ManageCard from "@/components/ManageCard";
import NoFaclityAdded from "@/components/NoFaclityAdded";
import { auth } from "@/lib/auth";
import { Plus, PlusShape } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import { headers } from "next/headers";
import Link from "next/link";



const ManageFacility = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/user/${user.id}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json()
    console.log(data);

    return (
        <div className="container mx-auto my-10">
            <div className="flex border-b border-gray-400 justify-between items-center">
                <div className="mb-2">
                    <h1 className="text-3xl md:text-4xl font-black bg-linear-to-r from-sky-500 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                        Manage Your Facilities
                    </h1>

                    <p className="text-gray-500 mt-2 text-sm md:text-base max-w-xl leading-relaxed">
                        Easily view, edit, update, and organize all the sports facilities you’ve added from one powerful dashboard.
                    </p>
                </div>
                <Button className="bg-linear-to-r from-sky-500 to-blue-700 text-white rounded-xl px-6 font-semibold shadow-md">
                    <Link href={'/add-facility'} className="flex items-center gap-2 justify-center"> <Plus /> <span>Add New</span> </Link>
                </Button>
            </div>

            <div>
                {
                    data.length === 0 ? <NoFaclityAdded /> : data.map(item => <ManageCard key={item._id} item={item} />)
                }
            </div>

        </div>
    );
};

export default ManageFacility;