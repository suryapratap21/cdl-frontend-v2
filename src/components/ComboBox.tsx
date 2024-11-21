'use client'

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react'
import { ChevronDownIcon } from 'lucide-react'
import { useState } from 'react'

type Option = {
  label: string
  value: string
}

export default function ComboBox({
  options,
  inputOptions,
}: {
  options: Option[]
  inputOptions?: any
}) {
  const [selectedOption, setSelectedOption] = useState<Option>()
  const [query, setQuery] = useState('')

  const handleSelect = (option: Option) => {
    if (!option) return
    setSelectedOption(option)
    setQuery(option.label)
  }

  const filteredPeople =
    query === ''
      ? options
      : options.filter((option) => {
          return option.label.toLowerCase().includes(query.toLowerCase())
        })

  return (
    <Combobox
      value={selectedOption}
      onChange={handleSelect}
      onClose={() => setQuery('')}
    >
      <div className="relative">
        <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
          <ChevronDownIcon className="size-4 fill-white/60 group-data-[hover]:fill-white" />
        </ComboboxButton>
        <ComboboxInput
          aria-label="Assignee"
          displayValue={(option: Option) => option?.label}
          onChange={(event) => setQuery(event.target.value)}
          {...inputOptions}
        />
      </div>
      <ComboboxOptions
        anchor="bottom"
        className="z-50 mt-2 !max-h-60 w-[var(--input-width)] rounded-md border bg-white shadow-lg ring-1 ring-black ring-opacity-5 empty:invisible focus:outline-none"
      >
        {filteredPeople.map((option) => (
          <ComboboxOption
            key={option.value}
            value={option}
            className="px-4 py-2 data-[focus]:bg-slate-100"
          >
            {option.label}
          </ComboboxOption>
        ))}
      </ComboboxOptions>
    </Combobox>
  )
}
