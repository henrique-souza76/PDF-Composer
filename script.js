const textArea = document.getElementById("textarea");
const iframe = document.querySelector("iframe");
let textAreaContent;


const file = document.implementation.createHTMLDocument();
const html = file.createElement('html');
const head = file.createElement('head');
const meta = file.createElement('meta'); meta.setAttribute('charset', 'UTF-8');
const style = file.createElement('style');
style.innerHTML = 
`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100%;
    height: 100vh;
    background-color: white;
}`;
const body = file.createElement('body');


head.appendChild(meta);
head.appendChild(style);
html.appendChild(head);
html.appendChild(body);


textArea.value = 
`   <h1 style="
    text-align: center;
    font-family: Times New Roman;
    font-size: 2rem;
    ">Hello World!</h1>
    <!--    DICA: ESCREVA O HTML EM SUA IDE DE PREFERÊNCIA E DEPOIS COLE AQUI   -->
    <!--    DICA: USE ESTILIZAÇÃO INLINE   -->`;

textAreaContent = textArea.value;
body.innerHTML = textAreaContent;

let htmlString = new XMLSerializer().serializeToString(html);
iframe.srcdoc = htmlString;

setInterval(() => {
    if(textAreaContent !== textArea.value) {
        textAreaContent = textArea.value;
        body.innerHTML = textAreaContent;

        htmlString = new XMLSerializer().serializeToString(html);
        iframe.srcdoc = htmlString;
    } 
}, 4000);


//função html2pdf vem da API, a documentação pode ser acessada em:
//https://ekoopmans.github.io/html2pdf.js/
window.gerarPdf = () => html2pdf(body);