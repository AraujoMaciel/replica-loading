import Image from "next/image";

export default function ContainerValores(){  

    return(
        <div className={` mb-2`}>
            <div className={`flex flex-col md:flex-row-reverse md:items-center w-full sm:w-4/5 mx-auto`}>
                <div className="flex items-start gap-8 flex-col px-10 w-full md:text-left">
                    <h1 className="font-extrabold text-2xl text-roxo md:text-3xl lg:text-6xl w-full  text-center md:text-left">Valores</h1>
                    <div className="flex flex-col gap-2 xl:px-2 xl:gap-5">   
                     
                        <h3 className="flex gap-2 items-center font-medium text-sm md:text-lg xl:text-xl"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">✓</span>Paixão pelo que fazemos</h3>
        
                        <h3 className="flex gap-2 items-center font-medium text-sm md:text-lg xl:text-xl"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">✓</span>Desenvolvimento pessoal e profissional dos membros</h3>
        
                        <h3 className="flex gap-2 items-center font-medium text-sm md:text-lg xl:text-xl"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">✓</span> Qualidade e Compromisso com o Serviço Prestado</h3>

                        <h3 className="flex gap-2 items-center font-medium text-sm md:text-lg xl:text-xl"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">✓</span>Transparência com os Membros e com os Clientes</h3>

                        <h3 className="flex gap-2 items-center font-medium text-sm md:text-lg xl:text-xl"><span className="bg-roxo rounded-full p-4 w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-white flex justify-center items-center">✓</span>Responsabilidade pelas soluções desenvolvidas</h3>
                    </div>
                </div>
                <div className="w-3/4 mx-auto py-7 lg:w-3/5">
                    <Image 
                        src="/sobreValores.svg"
                        width={700}
                        height={700}
                        alt="Ilustração de pessoas se cumprimentando"
                    />
                </div>
            </div>
        </div>
    )
}