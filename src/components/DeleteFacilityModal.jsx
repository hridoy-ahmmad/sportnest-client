"use client";

import { AlertDialog, Button } from "@heroui/react";
import { BiTrashAlt } from "react-icons/bi";

export function DeleteFacilityModal({ handleDelete }) {
    return (
        <AlertDialog>
            <Button variant="danger"> <BiTrashAlt /> Remove Facilitty</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Remove your Facility permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button
                                onClick={handleDelete}
                                slot="close" variant="danger">
                                Confirm Remove
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}