"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b border-slate-200/80 shadow-sm">
      <div className="h-[3px] w-full bg-[#D42A30]" aria-hidden />

      {/* h-16 (was h-14) */}
      <div className="maxw container-px h-16 flex items-center justify-between">
        <Brand />

        <nav aria-label="Quick links" className="hidden md:flex items-center gap-2">
          <QuickPill href="/emergency" label="Emergency" active={pathname.startsWith("/emergency")} />
          <QuickPill href="/navigate"  label="Navigate"  active={pathname.startsWith("/navigate")} />
          <QuickPill href="/support"   label="Support"   active={pathname.startsWith("/support")} />
          <QuickPill href="/events"    label="Events"    active={pathname.startsWith("/events")} />
          <QuickPill href="https://www.swinburne.edu.my/canvas/" label="Canvas" external />
          <QuickPill
            href="https://login.microsoftonline.com/3f639a9b-27c8-4403-82b1-ebfb88052d15/wsfed?wa=wsignin1.0&wtrealm=https%3a%2f%2fsisportal-100380.campusnexus.cloud%2fCMCPortal%2f&wct=2025-10-04T04%3a28%3a18Z&wctx=rm%3d0%26id%3dpassive%26ru%3dsecure%2fstudent%2fstuportal.aspx&wreply=https%3a%2f%2fsisportal-100380.campusnexus.cloud%2fCMCPortal%2f&AppType=Portal&Role=STUDENT"
            label="Student Portal"
            external
          />
        </nav>

        {/* w/h-10 (was 9) */}
        <Link
          href="/menu"
          className="w-10 h-10 rounded-full bg-slate-200 grid place-content-center hover:bg-slate-300"
          aria-label="Profile / menu"
        >
          👤
        </Link>
      </div>

      <div className="md:hidden border-t border-slate-200/70 bg-white/85">
        <nav aria-label="Quick links (mobile)" className="maxw container-px py-2 overflow-x-auto no-scrollbar">
          <ul className="flex gap-2 w-max">
            <li><QuickPill href="/emergency" label="Emergency" compact active={pathname.startsWith("/emergency")} /></li>
            <li><QuickPill href="/navigate"  label="Navigate"  compact active={pathname.startsWith("/navigate")} /></li>
            <li><QuickPill href="/support"   label="Support"   compact active={pathname.startsWith("/support")} /></li>
            <li><QuickPill href="/events"    label="Events"    compact active={pathname.startsWith("/events")} /></li>
            <li><QuickPill href="https://www.swinburne.edu.my/canvas/" label="Canvas" compact external /></li>
            <li><QuickPill
              href="https://login.microsoftonline.com/3f639a9b-27c8-4403-82b1-ebfb88052d15/wsfed?wa=wsignin1.0&wtrealm=https%3a%2f%2fsisportal-100380.campusnexus.cloud%2fCMCPortal%2f&wct=2025-10-04T04%3a28%3a18Z&wctx=rm%3d0%26id%3dpassive%26ru%3dsecure%2fstudent%2fstuportal.aspx&wreply=https%3a%2f%2fsisportal-100380.campusnexus.cloud%2fCMCPortal%2f&AppType=Portal&Role=STUDENT"
              label="Student Portal"
              compact
              external
            /></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

function Brand() {
  return (
    <Link href="/" aria-label="Swinburne home" className="flex items-center gap-3">
      {/* 40x40 (was 32x32) */}
      <Image
        src="/images/swinburne-logo.jpg"
        alt="Swinburne University of Technology"
        width={40}
        height={40}
        priority
        className="rounded-md ring-1 ring-black/10 shadow-sm object-cover"
      />
      <div className="leading-tight">
        <span className="font-semibold tracking-tight">Swinburne</span>
        <span className="ml-1 text-slate-500 hidden sm:inline">Sarawak</span>
      </div>
    </Link>
  );
}

function QuickPill({
  href, label, external, active = false, compact = false,
}: {
  href: string;
  label: string;
  external?: boolean;
  active?: boolean;
  compact?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full border transition whitespace-nowrap " +
    (compact ? "text-xs px-2.5 py-1" : "text-sm px-3.5 py-1.5"); // px-3.5 (was 3)

  const style = active
    ? "border-[#D42A30] text-[#D42A30] bg-[#D42A30]/5"
    : "border-slate-300 text-slate-700 hover:border-[#D42A30] hover:text-[#D42A30]";

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={base + " " + style}
    >
      {label}
      {external && <span className="ml-1" aria-hidden>↗</span>}
    </Link>
  );
}
