import { useState, useEffect } from "react";
import "../style/navbar.css";
import logo from "../assets/Logo ideia.png";

const NAV_ITEMS = [
    { href: "#produtos", label: "Produtos" },
    { href: "#onde-estamos", label: "Onde Estamos" },
    { href: "#institucional", label: "Institucional" },
    { href: "#parceiros", label: "Bancos Parceiros" },
    { href: "#footer", label: "SAC Bancos" },
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
        if (menuAberto) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [menuAberto]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 960) setMenuAberto(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const fecharMenu = () => setMenuAberto(false);

    return (
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="nav-inner">

                    {/* Logo */}
                    <a href="#hero" className="logo">
                        <img className="logo-img" src={logo} alt="Ideia Promotora" />
                    </a>

                    {/* Links desktop */}
                    <ul className="nav-links">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.href}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA desktop */}
                    <div className="nav-ctas">
                        <a href="https://wa.me/5585992786663" className="btn-primary">Fale conosco</a>
                    </div>

                    {/* Hambúrguer */}
                    <button
                        className={`hamburger ${menuAberto ? "aberto" : ""}`}
                        onClick={() => setMenuAberto(!menuAberto)}
                        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                        aria-expanded={menuAberto}
                    >
                        <span />
                        <span />
                        <span />
                    </button>

                </div>
            </nav>

            {/* Overlay escuro */}
            <div
                className={`menu-overlay ${menuAberto ? "visivel" : ""}`}
                onClick={fecharMenu}
            />

            {/* Drawer mobile */}
            <div className={`menu-mobile ${menuAberto ? "aberto" : ""}`}>
                <div className="menu-mobile-header">
                    <img className="logo-img" src={logo} alt="Ideia Promotora" />
                    <button className="menu-fechar" onClick={fecharMenu} aria-label="Fechar menu">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                <ul className="menu-mobile-links">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <a href={item.href} onClick={fecharMenu}>
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="menu-mobile-footer">
                    <a
                        href="https://wa.me/55852139-5599"
                        className="btn-primary btn-primary-full"
                        onClick={fecharMenu}
                    >
                        Seja nosso Parceiro
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;