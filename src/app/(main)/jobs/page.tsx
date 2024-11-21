// 'use client'

import React from 'react'
import {
  Search,
  MapPin,
  Filter,
  Grid,
  List,
  ChevronDown,
  Star,
  Heart,
  BadgeCheck,
} from 'lucide-react'
import Dropdown from '@/components/Dropdown'
import { Button } from '@/components/Button'
import Image from 'next/image'

// Job Card Component
function JobCard({ job }: { job: any }) {
  return (
    <div className="rounded-lg border p-6 transition-shadow hover:shadow-md">
      <div className="flex gap-4">
        <div className="h-12 w-12 overflow-hidden rounded md:h-32 md:w-32">
          <Image
            src={job.logo || '/placeholder.svg?height=48&width=48'}
            alt={job.company}
            width={150}
            height={150}
            objectFit="contain"
            className="h-full w-full"
          />
        </div>
        <div className="flex-1">
          <p className="flex items-center gap-1 text-sm font-bold text-blue-700">
            {job.company}{' '}
            {job.verified && (
              <BadgeCheck fill="#14a077" className="h-6 w-6 text-white" />
            )}
          </p>
          <h3 className="text-lg font-semibold">{job.title}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
            <span className="h-1 w-1 rounded-full bg-gray-500" />
            <span>{job.postedTime}</span>
          </div>
          <div className="mt-3 flex items-center gap-2">
            {job.badges.map((badge: string) => (
              <span
                key={badge}
                className="rounded-full bg-gray-100 px-2 py-1 text-xs font-semibold"
              >
                {badge}
              </span>
            ))}
            <div className="ml-auto flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < job.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-semibold">{job.salary}</span>
              <span className="text-sm text-gray-500">
                {job.selectSalaryType}
              </span>
            </div>
            <div className="text-sm text-gray-500">
              {job.driverRequirements}
            </div>
          </div>
        </div>
        <button className="ml-2 self-start text-gray-400 hover:text-gray-600">
          <Heart className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

// Search Bar Component
function SearchBar() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow md:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Job title, keywords or company"
          className="w-full rounded-md border border-gray-300 py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <Dropdown
        trigger={
          <div className="flex items-center">
            <MapPin className="mr-2 h-4 w-4" />
            All Location
            <ChevronDown className="ml-2 h-4 w-4" />
          </div>
        }
        items={['All Location', 'Remote Only', 'United States']}
      />
      <Dropdown
        trigger={
          <div className="flex items-center">
            <Filter className="mr-2 h-4 w-4" />
            Category
            <ChevronDown className="ml-2 h-4 w-4" />
          </div>
        }
        items={['All', 'Dry', 'FlatBed', 'Reefer']}
      />
      <Button variant="solid" color="blue" className="px-8 py-2">
        Find Jobs
      </Button>
    </div>
  )
}

// Filter Bar Component
function FilterBar() {
  return (
    <div className="flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50">
          <Filter className="h-4 w-4" />
          Filters
        </button>
        <div className="flex items-center gap-2 rounded-md border p-1">
          <button className="rounded p-1 hover:bg-gray-100">
            <Grid className="h-4 w-4" />
          </button>
          <button className="rounded p-1 hover:bg-gray-100">
            <List className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm text-gray-500">1249 jobs recommended for you</p>
      </div>
      <div className="flex items-center gap-4">
        <Dropdown
          trigger={
            <div className="flex items-center">
              12 Per Page
              <ChevronDown className="ml-2 h-4 w-4" />
            </div>
          }
          items={['12 Per Page', '24 Per Page', '48 Per Page']}
        />
        <Dropdown
          trigger={
            <div className="flex items-center">
              Sort by (Default)
              <ChevronDown className="ml-2 h-4 w-4" />
            </div>
          }
          items={['Most Recent', 'Highest Salary', 'Most Relevant']}
        />
      </div>
    </div>
  )
}

// Main Component
export default async function Component({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  console.log('params: ', searchParams)
  let url = 'https://api.cdljobsguru.com/api/job?viewSize=100'
  if (searchParams) {
    for (const [key, value] of Object.entries(searchParams)) {
      if (value) {
        url += `&${key}=${value}`
      }
    }
  }
  const response = await fetch(url)
  const data = await response.json()
  return (
    <div className="mx-auto max-w-7xl space-y-6 p-4">
      <SearchBar />
      <FilterBar />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {data.job.map((job: any) => (
          <JobCard
            key={job._id}
            job={{
              company: job.company.company_name,
              title: job.title,
              verified: true,
              location: job.hiringStates.join(', '),
              postedTime: '2 days ago',
              badges: ['Part-time', 'Remote'],
              rating: 4,
              salary: job.salary,
              selectSalaryType: job.selectSalaryType,
              daysLeft: 22,
              driverRequirements: job.driverRequirements,
              logo: job.company.media.length
                ? job.company.media[0].url
                : '/placeholder.svg?height=48&width=48',
            }}
          />
        ))}
      </div>
    </div>
  )
}
