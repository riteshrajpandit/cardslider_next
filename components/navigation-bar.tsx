"use client";

import { Home, BookOpen, ShoppingBag, MoreHorizontal, User } from "lucide-react";
import NavLink from "@/components/ui/nav-link";

export default function NavigationBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black text-white flex justify-between items-center py-2 px-6 z-50 border-t border-gray-800">
      <NavLink href="/" icon={<Home size={24} />} label="Home" />
      <NavLink href="/blog" icon={<BookOpen size={24} />} label="Blog" />
      <NavLink href="/shop" icon={<ShoppingBag size={24} />} label="Shop" />
      <NavLink href="/more" icon={<MoreHorizontal size={24} />} label="More" />
      <NavLink href="/profile" icon={<User size={24} />} label="Profile" />
    </nav>
  );
}