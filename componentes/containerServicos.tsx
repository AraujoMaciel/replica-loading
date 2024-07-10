import Image from "next/image"
import Link from "next/link"
import { montserrat } from "@/app/fontes"

export default function ContainerParceiro(){
    return(
        <div>
            <div 
                className="lg:flex lg:px-14 xl:w-10/12         xl:mx-auto md:flex md:flex-col">
                
                <div className="w-3/4 mx-auto py-8 lg:w-3/5 lg:pt-24 hidden sm:flex sm:visible">
                    <Image 
                        src="/servico.svg"
                        width={700}
                        height={700}
                        alt="Logos dos parceiros da Loadingjr"
                    />
                </div>

                <div className="flex items-center gap-2 my-4 flex-col px-10 md:w-3/4 lg:w-8/12 lg:py-12 md:mx-auto xl:w-3/5 mx-auto text-center">
                    <h1 className="font-semibold text-xl md:text-2xl lg:text-5xl"><span className="text-roxo font-bold">+</span> SERVIÇOS</h1>
                    <h1 className="font-extrabold text-2xl text-roxo md:text-2xl lg:text-5xl">INCLUÍDOS</h1>
                    <p className="font-medium text-sm md:text-lg lg:text-3xl">Veja o que você terá no acompanhamento do seu projeto</p>
                    
                </div>

                <div className="flex flex-col justify-center items-center gap-4 my-7 w-4/5 mx-auto lg:w-9/12 mb-7">
                    <div className="flex flex-col gap-5 xl:px-7 xl:gap-10">   
                     
                        <h3 className="flex gap-2 items-start font-medium text-sm sm:text-lg md:text-2xl xl:text-5xl xl:gap-7"><span className="bg-roxo rounded-full p-4 sm:p-6 xl:p-7 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white text-center flex justify-center items-center">✓</span> Atendimento Personalizado</h3>
        
                        <h3 className="flex gap-2 items-start font-medium text-sm sm:text-lg md:text-2xl xl:text-5xl xl:gap-7"><span className="bg-roxo rounded-full p-4 sm:p-6 xl:p-7 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white text-center flex justify-center items-center">✓</span> Serviço de marketing e vendas</h3>
        
                        <h3 className="flex gap-2 items-start font-medium text-sm sm:text-lg md:text-2xl xl:text-5xl xl:gap-7"><span className="bg-roxo rounded-full p-4 sm:p-6 xl:p-7 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white text-center flex justify-center items-center">✓</span> Desenvolvimento ágil</h3>

                        <h3 className="flex gap-2 items-start font-medium text-sm sm:text-lg md:text-2xl xl:text-5xl xl:gap-7"><span className="bg-roxo rounded-full p-4 sm:p-6 xl:p-7 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white text-center flex justify-center items-center">✓</span> Suporte gratuito</h3>

                        <h3 className="flex gap-2 items-start font-medium text-sm sm:text-lg md:text-2xl xl:text-5xl xl:gap-7"><span className="bg-roxo rounded-full p-4 sm:p-6 xl:p-7 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white text-center flex justify-center items-center">✓</span> Preços acessíveis</h3>

                        <h3 className="flex gap-2 items-start font-medium text-sm sm:text-lg md:text-2xl xl:text-5xl xl:gap-7"><span className="bg-roxo rounded-full p-4 sm:p-6 xl:p-7 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white text-center flex justify-center items-center">✓</span> Soluções inovadoras</h3>

                        <button className="bg-roxo rounded-md text-white text-sm px-4 py-2 my-7 lg:my-24 hover:bg-roxo2 md:text-lg lg:text-2xl lg:px-10 lg:py-7 xl:px-16 xl:py-12 xl:text-4xl"><a href="https://api.whatsapp.com/send/?phone=558888443764&text=Ol%C3%A1%21+Vim+pelo+site%2C+gostaria+de+pedir+um+or%C3%A7amento%21&type=phone_number&app_absent=0" target="_blanck">QUERO IMPULSIONAR MEU NEGÓCIO</a></button> 
                    </div>
                </div> 
            </div>
        </div>
    )
}