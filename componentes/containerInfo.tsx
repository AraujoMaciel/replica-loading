import Image from "next/image";
import { montserrat } from "@/app/fontes";
import { PiNumberCircleOneFill } from "react-icons/pi";
import { PiNumberCircleTwoFill } from "react-icons/pi";
import { PiNumberCircleThreeFill } from "react-icons/pi";
import { PiNumberCircleFourFill } from "react-icons/pi";


export default function ContainerInfo(){
    return(
        <div className={`${montserrat.className}`}>
            <div>
                <div className="flex gap-4 p-4">
                    <div className="flex flex-col justify-center items-center bg-slate-500 text-center">
                        <h1 className="font-medium">COMO FUNCIONA NOSSO</h1>
                        <h1 className="font-extrabold text-roxo text-lg">ATENDIMENTO</h1>
                        <p className="font-normal text-sm bg-slate-400">Você NÃO PAGA pelo atendimento :&#x00029;</p>
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
                <div className="flex flex-col justify-center items-center gap-2 my-2 bg-slate-600 w-4/5">
                    <h3 className="flex gap-2 items-start font-medium text-sm"><PiNumberCircleOneFill className="text-roxo text-xl w-8 bg-slate-200"/> Nos mande uma mensagem no whatsapp</h3>
                    <div className="flex gap-2">
                        <PiNumberCircleTwoFill className="text-roxo text-2xl bg-slate-200 w-8 "/> 
                        <h3 className=" font-medium text-sm">Marcamos um momento para conversar. 100% online e gratuito :&#x00029;</h3>
                    </div>
                    <h3 className="flex gap-2 items-start font-medium text-sm"><PiNumberCircleThreeFill className="text-roxo text-xl w-8 bg-slate-200"/> Fazemos uma proposta de serviço</h3>
                    <h3 className="flex gap-2 items-start font-medium text-sm"><PiNumberCircleFourFill className="text-roxo text-xl w-8 bg-slate-200"/> Após fechar contrato iniciamos seu projeto</h3>
                </div>
            </div>
        </div>
    )
}