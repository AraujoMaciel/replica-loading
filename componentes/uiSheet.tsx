'use-client'

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
import { useState } from "react";

export default function UiSheet(){

    const [menu, setMenu] = useState<boolean>(false);

    return(
      <Sheet>
      <SheetTrigger onClick={()=>{setMenu(true)}}>
        <HiOutlineMenuAlt3 
          className="text-2xl hover:cursor-pointer"
          attributeName="botao menu"
        />
      </SheetTrigger>
      <SheetContent className={`bg-roxo text-white border-none pt-20 ${menu?'visible':'hidden'}`}>
        <SheetHeader className={`${montserrat.className} font-medium`}>
          <SheetTitle className="flex flex-col gap-7 text-white">

              <a onClick={()=>{setMenu(false)}} href="/paginas/sobre">Sobre a Loading</a>
            
              <a onClick={()=>{setMenu(false)}} href="/paginas/portifolio">Portifólio</a>

              <a onClick={()=>{setMenu(false)}} href="/paginas/links">Canais</a>
            
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

  