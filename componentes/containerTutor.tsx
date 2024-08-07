import Image from "next/image";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";

export default function ContainerTutor(){
    return(
        <div className="w-full">
            <div className="md:flex md:flex-row items-center w-10/12 max-w- mx-auto py-4">
                <div className="w-3/4 mx-auto py-4 lg:w-4/5">
                        <Image 
                            src="/teacher.svg"
                            width={700}
                            height={700}
                            alt="Ilustração de smartphones"
                        />
                </div>
                <div className="w-full mx-auto">
                    <h2 className="font-extrabold text-2xl text-roxo md:text-3xl lg:text-4xl w-full text-center mb-4">Professor Tutor</h2>

                    <div className="bg-gray-300 rounded-lg p-5 text-xs sm:text-sm lg:text-lg relative">  
                        <p className="px-2 md:px-4"><ImQuotesLeft className="absolute top-4 left-2"/>Tive a honra de acompanhar a criação e o desenvolvimento da Loading Jr, e é uma honra fazer a tutoria de um grupo tão autossuficiente e engajado. Cada nova gestão da EJ traz novas contribuições e seus membros se apresentam com autonomia, craitividade e quilíbrio social e financeiro. Anseio contribuir por muito mais tempo com este time.<ImQuotesRight className="absolute right-2 bottom-4"/></p> 
                    </div>
                </div>
            </div>
        </div>
    )
}