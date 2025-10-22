"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileNavSheet, { SheetContext } from "./mobile-nav-sheet";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { components, resources } from "@/components/nav-menu";
import Image from "next/image";
import { useContext } from "react";
import { useRouter } from "next/navigation";

export default function MobileNav() {
  const aboutUs = {
    title: "About Us",
    href: "/about",
    description: "Get to know our mission, values, and team.",
  };
  const combinedNavItems = [aboutUs, ...components, ...resources];
  return (
    <MobileNavSheet>
      <div className="flex flex-col items-center mb-6 pt-6">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets%2F61b2d7787d0d48b9aa593e63b45f2422%2F7603052f03884c35846074307bab3b80"
          alt="Essential Care Services Logo"
          width={120}
          height={120}
          className="mb-4"
        />
        <DialogTitle className="text-2xl font-bold text-primary">
          Menu
        </DialogTitle>
      </div>
      <DialogDescription className="sr-only">
        Navigate through the menu items
      </DialogDescription>
      <div className="flex flex-col">
        {combinedNavItems.map(
          (item, index) =>
            item.href && (
              <MobileNavItem
                key={item.href}
                href={item.href}
                isLast={index === combinedNavItems.length - 1}
              >
                {item.title}
              </MobileNavItem>
            )
        )}
      </div>
    </MobileNavSheet>
  );
}

interface MobileNavItemProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  isLast?: boolean;
}

function MobileNavItem({
  href,
  className,
  children,
  isLast,
  ...props
}: MobileNavItemProps) {
  const { setOpen } = useContext(SheetContext);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    router.push(href);
  };

  return (
    <Link
      href={href}
      className={cn(
        "py-3 px-6 text-base transition-colors hover:bg-accent hover:text-accent-foreground",
        !isLast && "border-b border-border",
        className
      )}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
