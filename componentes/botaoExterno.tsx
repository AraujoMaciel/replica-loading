

interface propsBotaoExterno{
    nome:String,
    link:String,
}

export default function BotaoExterno(props:propsBotaoExterno){
    return(
        <div>
            <button className="bg-roxo rounded-md text-white text-sm px-4 py-2 m-1 hover:bg-roxo2 mx-auto xl:text-lg xl:p-4"><a href={`${props.link}`} target="_blank">{props.nome}</a></button>
        </div>
    )
}