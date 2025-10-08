"use client";

import { motion } from "framer-motion";
import { FaShieldAlt, FaMapMarkedAlt, FaArrowRight } from "react-icons/fa";
import { MdEmergency } from "react-icons/md";
import Link from "next/link";
import { useState } from "react";

export default function EmergencyPage() {
  const [userLocation] = useState("ADM Building, Level 2");
  const [nearestExit] = useState("Main Entrance - ADM Building");

  return (
    <div className="min-h-screen bg-[#fafafa] pb-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-8"
      >
        <h1 className="text-2xl font-semibold text-gray-900">
          Emergency Services
        </h1>
        <p className="text-gray-500 text-sm">
          Campus safety and emergency resources
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        {/* Emergency Exit */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-3 hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Emergency Exit Guide
          </h2>
          <p className="text-sm text-gray-500">
            Your location:{" "}
            <span className="font-medium text-gray-700">{userLocation}</span>
          </p>
          <p className="text-sm text-gray-500">
            Nearest exit:{" "}
            <span className="font-medium text-gray-700">{nearestExit}</span>
          </p>
          <Link
            href="/exit-navigation"
            className="inline-block text-[#EF4444] text-sm font-medium mt-2 hover:underline"
          >
            Open Exit Navigation →
          </Link>
        </motion.div>

        {/* Emergency Contacts */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-3 hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold text-gray-800 flex items-center">
            <MdEmergency className="text-[#EF4444] w-5 h-5 mr-2" />
            Emergency Contacts
          </h2>
          <p className="text-sm text-gray-500">Available 24/7 on campus</p>

          <div className="mt-4 space-y-3">
            {[
              { name: "Campus Security", phone: "082-260-607" },
              { name: "Emergency Services", phone: "999" },
            ].map((contact, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.01 }}
                className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 border border-gray-100 hover:border-[#EF4444] transition"
              >
                <div>
                  <h3 className="font-medium text-gray-800">{contact.name}</h3>
                  <p className="text-gray-500 text-sm">{contact.phone}</p>
                </div>
                <a
                  href={`tel:${contact.phone.replace(/-/g, "")}`}
                  className="text-[#EF4444] hover:text-red-600 transition text-lg"
                >
                  📞
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 space-y-3 hover:shadow-md transition"
        >
          <h2 className="text-lg font-semibold text-gray-800">
            Quick Actions
          </h2>
          <p className="text-sm text-gray-500">Emergency tools and guides</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <ActionCard
              href="/safety"
              icon={<FaShieldAlt className="w-5 h-5 text-[#EF4444]" />}
              title="Safety Protocols"
              desc="Guidelines & procedures"
            />
            <ActionCard
              href="/exit-navigation"
              icon={<FaMapMarkedAlt className="w-5 h-5 text-[#EF4444]" />}
              title="Exit Navigation"
              desc="Find your nearest safe exit"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

/* 💡 ActionCard with motion & hover effects */
function ActionCard({
  href,
  icon,
  title,
  desc,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ type: "spring", stiffness: 200 }}
    >
      <Link
        href={href}
        className="flex items-center justify-between bg-gray-50 rounded-2xl px-5 py-4 shadow-sm border border-gray-100 hover:border-[#EF4444] hover:shadow-md transition"
      >
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white rounded-lg border border-gray-200">
            {icon}
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-800">{title}</h3>
            <p className="text-xs text-gray-500">{desc}</p>
          </div>
        </div>
        <FaArrowRight className="text-gray-400 w-4 h-4" />
      </Link>
    </motion.div>
  );
}
