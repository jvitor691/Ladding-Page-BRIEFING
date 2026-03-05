import { Link } from "react-router-dom";
import "../style/notfound.css";
import logo from "../assets/Logo ideia.png"

const NotFound = () => (
    <div className="nf-page">
        <div className="nf-orb nf-orb--top" />
        <div className="nf-orb nf-orb--bottom" />
        <div className="nf-grid" />
        <div className="nf-card">

            <span className="nf-pill">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <circle cx="5" cy="5" r="4" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="5" y1="3" x2="5" y2="5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="5" cy="7.2" r="0.6" fill="currentColor" />
                </svg>
                Página não encontrada
            </span>

            <div className="nf-code">
                4<span className="nf-code-zero">0</span>4
            </div>

            <div className="nf-divider" />

            <h1 className="nf-title">Ops! Esta página não existe</h1>
            <p className="nf-sub">
                O endereço que você acessou pode ter sido removido,
                renomeado ou nunca existiu. Mas não se preocupe —
                estamos aqui para te ajudar.
            </p>

            <div className="nf-btns">
                <Link to="/" className="nf-btn nf-btn--primary">
                    <svg viewBox="0 0 24 24">
                        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
                        <polyline points="9 21 9 12 15 12 15 21" />
                    </svg>
                    Voltar ao início
                </Link>
                <Link to="https://wa.me/558521395599" className="nf-btn nf-btn--secondary">
                    <svg viewBox="0 0 24 24">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                    </svg>
                    Fale conosco
                </Link>
            </div>

        </div>
    </div>
);

export default NotFound;