import Image from "next/image";
import { montserrat } from "@/app/fontes";

export default function BannerTopo(){
    return(
        <div>
            <div className="bg-roxo h-full w-full">
                <div className="">
                    <div className="flex justify-center items-center py-24">
                        <Image 
                            src="banner-home.svg"
                            width={270}
                            height={270}
                            alt="Banner Topo"
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}