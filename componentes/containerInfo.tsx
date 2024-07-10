import Image from "next/image";
import { montserrat } from "@/app/fontes";


export default function ContainerInfo(){
    return(
        <div className={`${montserrat.className} flex flex-col gap-7 py-7 lg:flex-row lg:flex-wrap xl:my-12`}>
            <div className="lg:w-2/4">
                <div className="flex gap-4 p-4 w-3/4 mx-auto sm:w-4/5 justify-center">
                    <div className="flex flex-col justify-center items-center text-center sm:w-3/4 lg:text-2xl lg:w-3/4 xl:text-5xl">
                        <h1 className="font-medium sm:text-lg xl:text-5xl">COMO FUNCIONA NOSSO</h1>
                        <h1 className="font-extrabold text-roxo text-lg sm:text-xl xl:text-5xl">ATENDIMENTO</h1>
                        <p className="font-normal text-[12px] sm:text-lg lg:text-xl xl:text-3xl">Você NÃO PAGA pelo atendimento :&#x00029;</p>
                    </div>
                    <div className="w-8 sm:w-10 xl:w-28">
                        <Image 
                            src="/pessoa.svg"
                            width={700}
                            height={700}
                            alt="Ilustração de uma pessoa"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 my-2 w-4/5 mx-auto lg:w-5/12">
                <div className="flex flex-col gap-5 xl:px-7 xl:gap-10">
                    
                    <h3 className="flex gap-2 items-start font-medium text-sm lg:text-xl xl:text-4xl xl:gap-7 sm:text-lg"><span className="bg-roxo rounded-full p-4 sm:p-6 xl:p-7 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white text-center flex justify-center items-center">1</span> Nos mande uma mensagem no whatsapp</h3>
                     
                     <h3 className="flex gap-2 items-start font-medium text-sm lg:text-xl xl:text-4xl xl:gap-7 sm:text-lg"><span className="bg-roxo rounded-full p-4 sm:p-6 xl:p-7 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white text-center flex justify-center items-center">2</span> Marcamos um momento para conversar. 100% online e gratuito :&#x00029;</h3>
 
                     <h3 className="flex gap-2 items-start font-medium text-sm lg:text-xl xl:text-4xl xl:gap-7 sm:text-lg"><span className="bg-roxo rounded-full p-4 sm:p-6 xl:p-7 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white text-center flex justify-center items-center">3</span> Fazemos uma proposta de serviço</h3>
 
                     <h3 className="flex gap-2 items-start font-medium text-sm sm:text-lg lg:text-xl xl:text-4xl xl:gap-7"><span className="bg-roxo rounded-full p-4 sm:p-6 xl:p-7 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 xl:w-20 xl:h-20 text-white text-center flex justify-center items-center">4</span> Após fechar contrato iniciamos seu projeto</h3>
                    </div>
                
            </div>
            <div className="w-3/4 sm:w-4/5 mx-auto text-center flex flex-col gap-4 py-4 sm:text-xl lg:text-2xl xl:text-4xl xl:gap-7 xl:font-medium">
                <h4>Ajudamos você a <span className="text-roxo font-medium lg:font-semibold">reduzir custos e digitalizar seu negócio</span> com o melhor em sites, aplicativos e marketing <span>personalizados</span>.</h4>

                <button className="bg-roxo rounded-md text-white text-sm px-4 py-2 my-2 hover:bg-roxo2 md:text-lg lg:text-xl w-4/5 md:w-3/5 mx-auto xl:text-3xl xl:w-2/5 xl:py-7 xl:px-7"><a href="https://api.whatsapp.com/send/?phone=558888443764&text=Ol%C3%A1%21+Vim+pelo+site%2C+gostaria+de+pedir+um+or%C3%A7amento%21&type=phone_number&app_absent=0" target="_blank">ENTRAR EM CONTATO</a></button>
            </div>
        </div>
    )
}