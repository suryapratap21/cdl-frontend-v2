import Image from 'next/image'
import Link from 'next/link'
import cdlLogo from '@/images/logos/cdl-logo.png'

export function Logo({ className }: { className: string }) {
  return (
    <div className={`max-w ${className}`}>
      <Image
        src={cdlLogo}
        alt="logo"
        // width={539}
        // height={122}
        className="h-full w-auto"
      />
    </div>
  )
}
