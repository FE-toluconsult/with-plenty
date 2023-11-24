'use client'
import Image from "next/image"
import Link from "next/link"
import './navlink.css'
import { usePathname } from "next/navigation"

function NavLink({icon, text, to}: {icon: any, text: string, to: string}) {
  const pathname = usePathname()
  const isActive = () => pathname === to

  return (
    <Link href={to} className="slide_cover inline-flex align-top items-stretch gap-2">
      <div className={`${isActive() ? '' : 'slide-up'} w-[15px] min-w-[15px] h-auto`}>
        <Image src={icon} width={15} height={14} alt="home page" />
      </div>
      <div className="text-xs text-[#252627] bg-transparent font-semibold">{text}</div>
    </Link>
  )
}

export default NavLink