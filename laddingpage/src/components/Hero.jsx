import "../style/hero.css";
import foto_mulher from "../assets/mulher-notebook.png";

const Hero = () => {
    return (
        <section className="hero-container">

            <div className="hero-text">
                <span className="hero-badge">✦ Correspondente Bancário Autorizado · Bacen</span>
                <h1>
                    Conectamos você às <em>melhores oportunidades</em> do mercado financeiro
                </h1>
                <p>
                    Atuamos como correspondente bancário autorizado, intermediando
                    operações com segurança, agilidade e transparência.
                </p>
                <a href="#parceiro" className="btn-hero">
                    🤝 Seja nosso parceiro
                </a>
            </div>

            <div className="hero-image">
                <img src={foto_mulher} alt="Profissional da Ideia Promotora" />
            </div>

        </section>
    );
};

export default Hero;