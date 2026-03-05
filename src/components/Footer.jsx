import "../style/footer.css";
import logo from "../assets/Logo ideia.png";

const LINKS_RAPIDOS = [
    { href: "#produtos", label: "Produtos" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#onde-estamos", label: "Onde Estamos" },
    { href: "#parceiros", label: "SAC Bancos" },
    { href: "https://wa.me/5585992786663", label: "Fale Conosco", externo: true },
];

const LINKS_LEGAIS = [
    { href: "#", label: "Política de Privacidade" },
    { href: "#", label: "Política de Cookies" },
    { href: "#", label: "Direitos do Titular" },
    { href: "#", label: "Canal de Denúncias" },
    { href: "#", label: "Ouvidoria" },
];

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-inner">

                {/* ── TOPO ── */}
                <div className="footer-top">

                    {/* Coluna 1 — Marca */}
                    <div className="footer-brand">
                        <a href="#" className="logo">
                            <img className="logo-img-footer" src={logo} alt="Ideia Promotora" />
                        </a>

                        <p>
                            Correspondente bancário autorizado intermediando operações
                            com segurança, agilidade e transparência.
                        </p>

                        <div className="footer-info">
                            <strong>Ideia Soluções LTDA</strong><br />
                            CNPJ: 43.180.438/0001-01<br />
                            R. do Pocinho, 20 – Sala 1905, Centro<br />
                            Fortaleza/CE<br />
                            <strong>Encarregado de Dados (DPO):</strong> Responsável Jurídico<br />
                            <strong>E-mail DPO:</strong> juridico@ideiapromotora.com.br
                        </div>

                        <div className="socials">
                            <a href="https://www.instagram.com/ideiapromotora/" target="_blank" rel="noreferrer" aria-label="Instagram">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="2" y="2" width="20" height="20" rx="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                                </svg>
                            </a>
                            <a href="https://www.facebook.com/p/Ideia-Promotora-100076616336517/" target="_blank" rel="noreferrer" aria-label="Facebook">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/5585920059086" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                                </svg>
                            </a>
                        </div>
                    </div>


                    <div className="footer-col">
                        <h4>Acesso Rápido</h4>

                        {LINKS_RAPIDOS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                target={link.externo ? "_blank" : undefined}
                                rel={link.externo ? "noreferrer" : undefined}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Coluna 3 — Informação Legal */}
                    <div className="footer-col">
                        <h4>Informação Legal</h4>
                        {LINKS_LEGAIS.map((link) => (
                            <a key={link.label} href={link.href}>
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Coluna 4 — Localização */}
                    <div className="footer-col">
                        <h4>Onde estamos?</h4>
                        <address>
                            R. do Pocinho, 20 – Sala 1905<br />
                            Centro – Fortaleza – Ceará<br /><br />
                            <strong>SAC:</strong> (85) 2139-5599<br />
                            <strong>Ouvidoria:</strong> (85) 2139-5599<br />
                            <strong>E-mail:</strong> juridico@ideiapromotora.com.br
                        </address>

                        <a
                            href="https://wa.me/5585992786663"
                            className="footer-whatsapp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                            Fale pelo WhatsApp
                        </a>
                    </div>

                </div>


                <div className="footer-bottom">
                    <div className="footer-bottom-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                    </div>
                    <p>
                        A Ideia Promotora não é uma instituição financeira e não realiza
                        operações de crédito diretamente. Somos um correspondente bancário
                        autorizado que, através de suas plataformas, facilita o acesso de
                        clientes a produtos e serviços oferecidos por instituições financeiras.
                        Atuamos em parceria independente como correspondente bancário, prestando
                        serviços de intermediação e atendimento conforme regulamentação do
                        Banco Central do Brasil.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;