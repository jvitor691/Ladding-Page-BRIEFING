import { useState, useEffect } from "react";
import "../style/cookie.css";

const Cookie = () => {
    const [visivel, setVisivel] = useState(false);

    // só exibe se ainda não houve consentimento
    useEffect(() => {
        try {
            const consentimento = localStorage.getItem("cookie_consent");
            if (!consentimento) setVisivel(true);
        } catch {
            setVisivel(true);
        }
    }, []);

    const fecharCookie = (aceitar) => {
        try {
            localStorage.setItem("cookie_consent", aceitar ? "all" : "essential");
        } catch {
            // silencioso se localStorage indisponível
        }
        setVisivel(false);
    };

    return (
        <div className={`cookie-banner ${visivel ? "" : "oculto"}`} role="dialog" aria-label="Aviso de cookies">
            <div className="cookie-texto">
                <strong>🍪 Sua privacidade importa.</strong> Utilizamos cookies para
                melhorar sua experiência, analisar o tráfego e personalizar conteúdo,
                conforme nossa{" "}
                <a href="#" target="_blank" rel="noreferrer">
                    Política de Privacidade
                </a>{" "}
                e a{" "}
                <strong>Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>.
                Ao continuar navegando, você concorda com o uso de cookies essenciais.
            </div>

            <div className="cookie-btns">
                <button
                    className="cookie-recusar"
                    onClick={() => fecharCookie(false)}
                >
                    Somente essenciais
                </button>
                <button
                    className="cookie-aceitar"
                    onClick={() => fecharCookie(true)}
                >
                    Aceitar todos
                </button>
            </div>
        </div>
    );
};

export default Cookie;