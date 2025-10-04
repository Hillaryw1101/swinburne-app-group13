"use client";

import { FaMapMarkedAlt, FaUtensils, FaParking, FaBook } from "react-icons/fa";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

export default function NavigatePage() {
  return (
    <SubpageLayout
      icon={<span>🧭</span>}
      title="Campus Navigation"
      description="Find places and services across campus."
    >
      <Link href="/maps" className="rounded-xl border bg-blue-50 p-6 text-center shadow hover:shadow-md transition">
        <FaMapMarkedAlt className="mx-auto text-blue-600 w-6 h-6" />
        <p className="mt-2 font-medium">Maps</p>
      </Link>
      <Link href="/dining" className="rounded-xl border bg-blue-50 p-6 text-center shadow hover:shadow-md transition">
        <FaUtensils className="mx-auto text-blue-600 w-6 h-6" />
        <p className="mt-2 font-medium">Dining</p>
      </Link>
      <Link href="/parking" className="rounded-xl border bg-blue-50 p-6 text-center shadow hover:shadow-md transition">
        <FaParking className="mx-auto text-blue-600 w-6 h-6" />
        <p className="mt-2 font-medium">Parking</p>
      </Link>
      <Link href="/study" className="rounded-xl border bg-blue-50 p-6 text-center shadow hover:shadow-md transition">
        <FaBook className="mx-auto text-blue-600 w-6 h-6" />
        <p className="mt-2 font-medium">Study Spaces</p>
      </Link>
    </SubpageLayout>
  );
}
