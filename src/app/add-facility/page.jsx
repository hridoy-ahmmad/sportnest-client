"use client";

import { authClient } from "@/lib/auth-client";
import { Plus } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, ListBox, Select, TextField } from "@heroui/react";
import { useState } from "react";

import MultipleValueTextInput from "react-multivalue-text-input";
const AddFacility = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    const [slots, setSlots] = useState([])
    console.log(slots);


    const handleAddFacility = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const data = Object.fromEntries(formData.entries())
        const facilityData = {
            name: data?.name,
            capacity: Number(data?.capacity),
            facility_type: data?.category,
            owner_email: user?.email,
            image_url: data?.image,
            available_slots: slots,
            price_per_hour: Number(data?.price),
            location: data?.location,
            description: data?.description,
            user_id: user?.id,
            date: new Date()
        }
        console.log(data.slots.toString());

        const res = await fetch('http://localhost:5000/facilities', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(facilityData)
        })
        const result = await res.json()
        console.log(result);
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-sky-50 py-14 px-4">
            <div className="max-w-5xl mx-auto bg-white/90 backdrop-blur-xl border border-white shadow-[0_10px_60px_rgba(0,0,0,0.08)] rounded-[32px] p-8 md:p-12">

                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-3xl md:text-4xl font-black bg-linear-to-r from-sky-500 to-blue-700 bg-clip-text text-transparent">
                        Add New Facility
                    </h1>

                    <p className="text-gray-500 mt-2 text-sm md:text-base">
                        Create and manage your sports facility with all booking details.
                    </p>
                </div>

                <Form onSubmit={handleAddFacility}>
                    <div className="grid md:grid-cols-2 gap-6">

                        {/* LEFT SIDE */}
                        <div className="space-y-6">

                            {/* Facility Name */}
                            <TextField isRequired name="name" type="text">
                                <Label className="text-sm font-semibold text-gray-700 mb-2">
                                    FACILITY NAME
                                </Label>

                                <Input
                                    placeholder="e.g. Green Turf Football Ground"
                                    className="h-14 rounded-2xl border border-gray-200 bg-white shadow-sm px-3 transition-all duration-300 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100"
                                />

                                <FieldError />
                            </TextField>

                            {/* Image */}
                            <TextField isRequired name="image" type="url">
                                <Label className="text-sm font-semibold text-gray-700 mb-2">
                                    IMAGE URL
                                </Label>

                                <Input
                                    placeholder="https://example.com/image.jpg"
                                    className="h-14 rounded-2xl border border-gray-200 bg-white shadow-sm px-3 transition-all duration-300 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100"
                                />

                                <FieldError />
                            </TextField>

                            {/* Price */}
                            <TextField isRequired name="price" type="number">
                                <Label className="text-sm font-semibold text-gray-700 mb-2">
                                    PRICE PER HOUR ($)
                                </Label>

                                <Input
                                    placeholder="50"
                                    className="h-14 rounded-2xl border border-gray-200 bg-white shadow-sm px-3 transition-all duration-300 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100"
                                />

                                <FieldError />
                            </TextField>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="space-y-6">

                            {/* Sport Type */}
                            <div>
                                <Label className="text-sm font-semibold text-gray-700 mb-2">
                                    SPORT TYPE
                                </Label>

                                <Select
                                    name="category"
                                    placeholder="Select sport type"
                                    className="w-full"
                                >
                                    <Select.Trigger className="w-full h-14 rounded-2xl border border-gray-200 bg-white shadow-sm px-4 transition-all duration-300 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100">
                                        <Select.Value />
                                        <Select.Indicator />
                                    </Select.Trigger>

                                    <Select.Popover className="rounded-2xl border border-gray-200 shadow-2xl">
                                        <ListBox className="p-2">
                                            {[
                                                "Football",
                                                "Cricket",
                                                "Basketball",
                                                "Tennis",
                                                "Gym",
                                                "Swimming",
                                                "Badminton",
                                            ].map((sport) => (
                                                <ListBox.Item
                                                    key={sport}
                                                    id={sport}
                                                    textValue={sport}
                                                    className="rounded-xl px-3 py-2 hover:bg-sky-50 cursor-pointer"
                                                >
                                                    {sport}
                                                </ListBox.Item>
                                            ))}
                                        </ListBox>
                                    </Select.Popover>
                                </Select>
                            </div>

                            {/* Location */}
                            <TextField isRequired name="location" type="text">
                                <Label className="text-sm font-semibold text-gray-700 mb-2">
                                    LOCATION
                                </Label>

                                <Input
                                    placeholder="e.g. Paris, France"
                                    className="h-14 rounded-2xl border border-gray-200 bg-white shadow-sm px-3 transition-all duration-300 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100"
                                />

                                <FieldError />
                            </TextField>

                            {/* Capacity */}
                            <TextField isRequired name="capacity" type="number">
                                <Label className="text-sm font-semibold text-gray-700 mb-2">
                                    CAPACITY (PLAYERS)
                                </Label>

                                <Input
                                    placeholder="22"
                                    className="h-14 rounded-2xl border border-gray-200 bg-white shadow-sm px-3 transition-all duration-300 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100"
                                />

                                <FieldError />
                            </TextField>
                        </div>
                    </div>

                    {/* Time Slots */}
                    <div className="mt-8">
                        <Label className="text-sm font-semibold text-gray-700 mb-3">
                            AVAILABLE TIME SLOTS
                        </Label>

                        <div className="rounded-3xl border border-gray-200 bg-white shadow-sm p-4 transition-all duration-300 focus-within:border-sky-500 focus-within:ring-4 focus-within:ring-sky-100">

                            <MultipleValueTextInput
                                className="w-full outline-none border-none bg-transparent py-2 text-gray-700"
                                onItemAdded={(item, allItems) => setSlots(allItems)}

                                onItemDeleted={(item, allItems) =>
                                    setSlots(allItems)
                                }
                                shouldAddOnBlur={true}
                                label=""
                                name='slots'
                                placeholder="e.g. 08:00am - 09:00am"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mt-8 flex flex-col">
                        <Label className="text-sm font-semibold text-gray-700 mb-3">
                            DESCRIPTION
                        </Label>

                        <textarea
                            name="description"
                            placeholder="Describe your facility..."
                            className="min-h-[180px] rounded-3xl border border-gray-200 bg-white shadow-sm p-5 outline-none resize-none transition-all duration-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                        />
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="mt-10 h-14 px-10 rounded-2xl bg-linear-to-r from-sky-500 via-blue-600 to-indigo-700 text-white font-bold text-base shadow-[0_10px_30px_rgba(37,99,235,0.35)] hover:scale-[1.02] transition-all duration-300"
                    >
                        <Plus size={18} />
                        Add Facility
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AddFacility;
