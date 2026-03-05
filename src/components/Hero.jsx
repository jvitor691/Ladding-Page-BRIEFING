import "../style/hero.css";
import fotoMulher from "../assets/mulher-notebook.png";

const Hero = () => {
    return (
        <section className="hero" id="hero">
            <div className="hero-inner">

                {/* ── TEXTO ── */}
                <div className="hero-text">
                    <div className="hero-badge">
                        Correspondente Bancário Autorizado · Bacen
                    </div>

                    <h1>
                        Sua operação sempre<br />
                        em <em>boas mãos</em>
                    </h1>

                    <p>
                        A Ideia Promotora conecta você às melhores oportunidades do
                        mercado financeiro com segurança, agilidade e transparência.
                    </p>

                    <div className="hero-btns">
                        <a href="https://wa.me/5585992786663" className="btn-hero-amarelo">
                            <svg
                                width="18" height="18"
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

                    </div>

                    {/* Stats rápidos */}
                    <div className="hero-stats">
                        <div className="hero-stat">
                            <span className="hero-stat-num">34</span>
                            <span className="hero-stat-label">Bancos parceiros</span>
                        </div>
                        <div className="hero-stat-divider" />
                        <div className="hero-stat">
                            <span className="hero-stat-num">8</span>
                            <span className="hero-stat-label">Estados atendidos</span>
                        </div>
                        <div className="hero-stat-divider" />
                        <div className="hero-stat">
                            <span className="hero-stat-num">100%</span>
                            <span className="hero-stat-label">Autorizado Bacen</span>
                        </div>
                    </div>
                </div>

                {/* ── IMAGEM ── */}
                <div className="hero-image">
                    <div className="hero-img-wrap">

                        {/* Orbe decorativo */}
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