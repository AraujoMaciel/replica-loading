import { GetServerSideProps } from "next";

export default function Sitemap(){
    return null;
}

export const getServerSideProps: GetServerSideProps<{}> = async(ctx) => {

    ctx.res.setHeader('Content-Type','text/xml');
    const xml = await gerarSitemap();
    ctx.res.write(xml);
    ctx.res.end();

    return{
        props: {}
    }
}

async function gerarSitemap(): Promise<String>{
    return `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>${document.URL}</loc>
            <lastmod>${document.ontimeupdate}</lastmod>
        </url>
        </urlset>
    `
}