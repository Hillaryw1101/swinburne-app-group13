"use client";

import { motion } from "framer-motion";
import {
  FaFireExtinguisher,
  FaUserShield,
  FaFirstAid,
  FaFlask,
  FaCloudSunRain,
  FaInfoCircle,
  FaHandsHelping,
  FaClinicMedical,
  FaLaptop,
  FaEnvelope,
  FaBoxOpen,
  FaBusAlt,
  FaMapMarkerAlt,
  FaMoon,
  FaPhoneAlt,
  FaComments,
} from "react-icons/fa";
import Link from "next/link";

export default function SafetyPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] pb-20">
      {/* Page Title */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-semibold text-gray-900"
        >
          Staying Safe on Campus
        </motion.h1>
        <p className="text-gray-500 text-sm">
          A guide for students, parents, and visitors to navigate safely and get help when needed.
        </p>
      </div>

      {/* Quick Links */}
      <motion.div
        className="max-w-5xl mx-auto px-6 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          <QuickLink icon={<FaPhoneAlt />} label="Emergency" href="/security-contact" />
          <QuickLink icon={<FaLaptop />} label="IT Help" href="mailto:helpdesk@swin.edu.my" />
          <QuickLink icon={<FaEnvelope />} label="Report" href="mailto:safety@swin.edu.my" />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 space-y-6">
        {/* Fire Safety */}
        <SafetyCard
          icon={<FaFireExtinguisher className="text-gray-500 w-5 h-5" />}
          title="Fire Safety"
          text="Remain calm and evacuate immediately during a fire. Use stairs, not elevators, and follow exit signs. Alert others and call Campus Security or 999."
          link="tel:082260607"
          linkLabel="Call Security"
        />

        {/* Personal Safety */}
        <SafetyCard
          icon={<FaUserShield className="text-gray-500 w-5 h-5" />}
          title="Personal Safety"
          text="Stay alert and aware of your surroundings. Avoid dark or isolated areas at night. If you feel unsafe, contact Campus Security right away."
          link="tel:082260607"
          linkLabel="Call Campus Security"
        />

        {/* Medical Emergencies */}
        <SafetyCard
          icon={<FaFirstAid className="text-gray-500 w-5 h-5" />}
          title="Medical Emergencies"
          text="For urgent medical assistance, call Campus Security (082-260-607) or Emergency Services (999). Remain calm and provide clear details of your location."
          link="tel:082260607"
          linkLabel="Call Now"
        />

        {/* Laboratory Safety */}
        <SafetyCard
          icon={<FaFlask className="text-gray-500 w-5 h-5" />}
          title="Laboratory Safety"
          text="Wear protective gear, follow instructions, and report spills or injuries immediately. Dispose of materials safely and never work alone in the lab."
        />

        {/* Weather Hazards */}
        <SafetyCard
          icon={<FaCloudSunRain className="text-gray-500 w-5 h-5" />}
          title="Weather & Environmental Hazards"
          text="During severe weather, stay indoors and follow campus alerts. Avoid flooded areas and stay away from tall trees or open spaces during storms."
        />

        {/* Visitor & New Student Help */}
        <SectionTitle title="Visitor & New Student Help" />
        <SafetyCard
          icon={<FaInfoCircle className="text-gray-500 w-5 h-5" />}
          title="Campus Information Counter"
          text="Located in the ADM Building main lobby. Get directions, visitor passes, or general help. Open weekdays 8:30 AM – 5:00 PM."
        />
        <SafetyCard
          icon={<FaHandsHelping className="text-gray-500 w-5 h-5" />}
          title="Student & Parent Support Office"
          text="Need assistance with student life, safety, or housing? Visit the Student Support Centre or call 082-260-610."
        />

        {/* Lost & Found */}
        <SectionTitle title="Lost & Found" />
        <SafetyCard
          icon={<FaBoxOpen className="text-gray-500 w-5 h-5" />}
          title="Report Lost Items"
          text="If you’ve lost something on campus, visit the Campus Security Office or call 082-260-607. Items are held for up to 30 days before disposal."
          link="tel:082260607"
          linkLabel="Contact Security"
        />

        {/* Health & Wellness */}
        <SectionTitle title="Health & Wellness Support" />
        <SafetyCard
          icon={<FaClinicMedical className="text-gray-500 w-5 h-5" />}
          title="On-Campus Health Clinic"
          text="Open Monday to Friday, 9 AM – 4 PM. Provides first aid and general medical assistance. Located next to the Student Centre."
        />
        <SafetyCard
          icon={<FaHandsHelping className="text-gray-500 w-5 h-5" />}
          title="Counselling & Mental Health"
          text="Students can reach out to the Counselling Unit at 082-260-620 or email counselling@swin.edu.my for confidential support."
          link="mailto:counselling@swin.edu.my"
          linkLabel="Email Counselling"
        />

        {/* Tech Help */}
        <SectionTitle title="Tech & Access Help" />
        <SafetyCard
          icon={<FaLaptop className="text-gray-500 w-5 h-5" />}
          title="IT Service Desk"
          text="Having trouble accessing Wi-Fi or your student portal? Visit the IT Service Desk or email helpdesk@swin.edu.my for assistance."
          link="mailto:helpdesk@swin.edu.my"
          linkLabel="Contact IT"
        />

        {/* Navigation & Transport */}
        <SectionTitle title="Campus Navigation & Transportation" />
        <SafetyCard
          icon={<FaBusAlt className="text-gray-500 w-5 h-5" />}
          title="Campus Shuttle"
          text="A free shuttle service runs between main campus buildings from 8 AM to 6 PM. Check schedules on the Swinburne app or information boards."
        />
        <SafetyCard
          icon={<FaMapMarkerAlt className="text-gray-500 w-5 h-5" />}
          title="Visitor Parking"
          text="Visitors can park near the ADM Building. Parking permits are available from the Information Counter."
        />

        {/* Night Transport */}
        <SectionTitle title="Security Escort & Night Transport" />
        <SafetyCard
          icon={<FaMoon className="text-gray-500 w-5 h-5" />}
          title="Campus Night Escort"
          text="Security escorts are available after dark to accompany you safely between buildings. Call 082-260-607 to request assistance."
          link="tel:082260607"
          linkLabel="Request Escort"
        />

        {/* Emergency Points */}
        <SectionTitle title="Emergency Assembly Points" />
        <SafetyCard
          icon={<FaMapMarkerAlt className="text-gray-500 w-5 h-5" />}
          title="Designated Assembly Areas"
          text="After evacuating any building, proceed calmly to your nearest assembly point marked with a green 'Meeting Point' sign. Stay there until all-clear is given."
        />

        {/* Feedback */}
        <SectionTitle title="Report or Give Feedback" />
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 text-center hover:shadow-md transition"
        >
          <FaComments className="text-gray-500 w-6 h-6 mx-auto mb-3" />
          <h2 className="font-semibold text-gray-800 mb-2">We Value Your Feedback</h2>
          <p className="text-sm text-gray-600 mb-4">
            Have a concern, suggestion, or safety issue? Let us know so we can improve campus safety and support.
          </p>
          <a
            href="mailto:safety@swin.edu.my"
            className="inline-block bg-red-600 text-white text-sm font-medium rounded-lg px-4 py-2 hover:bg-red-700 transition"
          >
            Send Feedback
          </a>
        </motion.div>
      </div>
    </div>
  );
}

/* --- Reusable Components --- */
function SafetyCard({
  icon,
  title,
  text,
  link,
  linkLabel,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  link?: string;
  linkLabel?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition"
    >
      <div className="flex items-center space-x-3 mb-2">
        {icon}
        <h2 className="font-semibold text-gray-800">{title}</h2>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed mb-3">{text}</p>
      {link && (
        <Link
          href={link}
          className="inline-block text-red-600 text-sm font-medium hover:underline"
        >
          {linkLabel || "Learn More"}
        </Link>
      )}
    </motion.div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <h3 className="text-lg font-semibold text-gray-800 pt-6 pb-1 border-b border-gray-100">
      {title}
    </h3>
  );
}

function QuickLink({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
      <Link
        href={href}
        className="flex flex-col items-center justify-center bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-4 text-gray-700"
      >
        <div className="text-gray-500 text-lg mb-1">{icon}</div>
        <span className="text-sm font-medium">{label}</span>
      </Link>
    </motion.div>
  );
}
