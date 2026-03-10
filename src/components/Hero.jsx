import "../style/hero.css";
import fotoMulher from "../assets/mulher-notebook.png";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-inner">

                <div className="hero-text">
                    <div className="hero-badge">
                        Correspondente Bancário Autorizado · Bacen
                    </div>

                    <h1>
                        Sua operação sempre
                        <br />
                        em <em>boas mãos</em>
                    </h1>

                    <p>
                        A Ideia Promotora conecta você às melhores oportunidades do
                        mercado financeiro com segurança, agilidade e transparência.
                    </p>

                    <div className="hero-btns">
                        <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSceKXryQl253VAoPpnm41o-xT56bgSi0ESPqUn4Lzspi47iKw/viewform?usp=publish-editor"
                            className="btn-hero-amarelo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="9" cy="7" r="4" />
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                            Seja nosso Parceiro
                        </a>

                        <a
                            href="https://ideia.multsistema.com.br/"
                            className="btn-hero-ghost"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.1"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M3 11.5 12 4l9 7.5" />
                                <path d="M5 10.5V20h14v-9.5" />
                                <path d="M9.5 20v-5h5v5" />
                            </svg>
                            Área do Parceiro
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="hero-stat-num">34</span>
                            <span className="hero-stat-label">Bancos parceiros</span>
                        </div>

                        <div className="hero-stat-divider" />

                        <div className="hero-stat">
                            <span className="hero-stat-num">7</span>
                            <span className="hero-stat-label">Estados atendidos</span>
                        </div>

                        <div className="hero-stat-divider" />

                        <div className="hero-stat">
                            <span className="hero-stat-num">100%</span>
                            <span className="hero-stat-label">Autorizado Bacen</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <div className="hero-img-wrap">
                        <div className="hero-orb" />

                        <img
                            src={fotoMulher}
                            alt="Profissional Ideia Promotora"
                            onError={(e) => {
                                e.currentTarget.style.background =
                                    "linear-gradient(135deg,rgba(255,255,255,.15),rgba(255,255,255,.05))";
                                e.currentTarget.style.height = "520px";
                                e.currentTarget.removeAttribute("src");
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;