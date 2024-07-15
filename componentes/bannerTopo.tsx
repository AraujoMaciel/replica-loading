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
                    <div className="flex justify-center items-center py-24 md:w-8/12 ml-auto sm:full">
                        <Image 
                            src={`/${props.imagem}`}
                            width={1200}
                            height={1200}
                            alt="Banner Topo"
                            className=""
                        />
                    </div>
                    <div className={`bg-lilas/50 sm:bg-transparent w-full h-full text-white absolute top-0 p-6 sm:p-8`}>
                        <div className="h-full w-3/4 md:w-3/5 sm:flex justify-center items-left flex-col md:p-7  lg:pt-16 xl:pt-32 xl:w-4/12 xl:pl-20">
                            <p className="py-10 font-medium text-lg sm:text-xl lg:text-2xl">{props.subtitulo}</p>
                            <h1 className="font-bold text-xl sm:text-2xl lg:text-4xl">{props.titulo}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}