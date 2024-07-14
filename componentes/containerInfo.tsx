import Image from "next/image";
import BotaoExterno from "./botaoExterno";

export default function ContainerInfo(){
    return(
        <div className={`w-full flex flex-col gap-4 py-7 xl:my-12`}>

            <div className="lg:flex lg:flex-row">
            <div className=" mx-auto sm:w-4/5 lg:w-2/3">
                <div className="flex gap-4 p-4 sm:w-4/5 justify-center mx-auto">
                    <div className="flex flex-col justify-center items-center text-center sm:w-3/4 lg:text-2xl xl:text-4xl">
                        <h1 className="font-medium sm:text-sm lg:text-lg xl:text-3xl">COMO FUNCIONA NOSSO</h1>
                        <h1 className="font-extrabold text-roxo text-lg lg:text-xl xl:text-4xl">ATENDIMENTO</h1>
                        <p className="font-normal text-[12px] lg:text-lg xl:text-xl">Você NÃO PAGA pelo atendimento :&#x00029;</p>
                    </div>
                    <div className="w-6 sm:w-7 lg:w-10 xl:w-12">
                        <Image 
                            src="/pessoa.svg"
                            width={700}
                            height={700}
                            alt="Ilustração de uma pessoa"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center my-2 mx-auto">
                <div className="flex flex-col xl:px-5 xl:gap-5 sm:w-3/4 mx-auto">
                    
                    <h3 className="flex gap-2 items-center font-medium text-sm xl:text-xl xl:gap-4"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">1</span> Nos mande uma mensagem no whatsapp</h3>
                     
                    <h3 className="flex gap-2 items-center font-medium text-sm xl:text-xl xl:gap-4"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">2</span> Marcamos um momento para conversar. 100% online e gratuito :&#x00029;</h3>
 
                    <h3 className="flex gap-2 items-center font-medium text-sm xl:text-xl xl:gap-4"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">3</span> Fazemos uma proposta de serviço</h3>
 
                    <h3 className="flex gap-2 items-center font-medium text-sm xl:text-xl xl:gap-4"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">4</span> Após fechar contrato iniciamos seu projeto</h3>
                </div>
            </div>
            </div>

            <div className="sm:w-4/5 mx-auto text-center flex flex-col gap-4 py-4 sm:text-lg lg:text-xl xl:text-2xl xl:gap-7 xl:font-medium">
                <h4>Ajudamos você a <span className="text-roxo font-medium lg:font-semibold">reduzir custos e digitalizar seu negócio</span> com o melhor em sites, aplicativos e marketing <span>personalizados</span>.</h4>

                <BotaoExterno
                    link="https://api.whatsapp.com/send/?phone=558888443764&text=Ol%C3%A1%21+Vim+pelo+site%2C+gostaria+de+pedir+um+or%C3%A7amento%21&type=phone_number&app_absent=0"
                    nome="ENTRAR EM CONTATO"
                />
            </div>
        </div>
    )
}