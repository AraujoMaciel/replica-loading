import BannerTopo from "@/componentes/bannerTopo";
import Section from "@/componentes/section";
import BlocoTexto from "@/componentes/blocoTexto";
import Image from "next/image";
import ContainerVisao from "@/componentes/containerVisao";
import ContainerValores from "@/componentes/containerValores";
import ContainerNet from "@/componentes/containerNet";
import ContainerTutor from "@/componentes/containerTutor";


export default function Sobre(){
    return(
        <div>
            <BannerTopo
                imagem="bannerSobre.svg"
                subtitulo="Conheça nosso time e a visão que compartilhamos"
                titulo="#Vemserloading"
            />
            <Section>
                <BlocoTexto
                    sinal="+"
                    subtitulo="SOBRE O"
                    titulo="TIME LOADING"
                />
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