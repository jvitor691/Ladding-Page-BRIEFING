import "../style/institucional.css";

const INST_CARDS = [
    {
        title: "Autorização Bacen",
        desc: "Correspondente bancário autorizado e regularizado perante o Banco Central do Brasil, garantindo segurança jurídica em todas as operações.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
        ),
    },
    {
        title: "LGPD e Privacidade",
        desc: "Encarregado de Dados (DPO) designado. Todos os dados tratados em conformidade com a Lei Geral de Proteção de Dados — Lei nº 13.709/2018.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
    },
    {
        title: "Equipe Especializada",
        desc: "Time comercial e operacional treinado para oferecer o melhor suporte a parceiros e clientes em todas as etapas da operação.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: "Comissionamento Transparente",
        desc: "Política de comissões clara, competitiva e paga diariamente — sem surpresas e com total rastreabilidade.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },
];

const Institucional = () => {
    return (
        <section className="institucional" id="institucional">
            <div className="inst-inner">

                {/* ── TEXTO ── */}
                <div className="inst-text">
                    <span className="inst-label">Quem somos</span>

                    <h2 className="inst-title">
                        Faça parte dessa <span>Ideia</span>
                    </h2>

                    <p className="inst-p">
                        A Ideia Promotora é uma empresa correspondente bancária autorizada
                        pelo Banco Central do Brasil, especializada em intermediar operações
                        de crédito consignado entre clientes e instituições financeiras parceiras.
                    </p>

                    <p className="inst-p">
                        Com presença consolidada no Nordeste e Norte do país, nossa missão
                        é conectar parceiros comerciais e clientes às melhores condições do
                        mercado financeiro, com total transparência, segurança jurídica e
                        suporte especializado.
                    </p>

                    <div className="inst-aviso">
                        <div className="inst-aviso-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                                <line x1="12" y1="9" x2="12" y2="13" />
                                <line x1="12" y1="17" x2="12.01" y2="17" />
                            </svg>
                        </div>
                        <p>
                            A Ideia Promotora <strong>não é uma instituição financeira</strong> e
                            não realiza operações de crédito diretamente. Toda intermediação é
                            feita em conformidade com a regulamentação do Banco Central do Brasil.
                        </p>
                    </div>

                    {/* stats em linha */}
                    <div className="inst-stats">
                        <div className="inst-stat">
                            <span className="inst-stat-num">34</span>
                            <span className="inst-stat-label">Bancos parceiros</span>
                        </div>
                        <div className="inst-stat-sep" />
                        <div className="inst-stat">
                            <span className="inst-stat-num">8</span>
                            <span className="inst-stat-label">Estados atendidos</span>
                        </div>
                        <div className="inst-stat-sep" />
                        <div className="inst-stat">
                            <span className="inst-stat-num">100%</span>
                            <span className="inst-stat-label">Autorizado Bacen</span>
                        </div>
                    </div>
                </div>

                {/* ── CARDS ── */}
                <div className="inst-cards">
                    {INST_CARDS.map((card, index) => (
                        <div className="inst-card" key={index}>
                            <div className="inst-card-icon">{card.icon}</div>
                            <div className="inst-card-body">
                                <h3 className="inst-card-title">{card.title}</h3>
                                <p className="inst-card-desc">{card.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Institucional;