"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/",          label: "Home",       icon: "🏠" },
  { href: "/messages",  label: "Messages",   icon: "💬" },
  { href: "/favourites",label: "Favourites", icon: "⭐" },
  { href: "/menu",      label: "Menu",       icon: "▦" },
] as const;

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="fixed bottom-0 inset-x-0 border-t bg-white/92 backdrop-blur safe-bottom">
      <div className="maxw container-px h-16 flex items-center justify-between">
        {items.map((it) => {
          const active = pathname === it.href;
          return (
            <Link
              key={it.href}
              href={it.href}
              aria-current={active ? "page" : undefined}
              className={`relative text-sm flex flex-col items-center gap-0.5 ${
                active ? "text-[#D42A30] font-semibold" : "text-gray-600"
              }`}
            >
              <span aria-hidden className="text-base">{it.icon}</span>
              <span>{it.label}</span>
              {active && <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#D42A30]" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
