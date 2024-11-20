'use client'

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import {
  Share2,
  Heart,
  MapPin,
  Clock,
  Star,
  BadgeCheck,
  Plus,
  Minus,
} from 'lucide-react'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

function CompanyInfo({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-b border-gray-200 py-4 last:border-0">
      <h3 className="text-sm font-medium text-gray-500">{label}</h3>
      <p className="mt-1 text-sm text-gray-900">{value}</p>
    </div>
  )
}

function JobHeader() {
  return (
    <div className="mb-8 flex items-start gap-6">
      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
        <img
          src="/placeholder.svg?height=64&width=64"
          alt="Rockstar Games"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-emerald-600">Rockstar Games New York</p>
            <h1 className="flex items-center gap-2 text-2xl font-semibold">
              Senior UI/UX Designer
              <BadgeCheck className="h-5 w-5 text-blue-500" />
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
              <Share2 className="h-5 w-5" />
            </button>
            <button className="rounded-full p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
              <Heart className="h-5 w-5" />
            </button>
            <button className="rounded-lg bg-emerald-600 px-6 py-2 text-white transition-colors hover:bg-emerald-700">
              Apply Now
            </button>
          </div>
        </div>
        <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            Las Vegas, NV 89107, USA
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />2 days ago
          </span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Full-time
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm">
            Remote
          </span>
          <div className="ml-auto flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="h-4 w-4 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
        <div className="mt-3">
          <span className="text-2xl font-semibold text-emerald-600">
            $83,000 - $110,000
          </span>
          <span className="ml-1 text-sm text-gray-500">/year</span>
        </div>
      </div>
    </div>
  )
}

function JobContent() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="mb-3 text-lg font-semibold">Full Job Description</h2>
        <div className="space-y-4 text-gray-600">
          <p>
            Are you a User Experience Designer with a track record of delivering
            intuitive digital experiences that drive results? Are you a
            strategic storyteller and systems thinker who can concept and craft
            smart, world-class campaigns across a variety of mediums?
          </p>
          <p>
            Deloitte&apos;s Green Dot Agency is looking to add a Lead User
            Experience Designer to our experience design team. We want a
            passionate creative who&apos;s inspired by new trends and emerging
            technologies, and is able to integrate them into memorable user
            experiences. A problem solver who is entrepreneurial, collaborative,
            hungry, and humble; can deliver beautifully designed, leading-edge
            experiences under tight deadlines; and who has demonstrated proven
            expertise.
          </p>
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-lg font-semibold">The Work You&apos;ll Do:</h2>
        <ul className="list-disc space-y-2 pl-5 text-gray-600">
          <li>
            Support the Creative Directors and Associate Creative Directors of
            experience design to concept and oversee the production of bold,
            innovative, award-winning campaigns and digital experiences.
          </li>
          <li>
            Make strategic and tactical UX decisions related to design and
            usability as well as features and functions.
          </li>
          <li>
            Creates low- and high-fidelity wireframes that represent a
            user&apos;s journey.
          </li>
          <li>
            Effectively pitch wireframes to and solutions to stakeholders.
            You&apos;ll be the greatest advocate for our work, but you&apos;ll
            also listen and internalize feedback so that we can come back with
            creative that exceeds expectations.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default function Component() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex-1">
          <JobHeader />

          <div className="rounded-lg bg-white shadow">
            <TabGroup>
              <TabList className="flex border-b border-gray-200">
                {['About', 'Jobs (2)', 'Reviews'].map((tab) => (
                  <Tab
                    key={tab}
                    className={({ selected }) =>
                      classNames(
                        'px-6 py-3 text-sm font-medium focus:outline-none',
                        selected
                          ? 'border-b-2 border-emerald-600 text-emerald-600'
                          : 'text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      )
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </TabList>
              <TabPanels className="p-6">
                <TabPanel>
                  <JobContent />
                </TabPanel>
                <TabPanel>Jobs content here</TabPanel>
                <TabPanel>Reviews content here</TabPanel>
              </TabPanels>
            </TabGroup>
          </div>
        </div>

        <div className="lg:w-80">
          <div className="space-y-4 rounded-lg bg-white p-6 shadow">
            <CompanyInfo label="Website" value="Themesflat.vn" />
            <CompanyInfo label="Email" value="themesflat@gmail.com" />
            <CompanyInfo label="Industry" value="Internet Publishing" />
            <div className="relative h-64 overflow-hidden rounded-lg bg-gray-100">
              <div className="absolute right-4 top-4 flex flex-col gap-2">
                <button className="rounded bg-white p-2 shadow hover:bg-gray-50">
                  <Plus className="h-4 w-4" />
                </button>
                <button className="rounded bg-white p-2 shadow hover:bg-gray-50">
                  <Minus className="h-4 w-4" />
                </button>
              </div>
              <img
                src="/placeholder.svg?height=256&width=320"
                alt="Location map"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
