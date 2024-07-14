import { NextResponse } from "next/server";

export default function Middleware(request:Request){

    return NextResponse.redirect(new URL('/', request.url));

}

export const config = {
    matcher: [
        
        '/paginas/((?!sobre|portifolio).*)',
        '/paginas/sobre/(.*)',
        '/paginas/portifolio/(.*)',   
    ],
}