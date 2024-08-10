import { IoMdArrowForward } from "react-icons/io";
import Image from "next/image";

    interface propsCardLink{
        imagem:String,
        alt:String,
        nome:String,
        link:String,
    }

export default function CardLink(props:propsCardLink){
    return(
        <a href={`${props.link}`}>
            <div className="w-64 h-14 sm:w-80 sm:h-20 lg:w-96 lg:h-20 rounded-lg bg-slate-100 flex items-center p-3 justify-between group hover:shadow-md transition-all duration-700">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 md:p-2 rounded-2xl bg-transparent flex justify-center items-center p-1 overflow-hidden">
                        <Image
                            src={`${props.imagem}`}
                            alt={`${props.alt}`}
                            width={100}
                            height={100}
                            
                        />
                    </div>
                    <h3 className="text-sm md:text-lg">{props.nome}</h3>
                </div>
                <IoMdArrowForward className="group-hover:text-lg group-hover:text-ciano transition-all duration-500 sm:text-lg sm:group-hover:text-xl"/>
            </div>
        </a>
    )
}