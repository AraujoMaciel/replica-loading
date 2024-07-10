import Image from "next/image"
import Link from "next/link"
import { montserrat } from "@/app/fontes"

export default function ContainerParceiro(){
    return(
        <div>
            <div className="lg:flex lg:px-14 xl:w-10/12 xl:mx-auto">
                <div className="flex items-center gap-2 my-4 flex-col px-10 md:w-3/4 lg:w-8/12 lg:py-12 md:mx-auto xl:w-3/5 mx-auto text-center">
                    <h1 className="font-semibold text-xl md:text-2xl lg:text-5xl"><span className="text-roxo font-bold">+</span> SOBRE NOSSOS</h1>
                    <h1 className="font-extrabold text-2xl text-roxo md:text-2xl lg:text-5xl">CLIENTES E PARCEIROS</h1>
                    <p className="font-medium text-sm md:text-lg lg:text-3xl">Já pensou em ter sua logo aqui?</p>
                    <button className="bg-roxo rounded-md text-white text-sm px-4 py-2 my-4 hover:bg-roxo2 md:text-lg lg:text-xl"><a href="https://api.whatsapp.com/send/?phone=558888443764&text=Ol%C3%A1%21+Vim+pelo+site%2C+gostaria+de+pedir+um+or%C3%A7amento%21&type=phone_number&app_absent=0" target="_blanck">QUERO IMPULSIONAR MEU NEGÓCIO</a></button>
                </div>
                <div className="w-3/4 mx-auto py-8 lg:w-3/5 lg:pt-24">
                    <Image 
                        src="/parceiros.svg"
                        width={700}
                        height={700}
                        alt="Logos dos parceiros da Loadingjr"
                    />
                </div>
            </div>
        </div>
    )
}