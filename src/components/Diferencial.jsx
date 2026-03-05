import "../style/diferencial.css";

const DIFFERENTIALS = [
    {
        title: "Compromisso com você",
        desc: "Cada parceiro é único. Atendimento personalizado e dedicado para maximizar seus resultados.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
        ),
    },
    {
        title: "As melhores comissões",
        desc: "Tabelas diferenciadas e competitivas para garantir o melhor retorno por operação intermediada.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="1" x2="12" y2="23" />
                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
        ),
    },
    {
        title: "Comissionamento diário",
        desc: "Receba suas comissões no dia seguinte às operações aprovadas. Sem atrasos, sem burocracia.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
            </svg>
        ),
    },
    {
        title: "Suporte especializado",
        desc: "Equipe técnica disponível para orientação sobre produtos, processos e regulamentação vigente.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
        ),
    },
    {
        title: "Presença regional",
        desc: "Baseados em Fortaleza, com forte presença no Nordeste e crescimento nacional contínuo.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        title: "Agilidade nos processos",
        desc: "Fluxos otimizados de ponta a ponta, reduzindo o tempo entre proposta e aprovação da operação.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
        ),
    },
    {
        title: "Atendimento humano",
        desc: "Acreditamos em relacionamentos reais. Aqui você sempre fala com pessoas prontas para ajudar.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        title: "Sistema de consulta",
        desc: "Plataforma de consulta e acompanhamento de operações em tempo real para seu controle total.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
            </svg>
        ),
    },
];

const Diferencial = () => {
    return (
        <section className="diferenciais" id="diferenciais">

            <div className="sec-header">
                <span className="sec-label">Por que a Ideia?</span>
                <h2 className="sec-title">
                    Diferenciais que fazem <span>a diferença</span>
                </h2>
                <p className="sec-sub">
                    Aqui você tem muito mais do que comissão — tem estrutura,
                    suporte e tecnologia do seu lado.
                </p>
            </div>

            <div className="dif-grid">
                {DIFFERENTIALS.map((item, index) => (
                    <div className="dif-card" key={index}>
                        <div className="dif-icon">{item.icon}</div>
                        <h3 className="dif-title">{item.title}</h3>
                        <p className="dif-desc">{item.desc}</p>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Diferencial;



