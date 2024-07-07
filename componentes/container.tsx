import { montserrat } from "@/app/fontes"
import Image from "next/image"
import Link from "next/link"

interface propsContainer{
    titulo:String,
    texto: String,
    textoButton: String,
    imagem: String,
    alt: String,
    enderecoLink: String,
}

export default function Container(props: propsContainer){
    return(
        <div className={`${montserrat.className}`}>
            <div className="lg:flex lg:px-14 xl:w-10/12 xl:mx-auto">
                <div className="flex items-start gap-8 flex-col px-10 md:w-3/4 lg:w-8/12 lg:py-12 md:mx-auto xl:w-3/5">
                    <h1 className="font-extrabold text-xl text-roxo md:text-2xl lg:text-5xl">{props.titulo}</h1>
                    <p className="font-medium text-sm md:text-lg lg:text-2xl">{props.texto}</p>
                    <button className="bg-roxo rounded-md text-white text-sm px-4 py-2 hover:bg-roxo2 md:text-lg lg:text-xl"><Link href={`${props.enderecoLink}`}>{props.textoButton}</Link></button>
                </div>
                <div className="w-3/4 mx-auto py-8 lg:w-3/5 lg:pt-24">
                    <Image 
                        src={`${props.imagem}`}
                        width={700}
                        height={700}
                        alt={`'${props.alt}'`}
                    />
                </div>
            </div>
        </div>
    )
}