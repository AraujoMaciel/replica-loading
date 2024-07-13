import Link from "next/link";

interface propsButton{
    linkBotao:String,
    nomeBotao:String,
}

export default function BotaoInterno(props:propsButton){
    return(
        <div>
            <button className="bg-roxo rounded-md text-white text-sm px-4 py-2 hover:bg-roxo2 md:text-lg lg:text-xl"><Link href={`${props.linkBotao}`}>{props.nomeBotao}</Link></button>
        </div>
    )
}