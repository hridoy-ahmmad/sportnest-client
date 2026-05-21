"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";

import { useRouter } from "next/navigation";

export function CancelBooking({ id }) {
    const router = useRouter()
    const handeleDelete = async () => {
        const { data: token } = await authClient.token()
        console.log(token);

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer ${token?.token}`
            }
        })
        const result = await res.json()
        router.refresh()
    }

    return (
        <AlertDialog>
            <Button variant="danger">Cancle Booking</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Confirm cancel your booking</AlertDialog.Heading>
                        </AlertDialog.Header>

                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handeleDelete} slot="close" variant="danger">
                                Confirm
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}