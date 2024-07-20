import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetOverlay,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import {BiLogoGmail} from "react-icons/bi"
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { montserrat } from "@/app/fontes";

export default function UiSheet(){
    return(
      <Sheet>
      <SheetTrigger>
        <HiOutlineMenuAlt3 
          className="text-2xl hover:cursor-pointer"
        />
      </SheetTrigger>
      <SheetContent className={`bg-roxo text-white border-none pt-20`}>
        <SheetHeader className={`${montserrat.className} font-medium`}>
          <SheetTitle className="flex flex-col gap-7 text-white">
            <Link href="/paginas/sobre">Sobre a Loading</Link>
            
            <Link href="/paginas/portifolio">Portifólio</Link>
          </SheetTitle>
          <SheetDescription className="absolute bottom-4 w-full left-0">
            <div className="flex gap-4 justify-center items-center text-3xl text-white">
              <a href="https://br.linkedin.com/company/loading-junior"><TiSocialLinkedin /></a>
              <a href="https://www.instagram.com/loadingjr/"><IoLogoInstagram /></a>
              <a href="mailto:oi.loadingjr@gmail.com"><BiLogoGmail /></a>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
    )
}

  