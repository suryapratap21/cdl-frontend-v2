'use client'

import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { getDotDetails } from './api'
import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

export default function CompanySignUpForm() {
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState({
    dot: '',
    name: '',
    email: '',
  })
  const onSubmit = async () => {
    setLoading(true)
    console.log('submitting form')
    await getDotDetails(data)
    setIsOpen(true)
    setLoading(false)
  }
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-md rounded-xl bg-slate-900/50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Payment successful
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Your payment has been successfully submitted. We’ve sent you an
                email with all of the details of your order.
              </p>
              <div className="mt-4">
                <Button
                  className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                  onClick={() => setIsOpen(false)}
                >
                  Got it, thanks!
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
      <TextField
        label="Dot Number"
        name="dot"
        type="text"
        autoComplete="dot-number"
        required
        value={data.dot}
        onChange={(e) => setData({ ...data, dot: e.target.value })}
      />
      <TextField
        label="Name"
        name="name"
        type="text"
        autoComplete="given-name"
        required
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <TextField
        className="col-span-full"
        label="Email address"
        name="email"
        type="email"
        autoComplete="email"
        required
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      {/* <SelectField
          className="col-span-full"
          label="How did you hear about us?"
          name="referral_source"
        >
          <option>AltaVista search</option>
          <option>Super Bowl commercial</option>
          <option>Our route 34 city bus ad</option>
          <option>The “Never Use This” podcast</option>
        </SelectField> */}
      <div className="col-span-full">
        <Button
          type="submit"
          onClick={onSubmit}
          variant="solid"
          color="blue"
          className="w-full"
          loading={loading}
          disabled={loading}
        >
          <span>
            Sign up <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
    </div>
  )
}
