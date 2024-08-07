import Image from "next/image";
import BotaoExterno from "./botaoExterno";

export default function ContainerParceiro(){
    return(
        <div>
            <div className="sm:flex sm:flex-row sm:py-14 lg:flex lg:px-14 xl:w-10/12 xl:mx-auto">
                <div className="flex items-center gap-2 my-4 flex-col px-10 md:w-3/4 lg:w-8/12 lg:py-12 md:mx-auto xl:w-3/5 mx-auto text-center">
                    <h2 className="font-semibold text-lg md:text-xl lg:text-2xl"><span className="text-roxo font-bold">+</span> SOBRE NOSSOS</h2>
                    <h2 className="font-extrabold text-xl text-roxo md:text-2xl lg:text-4xl lg:font-black">CLIENTES E PARCEIROS</h2>
                    <p className="font-medium text-sm md:text-lg lg:text-xl">Já pensou em ter sua logo aqui?</p>
                    <BotaoExterno
                        link="https://api.whatsapp.com/send/?phone=558888443764&text=Ol%C3%A1%21+Vim+pelo+site%2C+gostaria+de+pedir+um+or%C3%A7amento%21&type=phone_number&app_absent=0"
                        nome="QUERO IMPULSIONAR MEU NEGÓCIO"
                    />
                </div>
                <div className="w-3/4 mx-auto py-8 lg:w-3/5 lg:pt-24">
                    <Image 
                        src="/parceiros.svg"
                        width={700}
                        height={700}
                        alt="Logos dos parceiros da Loadingjr"
                    />
                </div>
            </div>
        </div>
    )
}