'use client'

import Image from "next/image"
import { montserrat } from "@/app/fontes"
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoIosCloseCircle } from "react-icons/io";
import {BiLogoGmail} from "react-icons/bi"
import { TiSocialLinkedin } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

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
                    <HiOutlineMenuAlt3 
                    onClick={() => {setMenu(!menu)}}
                    className="text-2xl hover:cursor-pointer"/>
                </div>
                
                <div className={`w-64 sm:w-80 h-[100%] bg-roxo absolute right-0 bottom-0 ${menu?'visible':'hidden'} z-50`}>
                    <div className="p-7 text-3xl flex justify-end hover:cursor-pointer">
                        <IoIosCloseCircle onClick={() => {setMenu(!menu)}}/>
                    </div>
                    <div className="flex flex-col justify-center items-end p-7 gap-3 text-lg">
                            <Link href='/paginas/sobre' onClick={() => {setMenu(!menu)}}>Sobre a Loading</Link>
                            <Link href='/paginas/portifolio' onClick={() => {setMenu(!menu)}}>Portifólio</Link>
                    </div>
                    <div className="absolute w-full py-5 bottom-0">
                        <div className="flex gap-4 justify-center items-center text-3xl">
                            <a href="https://br.linkedin.com/company/loading-junior"><TiSocialLinkedin /></a>
                            <a href="https://www.instagram.com/loadingjr/"><IoLogoInstagram /></a>
                            <a href="mailto:oi.loadingjr@gmail.com"><BiLogoGmail /></a>
                        </div>
                    </div>
                    
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
                                <h3 className={`${montserrat.className}
                                    text-[21px] font-normal 
                                    text-white/75`}>
                                    Desenvolvimento de
                                </h3>
                                <h2 className={`${montserrat.className}
                                    text-[21px] font-semibold text-white/85`}>Sites e Soluções Digitais</h2>
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