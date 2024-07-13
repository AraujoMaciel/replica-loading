
import Image from "next/image";

export default function FaixaSecao(){
    return(
        <div className={`relative w-screen border-b-roxo`}>
            <div className="bg-transparent w-32 h-32 mx-auto flex justify-center items-end border-b-0">
                <Image
                    src="/corte.svg"
                    width={80}
                    height={80}
                    alt="Corte de um quadrado"
                />
            </div>
            <div className="bg-roxo w-screen border-t-0 border-roxo text-white 
             text-center z-10 relative p-4">
                <div className="max-w-7xl mx-auto bg-slate-400 flex flex-col gap-5 lg:gap-8 xl:gap-20 justify-center items-center sm:flex-row w-full xl:py-10">
                    <div className="">
                        <h1 className="font-bold text-lg mb-2 xl:mb-7 md:text-xl lg:text-2xl xl:text-3xl">+ de 5 anos</h1>
                        <p className="text-sm lg:text-lg xl:text-xl">de <strong>experiência em mercado</strong> entregando soluções digitais para dentro e fora da região Sobralense.</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-lg mb-2 xl:mb-7 md:text-xl lg:text-2xl xl:text-3xl">+ de 4 serviços</h1>
                        <p className="text-sm lg:text-lg xl:text-xl">entregues para você durante seu atendimento. Dentre eles estão: <strong>marketing, vendas, desenvolvimento ágil, atendimento personalizado,</strong> entre outros.</p>
                    </div>
                    <div className="">
                        <h1 className="font-bold text-lg mb-2 xl:mb-7 md:text-xl lg:text-2xl xl:text-3xl">+ de 99</h1>
                        <p className="text-sm lg:text-lg xl:text-xl">cafés tomados durante o <strong>desenvolvimento da solução do seu negócio.</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}