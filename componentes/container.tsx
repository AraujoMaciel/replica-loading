import Image from "next/image";
import BotaoInterno from "./botaoInterno";

interface propsContainer{
    titulo:String,
    texto: String,
    textoButton: String,
    imagem: String,
    alt: String,
    enderecoLink: String,
    inversorCol?:String,
    inversorRow?:String,
}

export default function Container(props: propsContainer){  

    return(
        <div className={` mb-7`}>
            <div className={`md:flex md:flex-col md:${props.inversorCol} xl:${props.inversorRow} xl:flex-row w-full sm:w-4/5 mx-auto`}>
                <div className="flex items-start gap-8 flex-col px-10 w-full">
                    <h1 className="font-extrabold text-xl text-roxo md:text-2xl lg:text-5xl">{props.titulo}</h1>
                    <p className="font-medium text-sm lg:text-lg xl:text-xl">{props.texto}</p>
                    <BotaoInterno
                        linkBotao={props.enderecoLink}
                        nomeBotao={props.textoButton}
                    />
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