"use client";

import Link from "next/link";

import { usePathname, useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";

const NavbarRoutes = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isTeacherPage = pathname?.startsWith("/teacher");
  const isPlayerPage = pathname?.includes("/chapter");
  const isCoursePage = pathname?.includes("/courses");
  const isSearchPage = pathname === "/search";

  return (
    <div className='flex gap-x-2 ml-auto'>
      {isTeacherPage || isPlayerPage ? (
        <Button>
          <LogOut className='h-4 w-4 mr-2' />
          Exit
        </Button>
      ) : (
        <Link href='/teachers/courses'>
          <Button>Teacher Mode</Button>
        </Link>
      )}
      <UserButton />
    </div>
  );
};

export default NavbarRoutes;
