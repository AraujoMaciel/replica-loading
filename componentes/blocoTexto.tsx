

export default function BlocoTexto(){
    return(
        <div className={`w-full p-7 sm:p-12 md:p-20 lg:w-4/5 mx-auto bg-slate-400`}>
            <div className="flex justify-center items-center flex-col py-2 bg-slate-500">
                <h1 className="font-medium text-lg sm:text-xl md:text-lg lg:text-2xl xl:text-3xl"><span className="text-roxo sm:font-bold">+ </span>Dos nossos</h1>
                <h1 className="text-roxo font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">SERVIÇOS</h1>
            </div>
            <div className="text-center font-medium text-sm py-4 lg:text-lg xl:text-xl lg:pt-12 bg-slate-500">
                <p>Tenha a disposição o melhor que a empresa jr da nova economia tem a oferecer ao seu negócio</p>
                
            </div>
        </div>
    )
}