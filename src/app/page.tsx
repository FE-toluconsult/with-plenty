import Header from "@/app/ui/Header"
import Image from "next/image"
import Logo from "/public/svg-export/svgexport-7.svg";
import { playfair, montserrat } from "./ui/fonts";
import Button from "@/app/ui/util/Button";


export default function Home() {
  return (
    <main className={`${montserrat.className} min-h-screen`}>
      <Header></Header>

      <article 
      className="w-full max-w-[1200px] mx-auto border-l border-r border-primary-border 
        px-10 pt-14 pb-36 flex-col flex place-items-center gap-10
      ">
        <header className="flex flex-col place-items-center justify-end gap-4 h-[115px]">
          <Image src={Logo} width={57} height={34} alt="Logo" />
          <Image src='/img/text-logo.webp' alt="Text-logo" width={100} height={32} />
        </header>

        <section className="">
          <h1 className={`${playfair.className} text-[7rem] spacing tracking-tight`}>Wealth for life</h1>
          <p className="text-center text-lg text-faded-black font-light">Where modern couples invest and plan <br /> for their future together.</p>
          <form className="flex justify-center mt-5 mb-3 py-6">
            <Button size="lg">Get early access</Button>
          </form>
        </section>
      </article>
      <div className="w-full m-0 p-0 border-t border-t-primary-border" />

      <article 
      className="w-full max-w-[1200px] mx-auto border-l border-r border-primary-border grid grid-cols-2">

        <section className="border-r border-primary-border pb-40">
          
        </section>

        <section className="">
          
        </section>
      </article>
    </main>
  )
}
