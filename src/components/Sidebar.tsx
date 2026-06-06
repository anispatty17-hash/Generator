// placeholder
"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Inbox,
  Smartphone,
  Phone,
  BookOpen
} from "lucide-react";

const menus = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard
  },
  {
    name: "Inbox",
    href: "/inbox",
    icon: Inbox
  },
  {
    name: "Devices",
    href: "/devices",
    icon: Smartphone
  },
  {
    name: "Numbers",
    href: "/numbers",
    icon: Phone
  },
  {
    name: "Documentation",
    href: "/docs",
    icon: BookOpen
  }
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-[#111827] border-r border-gray-800">
      <div className="p-6">
        <h1 className="font-bold text-cyan-400 text-xl">
          ANZZZ SMS GATEWAY
        </h1>
      </div>

      <nav className="px-4">
        {menus.map((menu) => {
          const Icon = menu.icon;

          return (
            <Link
              key={menu.href}
              href={menu.href}
              className="flex items-center gap-3 p-4 rounded-xl hover:bg-slate-800 transition"
            >
              <Icon size={18} />
              {menu.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}