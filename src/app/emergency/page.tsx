"use client";

import Link from "next/link";
import {
  FaDoorOpen,
  FaShieldAlt,
  FaPhoneAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

export default function EmergencyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] pb-16">
      {/* Header Section */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-semibold text-gray-900">
          Emergency Services
        </h1>
        <p className="text-gray-500 text-sm max-w-2xl">
          Learn what to do during emergencies, how to stay safe on campus, and where to go when
          immediate help is needed. This section helps guide students, staff, and visitors in
          handling critical situations calmly and effectively.
        </p>
      </div>

      {/* Overview Section */}
      <div className="max-w-5xl mx-auto px-6 mb-10">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
            <FaExclamationTriangle className="text-red-600 mr-2" />
            What Emergency Services Do
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            The campus emergency services provide rapid response and guidance during accidents,
            fires, medical incidents, and security threats. They work closely with local
            authorities to ensure safety, coordinate evacuations, and assist those in need.
          </p>
          <p className="text-gray-600 text-sm mt-3">
            This section connects you to essential pages that help you respond to and navigate
            through emergencies effectively.
          </p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-3 gap-5">
        <NavCard
          icon={<FaDoorOpen className="text-red-600 w-6 h-6" />}
          title="Exit Navigation"
          description="Find the nearest safe exit and follow directions to evacuate quickly."
          href="/exit-navigation"
        />

        <NavCard
          icon={<FaShieldAlt className="text-red-600 w-6 h-6" />}
          title="Staying Safe"
          description="Learn safety tips, emergency procedures, and how to stay prepared."
          href="/safety"
        />

        <NavCard
          icon={<FaPhoneAlt className="text-red-600 w-6 h-6" />}
          title="Emergency Contacts"
          description="Get quick access to campus and public emergency hotlines."
          href="/security-contact"
        />
      </div>
    </div>
  );
}

/* 🔗 Navigation Card Component */
function NavCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col justify-between bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-[#EF4444] transition p-6"
    >
      <div>
        <div className="flex items-center mb-3 space-x-2">
          {icon}
          <h2 className="font-semibold text-gray-900 text-lg">{title}</h2>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="mt-4 text-[#EF4444] text-sm font-medium hover:underline">
        Learn more →
      </div>
    </Link>
  );
}

