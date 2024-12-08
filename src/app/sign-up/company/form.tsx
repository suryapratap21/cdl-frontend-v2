'use client'

import { useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'
import { getDotDetails, createCompany } from './api'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import CompanyLogoPicker from './LogoPicker'

export default function CompanySignUpForm() {
  const [loading, setLoading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState({
    dot: '',
    name: '',
    email: '',
  })
  const [dotDetails, setDotDetails] = useState<any>({
    isFetched: false,
  })
  const [croppedImage, setCroppedImage] = useState<Blob | null>(null)

  const handleImageCropped = (croppedImage: Blob | null) => {
    setCroppedImage(croppedImage)
  }
  const onSubmit = async () => {
    setLoading(true)
    if (dotDetails.isFetched && dotDetails?.usdot) {
      if (!croppedImage) {
        toast.error('Logo is required!')
      } else {
        const formData = new FormData()
        formData.append('dot', data.dot)
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('logo', croppedImage)
        const response = await createCompany(formData)
        console.log(response)
        if (response?.success) {
          toast.success('Company created successfully!')
          setData({ dot: '', name: '', email: '' })
          setDotDetails({ isFetched: false })
        } else {
          toast.error('Something went wrong!')
        }
      }
    } else {
      console.log('submitting form')
      const dotDetails = await getDotDetails(data)
      setDotDetails(dotDetails)
      setIsOpen(true)
    }
    setLoading(false)
  }

  //   react-image-crop code
  return (
    <div className="my-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-50 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto bg-slate-900/50">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="data-[closed]:transform-[scale(95%)] w-full max-w-lg rounded-xl bg-slate-900/50 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-xl font-medium text-white">
                Welcome, {dotDetails.dbaName || dotDetails.legalName}
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white">
                I verify that the information provided above is my company
                information and that i am authorized to provided this
                information to CDLJobsGuru.
              </p>
              <div className="mt-4 flex gap-4">
                <Button
                  variant="outline"
                  className="text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="solid"
                  color="white"
                  //   className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                  onClick={() => {
                    setDotDetails((prev: any) => ({ ...prev, isFetched: true }))
                    setIsOpen(false)
                  }}
                >
                  Confirm!
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
      {dotDetails.isFetched && dotDetails?.usdot && (
        <>
          <TextField
            label="Name"
            name="name"
            type="text"
            value={dotDetails.dbaName || dotDetails.legalName}
            disabled={true}
          />
          <TextField
            label="Phone"
            name="phone"
            type="text"
            value={dotDetails.phone}
            disabled={true}
          />
          <TextField
            className="col-span-full"
            label="Address"
            name="address"
            type="text"
            value={dotDetails.physicalAddress}
            disabled={true}
          />
          <TextField
            label="Truck Count"
            name="truck_count"
            type="text"
            value={dotDetails.power_units_count}
            disabled={true}
          />
          <TextField
            label="Driver Count"
            name="driver_count"
            type="text"
            value={dotDetails.driver_count}
            disabled={true}
          />
          <CompanyLogoPicker
            aspectRatio={1}
            onCropComplete={handleImageCropped}
          />
        </>
      )}
      <div className="col-span-full">
        <Button
          type="submit"
          onClick={onSubmit}
          variant="solid"
          color="blue"
          className="w-full"
          loading={loading ? loading : undefined}
          disabled={loading}
        >
          <span>
            {dotDetails.isFetched && dotDetails?.usdot ? (
              <>
                Sign up <span aria-hidden="true">&rarr;</span>
              </>
            ) : (
              'Search'
            )}
          </span>
        </Button>
      </div>
    </div>
  )
}
