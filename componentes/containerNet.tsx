import Image from "next/image";

export default function ContainerNet(){  

    return(
        <div className={`my-4 w-screen py-7 bg-slate-200`}>
            <div className={`flex flex-col md:flex-row md:items-center w-full sm:w-4/5 mx-auto max-w-[900px]`}>
                <div className="flex items-start gap-2 flex-col px-10 w-full text-left md:text-left">
                    <h1 className="font-extrabold text-2xl text-roxo md:text-3xl lg:text-4xl w-full">Loading na net 😆</h1>
                    <h1 className="font-extrabold text-2xl md:text-3xl lg:text-4xl w-full">Vem fazer parte da nossa Família :&#x00029;</h1>
                    <p className="font-semibold text-xs lg:text-sm xl:text-lg text-roxo">Conteúdos gratuitos mais próximos de você</p>
                </div>
                <div className="w-3/4 mx-auto py-8 lg:w-3/5 lg:pt-24">
                    <Image 
                        src="/celulares.svg"
                        width={700}
                        height={700}
                        alt="Ilustração de smartphones"
                    />
                </div>
            </div>
        </div>
    )
}