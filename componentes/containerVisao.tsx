import Image from "next/image";

export default function ContainerVisao(){  

    return(
        <div className={` mb-2`}>
            <div className={`flex flex-col md:flex-row md:items-center w-full sm:w-4/5 mx-auto`}>
                <div className="flex items-start gap-8 flex-col px-10 w-full text-center md:text-left">
                    <h2 className="font-extrabold text-2xl text-roxo md:text-3xl lg:text-6xl w-full">Visão</h2>
                    <p className="font-medium text-sm lg:text-lg xl:text-xl">Ser uma empresa de referência em desenvolvimento de soluções digitais na cidade  de Sobral-CE e dentro do Campus da UFC de Sobral.</p>
                </div>
                <div className="w-3/4 mx-auto py-7 lg:w-3/5 ">
                    <Image 
                        src="/sobreVisao.svg"
                        width={700}
                        height={700}
                        alt="Ilustração de pessoas se cumprimentando"
                    />
                </div>
            </div>
        </div>
    )
}