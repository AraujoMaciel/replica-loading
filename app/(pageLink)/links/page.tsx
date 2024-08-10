import Image from "next/image";
import { montserrat, roboto } from "@/app/fontes";
import CardLink from "@/componentes/cardLink";
import ContainerNet from "@/componentes/containerNet";
import BlocoTexto from "@/componentes/blocoTexto";

export default function Links(){
    return(
        <div className="h-full">
            <div>
                <div className="flex flex-col gap-3 sm:gap-5 justify-center items-center pt-12 text-center">
                    <a href="/" className="w-24 h-24 sm:w-28 sm:h-28 xl:w-32 xl:h-32 bg-roxo2 rounded-full flex justify-center items-center p-2 shadow-inner shadow-roxo hover:shadow-sm transition-all duration-700">
                        <Image
                                src="/logo.svg"
                                alt="Logotipo da Loading"
                                width={100}
                                height={100}
                                
                        />
                    </a>
                    <div className="w-3/4">
                        <h1 className="font-medium sm:text-lg xl:text-2xl">Loading Desenvolvimento Jr</h1>
                        <p className={`${roboto.className} py-4 lg:text-lg xl:text-xl`}>Desenvolvendo sites e soluções digitais</p>
                    </div>
                </div>

                <div className="flex flex-col gap-5 justify-center items-center pb-12 text-center">
                    <h2 className="font-medium lg:text-lg py-10">Acompanhe-nos em nossos canais</h2>
                    <CardLink
                        imagem="/loading.png"
                        alt="Logototipo Loading"
                        nome="WebSite"
                        link="https://www.loadingjr.com.br/"
                    />
                    <CardLink
                        imagem="/linkedin.jpg"
                        alt="Logototipo Linkedin"
                        nome="Linkedin"
                        link="https://br.linkedin.com/company/loading-junior"
                    />
                    <CardLink
                        imagem="/Instagram.png"
                        alt="Logototipo Instagram"
                        nome="Instagram"
                        link="https://www.instagram.com/loadingjr/"
                    />
                    <CardLink
                        imagem="/whatsapp.png"
                        alt="Logototipo Whatsapp"
                        nome="WhatsApp"
                        link="https://api.whatsapp.com/send/?phone=558888443764&text=Ol%C3%A1%21+Vim+pelo+site%2C+gostaria+de+pedir+um+or%C3%A7amento%21&type=phone_number&app_absent=0"
                    />
                    <CardLink
                        imagem="/facebook.png"
                        alt="Logototipo Facebook"
                        nome="Facebook"
                        link="https://www.facebook.com/loadingjr/"
                    />
                    <CardLink
                        imagem="/gmail.jpg"
                        alt="Logototipo Gmail"
                        nome="E-mail"
                        link="mailto:oi.loadingjr@gmail.com"
                    />
                </div>

            </div>
            <div>
                <ContainerNet />
                <BlocoTexto
                    sinal="+"
                    subtitulo="Informação"
                    titulo="Acompanhe"
                    texto="Fique por dentro de tudo que está acontecendo na Loading!"
                />
            </div>
        </div>
    )
}