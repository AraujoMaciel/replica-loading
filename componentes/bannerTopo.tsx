import Image from "next/image";

export default function BannerTopo(){
    return(
        <div>
            <div className="bg-roxo h-full w-full">
                <div className="relative">
                    <div className="flex justify-center items-center py-24 w-11/12 mr-0 ml-auto sm:full">
                        <Image 
                            src="banner-home.svg"
                            width={1500}
                            height={1500}
                            alt="Banner Topo"
                            className=""
                        />
                    </div>
                    <div className={`bg-lilas/50 sm:bg-transparent w-full h-full text-white absolute top-0 p-6 sm:p-8`}>
                        <div className="w-3/4 pt-12 md:pl-10 md:pt-10 md:w-4/5 sm:flex justify-center items-left flex-col sm:mt-24 lg:pt-24 lg:pl-20 xl:pt-48 xl:w-5/12 xl:pl-20">
                            <p className="pt-10 font-medium text-lg sm:text-2xl sm:mb-5 lg:text-4xl">Transformando ideias em realidade digital</p>
                            <h1 className="text-2xl pt-5 sm:text-5xl lg:text-7xl">Construindo um futuro com <strong>criatividade </strong> e <strong>inovação</strong></h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}