const jwt = require("jsonwebtoken");

const METABASE_SITE_URL = "https://bi.educacao.dev.br";
const METABASE_SECRET_KEY = "";

const Grafico = () => {    

    const payload = {
        resource: { question: 225 },
        params: {
            Rede: 'Estadual',
            Localizacao: 'Urbana',
            Etapa: 'Ensino Fundamental',
            Unidade: '23'
        },
        exp: Math.round(Date.now() / 1000) + (10 * 60) // 10 minute expiration
    };

    const token = jwt.sign(payload, METABASE_SECRET_KEY)    

    const iframeUrl = `${METABASE_SITE_URL}/embed/question/${token}#bordered=false`;

    return iframeUrl && <iframe
    src={iframeUrl}
    frameBorder={0}
    width={800}
    height={600}
    allowTransparency
/>

}

export default Grafico;