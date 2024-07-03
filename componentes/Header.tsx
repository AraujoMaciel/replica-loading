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
                            src="/loading-removebg.png"
                            width={150}
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

                <div className={`w-3/4 h-[100%] bg-roxo absolute right-0 bottom-0 ${menu?'visible':'hidden'}`}>
                    <div className="p-7 text-3xl flex justify-end hover:cursor-pointer">
                        <IoIosCloseCircle onClick={() => {setMenu(!menu)}}/>
                    </div>
                    <div className="flex flex-col justify-center items-end p-7 gap-3">
                            <Link href='/paginas/sobre'>Sobre a Loading</Link>
                            <Link href='/paginas/portifolio'>Portifólio</Link>
                    </div>
                    <div className="absolute w-full py-5 bottom-0">
                        <div className="flex gap-7 justify-center items-center text-3xl">
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

            <div className={`hidden sm:visible text-white`}>
                <div className="flex">
                        <h3 className={`montserrat.className
                            text-xl`}>
                            Desenvolvimento de
                        </h3>
                        <h2 className={`montserrat.className
                            text-xl font-semibold`}>Sites e Soluções Digitais</h2>
                </div>
                
                {/*
                <div>
                    <ul>
                        <li>Sobre a Loading</li>
                        <li>Contato</li>
                        <li>Conteúdo Gratuito</li>
                    </ul>
                </div>
                <div>redes</div>*/}
            </div>
        </div>
    )
}