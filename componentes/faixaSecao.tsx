import { montserrat } from "@/app/fontes";
import Image from "next/image";

export default function FaixaSecao(){
    return(
        <div className={`relative ${montserrat.className} w-screen`}>
            <div className="bg-transparent w-32 h-32 mx-auto flex justify-center items-end border-b-roxo">
                <Image
                    src="/corte.svg"
                    width={80}
                    height={80}
                    alt="Corte de um quadrado"
                />
            </div>
            <div className="bg-roxo w-screen border-t border-roxo text-white 
             text-center z-10 relative px-4 py-7">
                <div className="w-3/4 mx-auto flex flex-col gap-5 lg:gap-8 xl:gap-20 justify-center items-center sm:flex-row sm:w-full xl:py-24">
                    <div className="xl:w-2/6 ">
                        <h1 className="font-bold text-xl mb-2 xl:mb-7 md:text-2xl lg:text-4xl xl:text-6xl">+ de 5 anos</h1>
                        <p className="md:text-lg lg:text-xl xl:text-4xl">de <strong>experiência em mercado</strong> entregando soluções digitais para dentro e fora da região Sobralense.</p>
                    </div>
                    <div className="xl:w-2/6 xl:text:2xl">
                        <h1 className="font-bold text-xl mb-2 md:text-2xl lg:text-4xl xl:text-6xl xl:mb-7">+ de 4 serviços</h1>
                        <p className="md:text-lg lg:text-xl xl:text-4xl">entregues para você durante seu atendimento. Dentre eles estão: <strong>marketing, vendas, desenvolvimento ágil, atendimento personalizado,</strong> entre outros.</p>
                    </div>
                    <div className="xl:w-2/6 xl:text:2xl">
                        <h1 className="font-bold text-xl mb-2 md:text-2xl lg:text-4xl xl:text-6xl xl:mb-7">+ de 99</h1>
                        <p className="md:text-lg lg:text-xl xl:text-4xl">cafés tomados durante o <strong>desenvolvimento da solução do seu negócio.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}