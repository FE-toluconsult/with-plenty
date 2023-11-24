import NavLink from "@/app/ui/util/NavLink"
import Button from "@/app/ui/util/Button"
import HomeIcon from "/public/svg-export/svgexport-2.svg";
import AboutIcon from "/public/svg-export/svgexport-4.svg";
import PricingIcon from "/public/svg-export/svgexport-6.svg";
import Logo from "/public/svg-export/svgexport-7.svg";
import Image from "next/image";

function Header() {
  return (
    <header className="w-full max-w-[1200px] sticky mx-auto pt-4 border-l border-r border-primary-border">
      <nav className="h-[73px] sticky top-2 w-[97%] border border-[#f1f1f1] rounded-2xl flex bg-white bg-opacity-80 place-items-center mx-auto">
        <div className="px-8 flex justify-center gap-3 w-full">
          <ul className="flex w-[45%]">
            <li className="inline-flex items-center w-[142px]"> <NavLink text="What is Plenty?" icon={HomeIcon} to="/" /></li>
            <li className="inline-flex items-center w-[102px]"> <NavLink text="About us" icon={AboutIcon} to="/about"/></li>
            <li className="inline-flex items-center w-[99px]"> <NavLink text="Pricing" icon={PricingIcon} to="/pricing" /></li>
          </ul>
          <div className="relative w-[41px] h-[40px]">
            <Image className="absolute top-2/4 -translate-y-2/4" src={Logo} width={41} height={25} alt="home page" />
          </div>
          <div className="w-[45%] flex justify-end items-center">
            <Button><span className="text-xs spacing">Sign up now</span></Button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header