import Section from "@/componentes/section";
import BannerTopo from "@/componentes/bannerTopo";
import BlocoTexto from "@/componentes/blocoTexto";
import Container from "@/componentes/container";
import FaixaSecao from "@/componentes/faixaSecao";
import ContainerInfo from "@/componentes/containerInfo";
import ContainerParceiro from "@/componentes/containerParceiro";
import ContainerServicos from "@/componentes/containerServicos";

export default function Home() {
  return (
    <div>
      <BannerTopo />
      <Section>
        <BlocoTexto />
        <Container 
          titulo="SITES E APLICATIVOS"
          texto="A Loading te ajuda a reinventar seu negócio através de sites, sistemas, de modo a resolver os problemas que estão atrapalhando seu negócio. Tornamos seu sonho em realidade com as melhores soluções de maneira personalizada para impulsionar seu negócio."
          textoButton="SAIBA MAIS"
          enderecoLink="/paginas/sobre"
          imagem="/image1.svg"
          alt="Logotipo"
        />
        <Container
          inversorCol="flex-col-reverse"
          inversorRow="flex-row-reverse" 
          titulo="MARKETING"
          texto="Não acreditamos que a mesma solução de marketing seja boa para todas as empresas. Por isso, sempre dedicamos tempo para aprender sobre sua empresa e seus clientes, e com isso poder recomendar uma estratégia baseada em suas necessidades comerciais específicas. A solução é com uma estratégia de marketing personalizada, onde definimos as melhores táticas e com um orçamento que permite uma ótima lucratividade."
          textoButton="SAIBA MAIS"
          enderecoLink="/paginas/sobre"
          imagem="/image2.svg"
          alt="Imagem Loading"
        />
      </Section>
      
      <FaixaSecao />

      <Section>
        <ContainerInfo />
        <ContainerParceiro />
        <ContainerServicos />
      </Section>
    </div>
  );
}
