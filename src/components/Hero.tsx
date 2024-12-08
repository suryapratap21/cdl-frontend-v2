import Image from 'next/image'
import { ArrowUp, MapPin, Search } from 'lucide-react'

import jobLocations from '@/config/jobLocations.json'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import bannerPerson from '@/images/banner/bg.png'
// import bannerPerson from '@/images/banner/bg-person.webp'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import ComboBox from './ComboBox'

export function Hero() {
  return (
    <Container className="max-w-8xl pb-16 pt-20 text-center lg:pt-32">
      <div className="grid items-center gap-6 lg:grid-cols-2">
        <div>
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Your{' '}
            <span className="relative whitespace-nowrap text-blue-700">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">Dream Job</span>
            </span>{' '}
            is waiting for you.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Start Your Journey Today - Find Jobs, Employment & Career
            Opportunities.
          </p>
          <div className="mx-auto mt-10 flex max-w-3xl flex-col justify-between gap-x-6 rounded-md bg-white p-4 shadow-md md:flex-row">
            <div className="flex grow items-center gap-x-2">
              <Search size={28} />
              <input
                className="h-16 w-full border-0 focus:border-0 focus:ring-0 active:border-0"
                type="text"
                placeholder="Search job title or keyword"
              />
            </div>
            <div className="flex grow items-center gap-x-2">
              <MapPin size={28} />
              <ComboBox
                options={jobLocations}
                inputOptions={{
                  placeholder: 'City or Zip Code',
                  className:
                    'h-16 w-full border-0 focus:border-0 focus:ring-0 active:border-0',
                  'aria-label': 'City or Zip Code',
                }}
              />
              {/* <input
                className="h-16 w-full border-0 focus:border-0 focus:ring-0 active:border-0"
                type="text"
                placeholder="City or Zip Code"
              /> */}
            </div>
            <Button className="mt-4 px-8 md:mt-0" color="blue" href="/jobs">
              Search Jobs
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative inline-block">
            <Image
              className="relative z-10 mx-auto rounded-md xl:h-[500px] xl:w-auto"
              src={bannerPerson}
              alt="Hero section banner"
            />
            <div
              style={{
                bottom: '-1.8rem',
                right: '-0.8rem',
                width: '85%',
                height: '90%',
                transform: 'translate3d(0px, 0px, 0px)',
              }}
              className="shape absolute z-0 h-full w-full rounded bg-gradient-to-r from-sky-300 to-blue-300 md:block lg:block xl:block"
            ></div>

            <div className="absolute -start-10 top-10 z-20">
              <div className="inline-block rounded-xl border-4 border-blue-600/40 bg-white p-4 drop-shadow-md">
                <div className="flex items-end">
                  <h2 className="text-default-950 text-2xl font-medium">
                    132&nbsp;
                  </h2>
                  <span className="text-primary flex items-center text-sm font-medium text-emerald-600">
                    <ArrowUp size={14} />
                    12.5%
                  </span>
                </div>
                <p className="mt-1 text-base">Jobs Filled</p>
              </div>
            </div>
          </div>
          {/* <div className="relative inline-block rounded-xl border border-red-400 bg-gradient-to-r from-rose-300 to-red-300 p-6">
            <Image
              className="mx-auto rounded-md xl:h-[500px] xl:w-full"
              src={bannerPerson}
              alt="Hero section banner"
            />
            <div className="hidden xl:block">
              <div className="absolute -start-12 top-10">
                <div className="inline-block">
                  <div className="border-default-200 rounded-full border bg-white/80 shadow backdrop-blur-lg">
                    <div className="max-w-sm px-4 py-4 text-center">
                      <p className="text-default-950 text-base">Donec</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -end-12 bottom-10 top-auto">
                <div className="inline-block">
                  <div className="border-default-200 rounded-full border bg-white/80 shadow backdrop-blur-lg">
                    <div className="max-w-sm px-4 py-4 text-center">
                      <p className="text-default-950 text-base">Donec</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div className="mt-24 lg:mt-24">
        <p className="font-display text-base text-slate-900">
          Trusted by these companies so far
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}
