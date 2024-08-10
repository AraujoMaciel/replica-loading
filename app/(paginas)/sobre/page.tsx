import BannerTopo from "@/componentes/bannerTopo";
import Section from "@/componentes/section";
import BlocoTexto from "@/componentes/blocoTexto";
import Image from "next/image";
import ContainerVisao from "@/componentes/containerVisao";
import ContainerValores from "@/componentes/containerValores";
import ContainerNet from "@/componentes/containerNet";
import ContainerTutor from "@/componentes/containerTutor";
import UiCarrossel from "@/componentes/uiCarrossel";


export default function Sobre(){
    return(
        <div>
            <BannerTopo
                imagem="bannerSobre.svg"
                subtitulo="Conheça nosso time e a visão que compartilhamos"
                titulo="#Vemserloading"
            />
            <Section>
                <div className={`w-full p-5 sm:p-10 md:p-16 lg:w-4/5 mx-auto`}>
                    <div className="flex justify-center items-center flex-col py-2 text-center">
                        <h2 className="font-medium text-lg sm:text-xl md:text-lg lg:text-2xl xl:text-3xl"><span className="text-roxo sm:font-bold">+ </span>SOBRE O</h2>
                        <h2 className="text-roxo font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">TIME LOADING</h2>
                    </div>
                </div>
                <UiCarrossel />
                <div className="w-3/12 max-w-96 mx-auto">
                    <Image
                        src="/logoCor.svg"
                        width={800}
                        height={600}
                        alt="Logo da Loading"
                    />
                </div>
                <BlocoTexto
                    titulo="Loading Desenvolvimento Jr"
                    texto="Nossa missão é promover o crescimento profissional dos membros através de vivência empresarial, entregando soluções digitais aos micro e pequenos empresários da região Nordeste."
                />
                <ContainerVisao />
                <ContainerValores />    
            </Section>
            <ContainerNet />
            <Section>
                <ContainerTutor />
            </Section>
        </div>
    )
}