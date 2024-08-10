import Image from "next/image";


interface propsBannerTopo{
    imagem: String,
    subtitulo?:String,
    titulo: String,
}

export default function BannerTopo(props: propsBannerTopo){
    return(
        <div>
            <div className="bg-roxo h-full w-full">
                <div className="relative">
                    <div className="flex justify-end">
                        <Image 
                            src={`/${props.imagem}`}
                            width={700}
                            height={700}
                            alt="Banner Topo"
                            className=""
                        />
                    </div>
                    <div className={`bg-lilas/50 sm:bg-transparent w-full h-full text-white absolute top-0 p-6 sm:p-8`}>
                        <div className="h-full sm:w-2/3 lg:w-3/5 xl:ml-24 flex flex-col justify-center gap-4">
                            <p className="font-medium text-lg sm:text-3xl">{props.subtitulo}</p>
                            <h1 className="font-bold text-2xl sm:text-5xl lg:text-6xl">{props.titulo}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}