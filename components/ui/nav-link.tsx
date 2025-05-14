"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function NavLink({ href, icon, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={cn(
        "flex flex-col items-center justify-center space-y-1 text-xs font-medium",
        isActive ? "text-blue-500" : "text-gray-400"
      )}
    >
      <div className={cn(
        "flex items-center justify-center w-10 h-10 rounded-full",
        isActive ? "bg-blue-500 text-white" : "text-gray-400"
      )}>
        {icon}
      </div>
      <span>{label}</span>
    </Link>
  );
}