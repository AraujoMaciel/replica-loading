import { montserrat } from "@/app/fontes"

export default function BlocoTexto(){
    return(
        <div className={`${montserrat.className} w-screen p-7 sm:p-12 md:p-20 lg:w-4/5 mx-auto`}>
            <div className="flex justify-center items-center flex-col">
                <h1 className="font-medium text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl"><span className="text-roxo">+ </span>Dos nossos</h1>
                <h1 className="text-roxo font-extrabold text-xl sm:text-2xl md:text-4xl lg:text-7xl xl:text-8xl">SERVIÇOS</h1>
            </div>
            <div className="text-center font-medium text-sm py-4 md:text-lg lg:text-xl lg:pt-12 xl:text-4xl">
                <p>Tenha a disposição o melhor que a empresa jr da nova economia tem a oferecer ao seu negócio</p>
                
            </div>
        </div>
    )
}