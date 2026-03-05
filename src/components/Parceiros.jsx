import { useRef, useState } from "react";
import "../style/parceiros.css";


import logoC6 from "../assets/c6-bank.png";
import logoFacta from "../assets/banco-facta.webp";
import logoDaycoval from "../assets/daycoval.jpg";
import logoPan from "../assets/banco-pan.png";
import logoBmg from "../assets/banco-bmg.png";
import logoQueroPlus from "../assets/banco-quero-plus.jpg";
import logoIcred from "../assets/banco-icred.png";
import logoBrb from "../assets/banco-brb.png";
import logoFinanto from "../assets/banco-finanto.png";
import logoSantander from "../assets/banco-santander.png";
import logoBanrisul from "../assets/banco-banrisul.png";
import logoDigio from "../assets/banco-digio.png";
import logoSafra from "../assets/banco-safra.png";
import logoCrefaz from "../assets/banco-crefaz.png";
import logoMercantil from "../assets/banco-mercantil.png";
import logoItau from "../assets/banco-itau.png";
import logoCashCard from "../assets/banco-meu-cash-card.jpg";
import logoSabemi from "../assets/banco-sabemi.png";
import logoPicpay from "../assets/banco-picpay.png";
import logoTotalCash from "../assets/banco-total-cash.jpg";
import logoCredCap from "../assets/banco-cred-capital.png";
import logoVctex from "../assets/banco-vctex.jpg";
import logoAmigoz from "../assets/banco-amigoz.jpg";
import logoPresenca from "../assets/banco-presença.png";
import logoBcbr from "../assets/banco-bcbr.jpg";
import logoCba from "../assets/banco-cba.png";
import logoNio from "../assets/banco-nio.png";
import logoTafacil from "../assets/banco-tafacil.png";
import logoAki from "../assets/banco-aki-capital.png";
import logoCrefisa from "../assets/banco-crefisa.png";
import logoHappy from "../assets/banco-happy.jpg";
import logoKardbank from "../assets/banco-kard.png";
import logoNossaFin from "../assets/banco-nossa-fintech.png";
import logoQuali from "../assets/banco-quali.jpg";

// ── DADOS ─────────────────────────────────────────────────────────
const BANKS = [
    { name: "C6 Bank", logo: logoC6, sac: "0800 660 0060", ouvidoria: "0800 660 6116" },
    { name: "FACTA Financeira", logo: logoFacta, sac: "0800 942 0462", ouvidoria: "0800 979 7333" },
    { name: "Banco Daycoval", logo: logoDaycoval, sac: "0800 775 0500", ouvidoria: "0300 111 0500" },
    { name: "Banco PAN", logo: logoPan, sac: "0800 775 8686", ouvidoria: "0800 776 2200" },
    { name: "Banco BMG", logo: logoBmg, sac: "0800 723 2044", ouvidoria: "0800 979 7333" },
    { name: "Quero+", logo: logoQueroPlus, sac: "0800 648 6161", ouvidoria: "0800 642 1105" },
    { name: "iCred", logo: logoIcred, sac: "0800 421 0310", ouvidoria: "0800 421 0310" },
    { name: "BRB – Banco de Brasília", logo: logoBrb, sac: "0800 648 6161", ouvidoria: "0800 642 1105" },
    { name: "Finanto", logo: logoFinanto, sac: "0800 100 1102", ouvidoria: "0800 100 1102" },
    { name: "Santander", logo: logoSantander, sac: "4004-3535", ouvidoria: "0800 771 0301" },
    { name: "Banrisul", logo: logoBanrisul, sac: "3003 0511", ouvidoria: "0800 720 0011" },
    { name: "Digio", logo: logoDigio, sac: "0800 333 8735", ouvidoria: "0800 333 1474" },
    { name: "Banco Safra", logo: logoSafra, sac: "3003 9039", ouvidoria: "0800 722 9039" },
    { name: "Crefaz", logo: logoCrefaz, sac: "0800 052 5051", ouvidoria: "0800 052 5051" },
    { name: "Mercantil do Brasil", logo: logoMercantil, sac: "0800 707 0398", ouvidoria: "0800 707 0391" },
    { name: "Itaú Unibanco", logo: logoItau, sac: "0800 970 4828", ouvidoria: "4004-4828" },
    { name: "Meu Cash Card", logo: logoCashCard, sac: "(11) 4003-7688", ouvidoria: "(11) 4003-7688" },
    { name: "Sabemi Seguradora", logo: logoSabemi, sac: "0800 880 1900", ouvidoria: "0800 880 1900" },
    { name: "PicPay", logo: logoPicpay, sac: "0800 025 8000", ouvidoria: "0800 025 8000" },
    { name: "Total Cash", logo: logoTotalCash, sac: "0800 022 4061", ouvidoria: "0800 022 4061" },
    { name: "Cred Capital", logo: logoCredCap, sac: "(85) 2028-0668", ouvidoria: "(85) 2028-0668" },
    { name: "VCTEX", logo: logoVctex, sac: "0800 888 7711", ouvidoria: "0800 725 0074" },
    { name: "Amigoz", logo: logoAmigoz, sac: "0800 772 5271", ouvidoria: "0800 642 1105" },
    { name: "Presença Bank", logo: logoPresenca, sac: "0800 591 2499", ouvidoria: "0800 591 2499" },
    { name: "BCBR", logo: logoBcbr, sac: "0800 660 0060", ouvidoria: "0800 660 6116" },
    { name: "CBA", logo: logoCba, sac: "0800 325 4120", ouvidoria: "0800 325 4120" },
    { name: "NIO", logo: logoNio, sac: "0800 888 7711", ouvidoria: "0800 725 0074" },
    { name: "TaFácil", logo: logoTafacil, sac: "(11) 4210-2496", ouvidoria: "(11) 4210-2496" },
    { name: "Aki Capital", logo: logoAki, sac: "(11) 4210-2496", ouvidoria: "(11) 4210-2496" },
    { name: "Crefisa", logo: logoCrefisa, sac: "0800 727 4884", ouvidoria: "0800 727 4884" },
    { name: "Happy", logo: logoHappy, sac: "0800 772 5281", ouvidoria: "0800 772 5281" },
    { name: "KardBank", logo: logoKardbank, sac: "0800 015 0001", ouvidoria: "0800 015 0001" },
    { name: "Nossa Fintech", logo: logoNossaFin, sac: "(11) 4210-2496", ouvidoria: "(11) 4210-2496" },
    { name: "Qualibanking", logo: logoQuali, sac: "0800 888 9079", ouvidoria: "0800 888 9079" },
];


