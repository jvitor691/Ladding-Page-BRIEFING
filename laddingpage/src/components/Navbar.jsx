import { useState, useEffect } from "react";
import "../style/navbar.css";

const NAV_ITEMS = [
    { href: "#produtos", label: "Produtos" },
    { href: "#onde-estamos", label: "Onde Estamos" },
    { href: "#parceiro", label: "Seja Parceiro" },
    { href: "#institucional", label: "Institucional" },
    { href: "#bancos", label: "SAC Bancos" },
];

const Navbar = () => {
    const [menuAberto, setMenuAberto] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 960) setMenuAberto(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const fecharMenu = () => setMenuAberto(false);

    return (
        <div>
            <nav className={`navbar-container ${scrolled ? "scrolled" : ""}`}>
                <div className="navbar">

                    <a href="#home" className="logo">
                        Ideia<span className="logo-destaque"> Promotora</span>
                    </a>

                    <ul className="navlink">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a href={item.href} className="link">
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="nav-buttons">
                        <button
                            className="btn-parceiro"
                            onClick={() => window.open("https://wa.me/5585920059086", "_blank")}
                        >
                            Fale com nossa equipe
                        </button>
                    </div>

                    <button
                        className={`hamburger ${menuAberto ? "aberto" : ""}`}
                        onClick={() => setMenuAberto(!menuAberto)}
                        aria-label="Abrir menu"
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                </div>
            </nav>

            <div className={`mobile-menu ${menuAberto ? "aberto" : ""}`}>
                <button className="mobile-fechar" onClick={fecharMenu} aria-label="Fechar menu">
                    ✕
                </button>

                {NAV_ITEMS.map((item) => (
                    <a key={item.href} href={item.href} className="link" onClick={fecharMenu}>
                        {item.label}
                    </a>
                ))}

                <button
                    className="btn-parceiro"
                    onClick={() => {
                        fecharMenu();
                        document.querySelector("#parceiro")?.scrollIntoView({ behavior: "smooth" });
                    }}
                >
                    Seja nosso Parceiro
                </button>

                <button
                    className="btn-fale"
                    onClick={() => {
                        fecharMenu();
                        window.open("https://wa.me/5585920059086", "_blank");
                    }}
                >
                    Fale com nossa equipe
                </button>
            </div>
        </div>
    );
};

export default Navbar;