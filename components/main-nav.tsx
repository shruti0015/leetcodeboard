"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import Image from "next/image"
import whiteboard from "./assets/whiteboard.jpg"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <Image src={whiteboard} alt="" className="h-12 w-12 rounded-lg" />
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <span className="hidden font-bold sm:inline-block">LC Board</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/problems"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/problems" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Problems
        </Link>
        <Link
          href={siteConfig.links.github}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block"
          )}
        >
          GitHub
        </Link>
      </nav>
    </div>
  )
}
