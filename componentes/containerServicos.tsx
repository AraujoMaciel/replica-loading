import Image from "next/image";
import BotaoExterno from "./botaoExterno";

export default function ContainerParceiro(){
    return(
        <div>
            <div className="lg:flex xl:w-full xl:mx-auto md:flex md:flex-col">
                
                <div className="lg:flex lg:flex-row gap-2">
                    <div className="w-3/4 mx-auto px-16 md:px-4 lg:w-1/2 hidden sm:flex sm:visible">
                        <Image 
                            src="/servico.svg"
                            width={700}
                            height={700}
                            alt="Logos dos parceiros da Loadingjr"
                        />
                    </div>

                    <div className="lg:w-1/2">
                    <div className="flex items-center gap-2 my-4 flex-col px-10 md:w-3/4 lg:w-full lg:py-4 md:mx-auto mx-auto text-center">
                        <h1 className="font-semibold text-xl md:text-2xl lg:text-4xl"><span className="text-roxo font-bold">+</span> SERVIÇOS</h1>
                        <h1 className="font-extrabold text-2xl text-roxo md:text-3xl lg:text-5xl">INCLUÍDOS</h1>
                        <p className="font-medium text-sm lg:text-lg xl:text-xl">Veja o que você terá no acompanhamento do seu projeto</p>   
                    </div>

                    <div className="flex flex-col justify-center items-center gap-4 my-7 w-4/5 mx-auto lg:w-9/12 mb-7">
                        <div className="flex flex-col gap-2 xl:px-2 xl:gap-5">   
                     
                            <h3 className="flex gap-2 items-center font-medium text-sm md:text-lg xl:text-xl"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">✓</span> Atendimento Personalizado</h3>
            
                            <h3 className="flex gap-2 items-center font-medium text-sm md:text-lg xl:text-xl"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">✓</span> Serviço de marketing e vendas</h3>
            
                            <h3 className="flex gap-2 items-center font-medium text-sm md:text-lg xl:text-xl"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">✓</span> Desenvolvimento ágil</h3>

                            <h3 className="flex gap-2 items-center font-medium text-sm md:text-lg xl:text-xl"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">✓</span> Suporte gratuito</h3>

                            <h3 className="flex gap-2 items-center font-medium text-sm md:text-lg xl:text-xl"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">✓</span> Preços acessíveis</h3>

                            <h3 className="flex gap-2 items-center font-medium text-sm md:text-lg xl:text-xl"> <span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">✓</span> Soluções inovadoras</h3>

                            <div className="mt-7">
                                <BotaoExterno
                                    link="https://api.whatsapp.com/send/?phone=558888443764&text=Ol%C3%A1%21+Vim+pelo+site%2C+gostaria+de+pedir+um+or%C3%A7amento%21&type=phone_number&app_absent=0"
                                    nome="QUERO IMPULSIONAR MEU NEGÓCIO"
                                />
                            </div>
                        </div> 
                    </div>
                    </div>
                </div>    
            </div>
        </div>
    )
}