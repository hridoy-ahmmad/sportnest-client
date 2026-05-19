"use client"
import { Button } from "@heroui/react";
import Link from "next/link";
import { HiOutlineExclamationTriangle } from "react-icons/hi2";


export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-white">

      <div className="text-center max-w-md space-y-6">

        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-red-50 flex items-center justify-center">
            <HiOutlineExclamationTriangle
              size={48}
              className="text-red-500"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">
          404 - Page Not Found
        </h1>

        {/* Message */}
        <p className="text-gray-500 text-sm leading-relaxed">
          The page you are looking for doesn’t exist or has been moved.
          Please check the URL or go back to the homepage.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">

          <Link href="/">
            <Button className="rounded-xl w-full sm:w-auto" color="primary">
              Go Home

            </Button>
          </Link>

          <Button
            variant="flat"
            className="rounded-xl w-full sm:w-auto"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>

        </div>

      </div>
    </div>
  );
}