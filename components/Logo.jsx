import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <div className="hidden lg:flex">
      <Link aria-label="Home" href="/">
        <Image
          src="/logo.svg"
          alt="Protocol"
          width={100}
          height={24}
          className="h-6 w-auto"
        />
      </Link>
    </div>
  )
}
