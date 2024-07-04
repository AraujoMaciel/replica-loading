import Image from "next/image"
import { montserrat } from "@/app/fontes"
import {BiLogoGmail} from "react-icons/bi"
import { TiSocialLinkedin } from "react-icons/ti"
import { IoLogoInstagram } from "react-icons/io"

export default function Footer(){
    return(
        <div className={`bg-lilas text-white p-4 ${montserrat.className} absolute bottom-0 w-full -z-50`}>
            <div className="flex flex-col items-center gap-7 py-4 md:grid md:grid-cols-2 md:px-14 md:gap-x-3  lg:grid-cols-3 lg:pr-4">
                <div >
                    <Image 
                        src="/logo.svg"
                        width={100}
                        height={50}
                        alt="Logotipo"
                        className="md:w-48 xl:ml-28 lg:ml-12"
                    />
                </div>

                <div className="text-center font-medium text-[15px]">
                    <p>R. Coronel Estanislau Frota, S/N, Centro, Sobral - CE</p>
                    <p>Bloco I - Mucambinho, Gabinete 19</p>
                </div>

                <div className="flex gap-4 justify-center items-center text-3xl">
                    <a href="https://br.linkedin.com/company/loading-junior"><TiSocialLinkedin /></a>
                    <a href="https://www.instagram.com/loadingjr/"><IoLogoInstagram /></a>
                    <a href="mailto:oi.loadingjr@gmail.com"><BiLogoGmail /></a>
                </div>

            </div>
            <div className={`flex justify-center font-semibold text-[12px] py-4`}>&copy; Todos os direitos reservados</div>
        </div>
    )
}