const LogoFallback = () => (
    <svg viewBox="0 0 28 28" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        className="banco-logo-fallback">
        <path d="M3 25h22M3 12h22M6 8l8-4 8 4M5 12v13M23 12v13M10 12v13M14 12v13M18 12v13" />
    </svg>
);


const BancoLogoBox = ({ logo, name }) => {
    const [falhou, setFalhou] = useState(false);
    return (
        <div className="banco-logo-box">
            {falhou ? (
                <LogoFallback />
            ) : (
                <img
                    src={logo}
                    alt={`Logo ${name}`}
                    className="banco-logo"
                    onError={() => setFalhou(true)}
                />
            )}
        </div>
    );
};


const BancoCard = ({ banco }) => (
    <div className="banco-card">
        <BancoLogoBox logo={banco.logo} name={banco.name} />
        <p className="banco-nome">{banco.name}</p>
        <div className="banco-divider" />
        <div className="banco-contatos">
            <span className="banco-contato"><strong>SAC:</strong> {banco.sac}</span>
            <span className="banco-contato"><strong>Ouvidoria:</strong> {banco.ouvidoria}</span>
        </div>
    </div>
);


const Parceiros = () => {
    const trackRef = useRef(null);

    const setPaused = (v) => () => {
        if (trackRef.current)
            trackRef.current.style.animationPlayState = v ? "paused" : "running";
    };

    const listaLoop = [...BANKS, ...BANKS];

    return (
        <section className="parceiros" id="parceiros">
            <div className="sec-header">
                <span className="sec-label">Bancos Parceiros</span>
                <h2 className="sec-title">
                    Conectados com os <span>melhores bancos</span>
                </h2>
                <p className="sec-sub">
                    A Ideia Promotora atua como correspondente bancário autorizado
                    de {BANKS.length} instituições financeiras regulamentadas pelo
                    Banco Central do Brasil.
                </p>
            </div>

            <div className="parceiros-wrap">
                <div className="carrossel-wrap">
                    <div
                        ref={trackRef}
                        className="carrossel-track"
                        onMouseEnter={setPaused(true)}
                        onMouseLeave={setPaused(false)}
                    >
                        {listaLoop.map((banco, i) => (
                            <BancoCard key={`${banco.name}-${i}`} banco={banco} />
                        ))}
                    </div>
                </div>

                <p className="parceiros-alerta">
                    ⚠️ Operações realizadas por instituições financeiras parceiras,
                    nos termos da regulamentação do Banco Central do Brasil.
                </p>
            </div>
        </section>
    );
};

export default Parceiros;