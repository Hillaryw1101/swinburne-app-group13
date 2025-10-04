"use client";

import { FaPhoneAlt, FaShieldAlt, FaMapMarkedAlt } from "react-icons/fa";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

export default function EmergencyPage() {
  return (
    <SubpageLayout
      icon={<span>🚨</span>}
      title="Emergency Services"
      description="Direct campus safety and support resources."
    >
      <Link href="tel:082-260-607" className="rounded-xl border bg-red-50 p-6 text-center shadow hover:shadow-md transition">
        <FaPhoneAlt className="mx-auto text-red-600 w-6 h-6" />
        <p className="mt-2 font-medium">Call Security</p>
      </Link>
      <Link href="/safety" className="rounded-xl border bg-red-50 p-6 text-center shadow hover:shadow-md transition">
        <FaShieldAlt className="mx-auto text-red-600 w-6 h-6" />
        <p className="mt-2 font-medium">Staying Safe</p>
      </Link>
      <Link href="https://maps.google.com" className="rounded-xl border bg-red-50 p-6 text-center shadow hover:shadow-md transition">
        <FaMapMarkedAlt className="mx-auto text-red-600 w-6 h-6" />
        <p className="mt-2 font-medium">Share Location</p>
      </Link>
    </SubpageLayout>
  );
}
