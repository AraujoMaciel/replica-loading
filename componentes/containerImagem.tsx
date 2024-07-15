import Image from "next/image";

interface propsContainerImagem{
    imagemSmall:String,
    imagemBig:String,
    alt:String,
}

export default function ContainerImagem(props:propsContainerImagem){
    return(
        <div className="w-screen p-5 md:p-10 bg-slate-200 my-7">
            <div className="lg:hidden mx-auto">
                <Image
                    src={`/${props.imagemSmall}`}
                    width={2000}
                    height={2000}
                    alt={`${props.alt}`}
                />
            </div>
            <div className="hidden lg:flex lg:justify-center lg:items-center lg:visible lg:w-full mx-auto xl:w-4/5">
                <Image
                    src={`/${props.imagemBig}`}
                    width={2000}
                    height={2000}
                    alt={`${props.alt}`}
                />
            </div>
        </div>
    )
}