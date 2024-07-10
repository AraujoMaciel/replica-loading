import Image from "next/image";
import { montserrat } from "@/app/fontes";


export default function ContainerInfo(){
    return(
        <div className={`${montserrat.className}`}>
            <div>
                <div className="flex gap-4 p-4 w-3/4 mx-auto bg-slate-400">
                    <div className="flex flex-col justify-center items-center bg-slate-500 text-center">
                        <h1 className="font-medium">COMO FUNCIONA NOSSO</h1>
                        <h1 className="font-extrabold text-roxo text-lg">ATENDIMENTO</h1>
                        <p className="font-normal text-[12px] bg-slate-400">Você NÃO PAGA pelo atendimento :&#x00029;</p>
                    </div>
                    <div className="w-8">
                        <Image 
                            src="/pessoa.svg"
                            width={700}
                            height={700}
                            alt="Ilustração de uma pessoa"
                        />
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="flex flex-col justify-items-start gap-2 my-2 bg-slate-500 w-4/5">
                    <h3 className="flex gap-2 items-start font-medium text-sm"><span className="bg-roxo rounded-full w-8 h-8 text-white text-center flex justify-center items-center">1</span> Nos mande uma mensagem no whatsapp</h3>
                     
                    <h3 className="flex gap-2 items-start font-medium text-sm"><span className="bg-roxo rounded-full w-8 h-8 text-white text-center flex justify-center items-center">2</span> Marcamos um momento para conversar. 100% online e gratuito :&#x00029;</h3>

                    <h3 className="flex gap-2 items-start font-medium text-sm"><span className="bg-roxo rounded-full w-8 h-8 text-white text-center flex justify-center items-center">3</span> Fazemos uma proposta de serviço</h3>

                    <h3 className="flex gap-2 items-start font-medium text-sm"><span className="bg-roxo rounded-full w-8 h-8 text-white text-center flex justify-center items-center">4</span> Após fechar contrato iniciamos seu projeto</h3>
                </div>
            </div>
            <div className="w-3/4 mx-auto text-center bg-slate-400 flex flex-col gap-4 py-4">
                <h4>Ajudamos você a <span className="text-roxo font-medium">reduzir custos e digitalizar seu negócio</span> com o melhor em sites, aplicativos e marketing <span>personalizados</span>.</h4>

                <button className="bg-roxo rounded-md text-white text-sm px-4 py-2 hover:bg-roxo2 md:text-lg lg:text-xl">ENTRAR EM CONTATO</button>
            </div>
        </div>
    )
}