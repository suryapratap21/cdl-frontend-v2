'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
// import screenshotExpenses from '@/images/screenshots/expenses.png'
// import screenshotPayroll from '@/images/screenshots/payroll.png'
// import screenshotReporting from '@/images/screenshots/reporting.png'
// import screenshotVatReturns from '@/images/screenshots/vat-returns.png'
import network from '@/images/why-cdl/vast-networkjpeg.jpeg'
import ease from '@/images/why-cdl/ease-of-use.jpeg'
import career from '@/images/why-cdl/career-growth.jpeg'
import security from '@/images/why-cdl/security.jpeg'

const features = [
  {
    title: 'Vast Network',
    description: 'Connects with Leading Freight Companies Nationwide.',
    image: network,
    children: (
      <div>
        We understand that the backbone of any successful career in trucking is
        having access to the right opportunities. [Your Website Name] boasts
        connections with some of the most reputable and expansive freight
        companies across the nation. From coast to coast, our network ensures
        that wherever your skills and preferences lie, there&apos;s likely a job
        waiting for you
      </div>
    ),
  },
  {
    title: 'Ease of Use',
    description: 'User-friendly Interface Designed for Drivers.',
    image: ease,
    children: (
      <div>
        Navigating the job market should be as straightforward as driving a
        truck. Our website is designed with your needs in mind. With intuitive
        navigation, quick search functionalities, and an application process
        that takes minutes, we make finding and applying for jobs as seamless as
        possible
      </div>
    ),
  },
  {
    title: 'Career Growth',
    description: 'Offers Tools and Resources for Career Advancement.',
    image: career,
    children: (
      <div>
        At CDLJobsGuru, we believe in not just placing drivers in jobs, but in
        helping them build careers. We provide a suite of resources tailored for
        your professional growth in the trucking industry
      </div>
    ),
  },
  {
    title: 'Security',
    description: 'Assurance of Data Privacy and Secure Job Applications.',
    image: security,
    children: (
      <div>
        In an age where data security is paramount, we ensure that your personal
        and professional information is handled with the utmost confidentiality.
        Our platform uses state-of-the-art security protocols to keep your data
        safe
      </div>
    ),
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-blue-600 pb-28 pt-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
            Why CDLJobsGuru.com
          </h2>
          <p className="mt-6 text-lg tracking-tight text-blue-100">
            Unlock Endless Opportunities and Drive Your Career Forward with
            CDLJobsGuru.
          </p>
        </div>
        <TabGroup
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <TabList className="relative z-10 flex w-full gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className="lg:col-span-7">
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="relative mt-10 w-[45rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]">
                      <Image
                        className="relative z-0 w-full blur-[2px]"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                      {/* a dark overlay */}
                      <div className="absolute top-0 z-10 h-full w-full bg-slate-900/[.6]" />
                      <div className="absolute inset-x-4 inset-y-4 z-0 z-20 text-white md:inset-x-12 md:inset-y-1/4 lg:inset-x-20 2xl:inset-x-1/3">
                        <div className="max-w-72 rounded-lg p-4 text-lg font-medium drop-shadow-lg backdrop-blur md:max-w-[24rem] lg:max-w-[32rem] lg:p-8 xl:max-w-[40rem]">
                          {feature.children}
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
