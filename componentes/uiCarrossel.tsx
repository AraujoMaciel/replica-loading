import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";

import Image from "next/image";
import { TiSocialLinkedin } from "react-icons/ti"
import { IoLogoInstagram } from "react-icons/io"

  export default function UiCarrossel(){

    const membros = [
        {
            id:1,
            imagem: "/membros/Harold.svg",
            nome: "Harold",
            cargo: "Presidente",
            linkedin: "https://www.linkedin.com/in/haroldcalixto",
            instagram: "https://www.instagram.com/calixtoharold_/",
        },
        {
            id:2,
            imagem: "/membros/DiogoLima.svg",
            nome: "Diogo Lima",
            cargo: "Vice-presidente",
            linkedin: "https://www.linkedin.com/in/maciel-ara%C3%BAjo-542532215/",
            instagram: "https://www.instagram.com/"
        },
        {
            id:3,
            imagem: "/membros/Jonanthan.svg",
            nome: "Jonanthan",
            cargo: "Diretor de Projetos",
            linkedin: "https://www.linkedin.com/",
            instagram: "https://www.instagram.com/"
        },
        {
            id:4,
            imagem: "/membros/DanielMeneses.svg",
            nome: "Daniel Meneses",
            cargo: "Diretor de Marketing e Vendas",
            linkedin: "https://www.linkedin.com/in/danielmenesesdg/",
            instagram: "https://www.instagram.com/danielmenesesdg/"
        },
        {
            id:5,
            imagem: "/membros/AlanLima.svg",
            nome: "Alan Lima",
            cargo: "Dev Front-End",
            linkedin: "https://www.linkedin.com/in/dalanlimadev/",
            instagram: "https://www.instagram.com/alan.reiss/"
        },
        {
            id:6,
            imagem: "/membros/Pierre.svg",
            nome: "Pierre",
            cargo: "Dev Front-End",
            linkedin: "https://www.linkedin.com/in/igorpierre/",
            instagram: "https://www.instagram.com/igor.pierre7/"
        },
        {
            id:7,
            imagem: "/membros/JuniorMoreira.svg",
            nome: "Júnior Moreira",
            cargo: "Dev Front-End",
            linkedin: "https://www.linkedin.com/",
            instagram: "https://www.instagram.com/juniormoreira013/"
        },
        {
            id:8,
            imagem: "/membros/CaioVinicius.svg",
            nome: "Caio Vinicius",
            cargo: "Dev Front-End",
            linkedin: "https://www.linkedin.com/",
            instagram: "https://www.instagram.com/"
        },
        {
            id:9,
            imagem: "/membros/EduardoCastro.svg",
            nome: "Eduardo Castro",
            cargo: "Dev Back-End",
            linkedin: "https://www.linkedin.com/in/thecastrodev/",
            instagram: "https://www.instagram.com/thecastrodev/"
        },
        {
            id:10,
            imagem: "/membros/ArturJardel.svg",
            nome: "Artur Jardel",
            cargo: "Dev Back-End",
            linkedin: "https://www.linkedin.com/in/artur-j9/",
            instagram: "https://www.instagram.com/"
        },
        {
            id:11,
            imagem: "/membros/JoaoVitor.svg",
            nome: "João Vitor",
            cargo: "Dev Back-End",
            linkedin: "https://www.linkedin.com/in/jo%C3%A3o-vitor-aguiar-490860286/",
            instagram: "https://www.instagram.com/"
        },
        {
            id:12,
            imagem: "/membros/Daniel.svg",
            nome: "Daniel",
            cargo: "Dev Back-End",
            linkedin: "https://www.linkedin.com/in/daniel-meneses-929a59249/",
            instagram: "https://www.instagram.com/daniel_menesesss/"
        },
        {
            id:13,
            imagem: "/membros/Caioa.svg",
            nome: "Caioã",
            cargo: "Dev Back-End",
            linkedin: "https://www.linkedin.com/in/caio%C3%A3-rodrigues/",
            instagram: "https://www.instagram.com/caioa.rodrigues/"
        },
        {
            id:14,
            imagem: "/membros/JoseAlan.svg",
            nome: "José Alan",
            cargo: "Acessor de Marketing e Vendas",
            linkedin: "https://www.linkedin.com/",
            instagram: "https://www.instagram.com/"
        },
        {
            id:15,
            imagem: "/membros/Priscila.svg",
            nome: "Priscila Áquila",
            cargo: "Acessora de Marketing",
            linkedin: "https://www.linkedin.com/in/priscila-%C3%A1quila/",
            instagram: "https://www.instagram.com/priaraujodesign/"
        },
        {
            id:16,
            imagem: "/membros/WalissonPortela.svg",
            nome: "Walisson Portela",
            cargo: "Acessor de Marketing",
            linkedin: "https://www.linkedin.com/in/walissonportela/",
            instagram: "https://www.instagram.com/walisson_portela/"
        },
        {
            id:17,
            imagem: "/membros/PauloRicardo.svg",
            nome: "Paulo Ricardo",
            cargo: "Acessor de Marketing",
            linkedin: "https://www.linkedin.com/",
            instagram: "https://www.instagram.com/"
        },
        {
            id:18,
            imagem: "/membros/BrenoWesley.svg",
            nome: "Breno Wesley",
            cargo: "Acessor de Vendas",
            linkedin: "https://www.linkedin.com/in/breno-wesley-8915191b1/",
            instagram: "https://www.instagram.com/brenowes_/"
        },
        {
            id:19,
            imagem: "/membros/Bianka.svg",
            nome: "Bianka",
            cargo: "Acessora de Recursos Humanos",
            linkedin: "https://www.linkedin.com/in/bianka-aparecida-de-carvalho-11507226a/?originalSubdomain=br",
            instagram: "https://www.instagram.com/"
        },
        {
            id:20,
            imagem: "/membros/Israel.svg",
            nome: "Israel",
            cargo: "Acessor de Adm e Finanças",
            linkedin: "https://www.linkedin.com/",
            instagram: "https://www.instagram.com/"
        },
        {
            id:21,
            imagem: "/membros/Camilly.svg",
            nome: "Maria Camilly",
            cargo: "Acessora de Adm e Finanças",
            linkedin: "https://www.linkedin.com/",
            instagram: "https://www.instagram.com/"
        },
        {
            id:22,
            imagem: "/membros/Silvan.svg",
            nome: "Silvan",
            cargo: "Acessor de RH",
            linkedin: "https://www.linkedin.com/in/silvanfelipe/",
            instagram: "https://www.instagram.com/silvan_navlis/"
        },
    ]

    return(
        <Carousel opts={{
            align: "start",
          }}>
        <CarouselContent className="mb-5 ">
            
            {membros.map((dados) => (
                <CarouselItem key={dados.id}>
                    <div className="bg-slate-200 rounded-xl w-44 lg:w-60 xl:w-72 text-center mx-auto md:mx-1  mb-7 shadow-md">
                        <Image
                            src={dados.imagem}
                            width={300}
                            height={300}
                            alt="Membro da Loading"
                        />
                        <div className="pt-4">
                            <h2 className="font-bold text-lg">{dados.nome}</h2>
                            <h3 className="text-roxo font-semibold text-sm px-2">{dados.cargo}</h3>
                        </div>
                        <div className="py-4 flex items-center justify-center text-xl gap-5 text-white">
                            <a href={dados.linkedin} target="_blank"><TiSocialLinkedin className="bg-roxo rounded-full w-7 h-7 p-1"/></a>
                            <a href={dados.instagram} target="_blank"><IoLogoInstagram className="bg-roxo rounded-full w-7 h-7 p-1"/></a>
                        </div>
                    </div>
                </CarouselItem>
            ))}
            
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>

    )
  }