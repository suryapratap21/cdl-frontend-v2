import { type Metadata } from 'next'

import { SlimLayout } from '@/components/SlimLayout'
import CompanySignUpForm from './form'

export const metadata: Metadata = {
  title: 'Company Sign Up | CDLJobsGuru',
}

export default function CompanySignUp() {
  return (
    <SlimLayout>
      <h2 className="mt-8 text-lg font-semibold text-gray-900 md:mt-20">
        Get started with CDLJobsGuru
      </h2>
      <p className="mt-2 text-sm text-gray-700">
        Please fill out the basic information below to get started.
      </p>
      <CompanySignUpForm />
    </SlimLayout>
  )
}
