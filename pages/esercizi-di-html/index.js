const Codeblock = dynamic(() => import("@/components/codeblock"), {
    ssr: false,
});
import Banner from "@/components/web/banner";
import { media } from "config/device";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import Link from "next/link";

import styled from "styled-components";

const Page = () => {
    return (
        <>
            <Banner
                image={{
                    objectFit: "cover",
                    src: "/images/esercizi-di-html.webp",
                }}
                title={"Esercizi di html"}
                height="20vw"
            ></Banner>
            <Pagestyle className="container py-4">
                <NextSeo
                    title="esercizi di html | Esercizi HTML per principianti 👨‍💻"
                    description="Esercizi di base HTML per principianti per imparare l'HTML e fare pratica"
                />

                <Link href="/online-html-css-editor" className="theme-btn editor">
                    editor-html-css-online
                </Link>
                <h2>come esercitare HTML nell'editor</h2>
                <p>
                    creare una pagina web di base con alcuni elementi. Apri un editor di testo e
                    segui le istruzioni:
                </p>
                <h3>Crea il documento HTML:</h3>
                <ul>
                    <li>
                        Apri il tuo editor di testo (come Blocco note, VS Code, Sublime Text, ecc.).
                    </li>
                    <li>
                        Crea un nuovo file e salvalo con un'estensione .html (ad esempio,
                        index.html).
                    </li>
                </ul>
                <h3>Struttura HTML:</h3>
                <ul>
                    <li>
                        All'interno del tuo file HTML, crea la struttura di base di un documento
                        HTML utilizzando il seguente modello:
                    </li>
                </ul>
                <Codeblock
                    mode="html"
                    value={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Titolo della tua pagina web</title>
</head>
<body>

    <!-- Il tuo contenuto va qui -->

</body>
</html>
`}
                ></Codeblock>
                <h2>Aggiungi contenuto:</h2>
                <p>Inside the {`<body> `}tag, add the following elements:</p>
                <ul>
                    <li>Un'intestazione {`<h1>`} con il testo "La mia prima pagina web".</li>
                    <li>Un paragrafo {`<p>`} con del testo introduttivo su di te.</li>
                    <li>
                        Un elenco non ordinato {`<ul>`} con almeno tre elementi dell'elenco {`<li>`}{" "}
                        contenenti i tuoi hobby.
                    </li>
                </ul>
                <Codeblock
                    mode="html"
                    value={`<h1>La mia prima pagina web</h1>
<p>Ciao, sono [Il tuo nome]. Questa è la mia prima pagina web.</p>
<ul>
    <li>Passatempo 1</li>
    <li>Passatempo 2</li>
    <li>Passatempo 3</li>
</ul>
`}
                ></Codeblock>
                <h2>Aggiungi un'immagine:</h2>
                <ul>
                    <li>
                        Trova un'immagine online (assicurati di avere il diritto di usarla) e
                        salvala nella stessa directory del tuo file HTML.
                    </li>
                    <li>Aggiungi un tag {`<img>`} al tuo HTML per visualizzare l'immagine.</li>
                </ul>
                <Codeblock
                    mode="html"
                    value={`<img src="your-image-file.jpg" alt="A description of your image">
`}
                ></Codeblock>
                <h2>Crea un collegamento:</h2>
                <p>
                    Aggiungi un collegamento {`<a>`} a un sito web esterno (ad esempio, il tuo sito
                    web preferito).
                </p>
                <Codeblock
                    mode="html"
                    value={`<a href="https://www.example.com" target="_blank">Visit My Favorite Website</a>
`}
                ></Codeblock>
                <h2>Salva e apri:</h2>
                <ul>
                    <li>Salva il tuo file HTML.</li>
                    <li>Aprilo in un browser web per vedere la tua pagina web in azione.</li>
                </ul>
                <p>
                    Questo esercizio è progettato per aiutarti a esercitarti nella struttura di base
                    di un documento HTML, aggiungendo contenuto testuale, comprese immagini, e
                    creando collegamenti. Sentiti libero di personalizzare il contenuto e
                    sperimentare elementi HTML aggiuntivi!
                </p>
                <p>
                    esercita più argomenti HTML da{" "}
                    <a
                        style={{ textDecoration: "underline" }}
                        href="https://www.w3schools.com/html/default.asp"
                    >
                        w3schools
                    </a>
                </p>
            </Pagestyle>
        </>
    );
};

export default Page;
const Pagestyle = styled.div`
    h3 {
        margin-top: 20px;
    }
    ul {
        padding-left: 20px;
    }
    p {
        margin-top: 10px;
    }
    .editor {
        position: sticky;
        margin-bottom: 50px;
        top: 90px;
        left: 80%;
        ${media.sm} {
            left: 0;
            max-width: unset;
        }
        z-index: 5;
    }
`;
