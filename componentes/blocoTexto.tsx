
interface propsBlocoTexto{
    sinal?:String,
    subtitulo?:String,
    titulo:String,
    texto?:String,
}

export default function BlocoTexto(props:propsBlocoTexto){
    return(
        <div className={`w-full p-7 sm:p-12 md:p-20 lg:w-4/5 mx-auto`}>
            <div className="flex justify-center items-center flex-col py-2 text-center">
                <h2 className="font-medium text-lg sm:text-xl md:text-lg lg:text-2xl xl:text-3xl"><span className="text-roxo sm:font-bold">{props.sinal} </span>{props.subtitulo}</h2>
                <h2 className="text-roxo font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{props.titulo}</h2>
            </div>
            <div className="text-center font-medium text-sm py-4 lg:text-lg xl:text-xl lg:pt-12">
                <p>{props.texto}</p>
                
            </div>
        </div>
    )
}