import Image from "next/image"

export default function Erro(){
    return(
        <div className="absolute bg-purple-200 w-screen h-screen top-0 text-center">
            <div className="text-roxo2 font-bold text-lg py-20">
                <h1>Página não encontrada</h1>
            </div>
            <div className="mx-auto w-1/2">
                <Image
                    src="/notFound.svg"
                    width={250}
                    height={250}
                    alt="Ilustração de internet"
                />
            </div>
        </div>
    )
}