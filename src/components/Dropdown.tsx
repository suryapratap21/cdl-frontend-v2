'use client'

import React from 'react'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from '@headlessui/react'

// Dropdown Component
export default function Dropdown({
  trigger,
  items,
}: {
  trigger: React.ReactNode
  items: string[]
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <MenuButton className="inline-flex w-full justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100">
        {trigger}
      </MenuButton>
      <Transition
        as={React.Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item) => (
              <MenuItem key={item}>
                {({ active }) => (
                  <a
                    href="#"
                    className={`${
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
                    } block px-4 py-2 text-sm`}
                  >
                    {item}
                  </a>
                )}
              </MenuItem>
            ))}
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
