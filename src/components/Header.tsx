'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:duration-150 data-[leave]:duration-100 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <MobileNavLink href="/">Home</MobileNavLink>
        <MobileNavLink href="/jobs">Trucking Jobs</MobileNavLink>
        <MobileNavLink href="/companies">Trucking Companies</MobileNavLink>
        <MobileNavLink href="/news">News</MobileNavLink>
        <MobileNavLink href="/about">About</MobileNavLink>
        <MobileNavLink href="/contact">Contact</MobileNavLink>
        <hr className="m-2 border-slate-300/40" />
        <Link
          className="block w-full p-2"
          href="https://admin.cdljobsguru.com/"
          target="_blank"
        >
          Login
        </Link>
        <span className="block md:hidden">
          <MobileNavLink href="/register">Company Signup</MobileNavLink>
        </span>
        <span className="block md:hidden">
          <MobileNavLink href="/register">Driver Signup</MobileNavLink>
        </span>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-solid border-b-neutral-200 bg-white p-4 shadow lg:px-8 lg:py-6">
      <nav className="relative z-50 mx-auto flex max-w-8xl justify-between">
        <div className="flex items-center xl:gap-x-12">
          <Link href="#" aria-label="Home">
            <Logo className="h-10 w-auto" />
          </Link>
          <div className="hidden xl:flex xl:gap-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/jobs">Trucking Jobs</NavLink>
            <NavLink href="/companies">Trucking Companies</NavLink>
            <NavLink href="/news">News</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
        <div className="flex items-center gap-x-5 xl:gap-x-8">
          <div className="hidden xl:block">
            <NavLink target="_blank" href="https://admin.cdljobsguru.com/">
              Login
            </NavLink>
          </div>
          <Button className="hidden md:block" href="/register" color="blue">
            <span>Company Signup</span>
          </Button>
          <Button className="hidden md:block" href="/register" color="blue">
            <span>Driver Signup</span>
          </Button>
          <div className="-mr-1 xl:hidden">
            <MobileNavigation />
          </div>
        </div>
      </nav>
    </header>
  )
}
