import BannerTopo from "@/componentes/bannerTopo";
import ContainerSemImagem from "@/componentes/containerSemImagem";
import Section from "@/componentes/section";
import ContainerImagem from "@/componentes/containerImagem";
import TextoAviso from "@/componentes/textoAviso";

export default function Portifolio(){
    return(
        <div>
            <BannerTopo
                imagem="bannerPortifolio.svg"
                titulo="Deixamos que nossos trabalhos falem por nós!"
            />
            <Section>
                <ContainerSemImagem
                    titulo="Acaraú Valley"
                    texto="A Acarau Valley é uma empresa que desempenha um papel crucial no ecossistema de startups, oferecendo suporte e recursos para empreendedores que estão no estágio inicial de desenvolvimento de seus negócios."
                    textoButton="CONHEÇA O SITE"
                    enderecoLink="/paginas/portifolio"
                />
            </Section>
            <ContainerImagem
                imagemBig="acarau-valley-big.svg"
                alt="Site Acaraú Valley"
                imagemSmall="acarau-valley-reduzido.svg"
            />
            <Section>
                <TextoAviso/>
            </Section>
        </div>
    )
}