'use client'

import Image from "next/image"
import {BiLogoGmail} from "react-icons/bi"
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import UiSheet from "./uiSheet";

export default function Header(){

    const [menu, setMenu] = useState<boolean>(false);

    return(
        <div className="bg-roxo2 text-white py-7">

            {
                //versão mobile
            }

            <div className="flex justify-between items-center px-10 sm:hidden">
                <div>
                    <Link href='/'>
                        <Image 
                            src="/logo.svg"
                            width={100}
                            height={50}
                            alt="logo loading"
                        />
                    </Link>
                </div>

                <div className="sm:hidden">
                    <UiSheet />
                </div>
                           
            </div>

            {
            //Versao desktop
            }

            <div className={`
                    sm:flex flex-row justify-between px-16 items-center py-4 hidden sm:visible
                `}>
                <div className="flex items-center gap-4 justify-between flex-1">

                    <div className="flex gap-2 items-center">
                        <Link href='/'>
                            <Image 
                                src="/logo.svg"
                                width={100}
                                height={50}
                                alt="logo loading"
                                className="mr-2"
                            />
                        </Link>

                        <Link href='/'>
                            <div className="lg:flex hidden lg:visible flex-col lg:border-l-2 lg:border-white px-3">
                                <h3 className={`text-[21px] font-normal 
                                    text-white/75`}>
                                    Desenvolvimento de
                                </h3>
                                <h2 className={`text-[21px] font-semibold text-white/85`}>Sites e Soluções Digitais</h2>
                            </div>
                        </Link>
                    </div>
                        
                    <div className="flex gap-14">

                        <ul className={`flex gap-10 montserrat.className font-bold text-[18px]`}>
                            <li className="hover:cursor-pointer hover:text-ciano"><Link href='/paginas/sobre'>Sobre a Loading</Link></li>
                            <li className="hover:cursor-pointer hover:text-ciano"><Link href='/paginas/portifolio'>Portifólio</Link></li>
                        </ul>

                        <div className="flex justify-center items-center gap-4 text-3xl">
                            <a href="https://br.linkedin.com/company/loading-junior"><TiSocialLinkedin /></a>
                            <a href="https://www.instagram.com/loadingjr/"><IoLogoInstagram /></a>
                            <a href="mailto:oi.loadingjr@gmail.com"><BiLogoGmail /></a>
                        </div>
                        
                    </div>
                    

                </div>
            </div>
        </div>
    )
}