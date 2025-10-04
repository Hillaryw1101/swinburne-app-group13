"use client";

import { FaComments, FaUsers, FaHeadset } from "react-icons/fa";
import Link from "next/link";
import SubpageLayout from "@/components/SubpageLayout";

export default function SupportPage() {
  return (
    <SubpageLayout
      icon={<span>💬</span>}
      title="Support Services"
      description="Connect with staff and help desks."
    >
      <Link href="/messages" className="rounded-xl border bg-green-50 p-6 text-center shadow hover:shadow-md transition">
        <FaComments className="mx-auto text-green-600 w-6 h-6" />
        <p className="mt-2 font-medium">Live Chat</p>
      </Link>
      <Link href="/staff" className="rounded-xl border bg-green-50 p-6 text-center shadow hover:shadow-md transition">
        <FaUsers className="mx-auto text-green-600 w-6 h-6" />
        <p className="mt-2 font-medium">Staff Directory</p>
      </Link>
      <Link href="/it-queue" className="rounded-xl border bg-green-50 p-6 text-center shadow hover:shadow-md transition">
        <FaHeadset className="mx-auto text-green-600 w-6 h-6" />
        <p className="mt-2 font-medium">IT Queue</p>
      </Link>
    </SubpageLayout>
  );
}
