"use client";

import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, ListBox, Modal, Surface, TextField, Select } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import MultipleValueTextInput from "react-multivalue-text-input";
import { toast } from "react-toastify";

export function ModalForm({ item }) {
    const router = useRouter()
    const [slots, setSlots] = useState([])
    const {
        image_url,
        name,
        price_per_hour,
        _id,
        location,
        capacity,
        facility_type,
        available_slots,
        description
    } = item;

    const handleUpdate = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const allData = Object.fromEntries(formData.entries())
        console.log();
        const data = {
            ...allData,
            image_url: allData.image,
            available_slots: slots
        }

        const { data: token } = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${token?.token}`
            },
            body: JSON.stringify(data)
        })
        const result = await res.json()
        if (result?.modifiedCount > 0) {
            router.refresh(`/facilities/${_id}`)
            toast.success('Facility Updated successfully', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        } else {
            toast.error('something went wrong')
        }

    }

    return (
        <Modal>
            <Button variant="secondary"><BiEditAlt /> Edit Facility</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />

                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form onSubmit={handleUpdate}>
                                    <div className="grid md:grid-cols-2 gap-6">

                                        {/* LEFT SIDE */}
                                        <div className="space-y-6">

                                            {/* Facility Name */}
                                            <TextField
                                                isRequired
                                                defaultValue={name}
                                                name="name"
                                                type="text">
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
                                            <TextField
                                                defaultValue={image_url}
                                                isRequired
                                                name="image"
                                                type="url">
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
                                            <TextField defaultValue={price_per_hour} isRequired name="price" type="number">
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
                                                    defaultValue={facility_type}
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
                                            <TextField defaultValue={location} isRequired name="location" type="text">
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
                                            <TextField defaultValue={capacity} isRequired name="capacity" type="number">
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
                                                defaultValue={available_slots}
                                            />
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mt-8 flex flex-col">
                                        <Label className="text-sm font-semibold text-gray-700 mb-3">
                                            DESCRIPTION
                                        </Label>

                                        <textarea
                                            defaultValue={description}
                                            name="description"
                                            placeholder="Describe your facility..."
                                            className="min-h-[180px] rounded-3xl border border-gray-200 bg-white shadow-sm p-5 outline-none resize-none transition-all duration-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-100"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <Button
                                        slot="close"
                                        type="submit"
                                        className="mt-10 h-14 px-10 rounded-2xl bg-linear-to-r from-sky-500 via-blue-600 to-indigo-700 text-white font-bold text-base shadow-[0_10px_30px_rgba(37,99,235,0.35)] hover:scale-[1.02] transition-all duration-300"
                                    >
                                        Edit Facility
                                    </Button>
                                </Form>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}