import React from "react";
import "../style/diferencial.css"
const Diferencial = () => {

    const DIFFERENTIALS = [
        { icon: "🤝", title: "Compromisso com você", text: "Cada parceiro é único. Atendimento personalizado e dedicado para maximizar seus resultados." },
        { icon: "💰", title: "As melhores comissões", text: "Tabelas diferenciadas e competitivas para garantir o melhor retorno por operação intermediada." },
        { icon: "📅", title: "Comissionamento diário", text: "Receba suas comissões no dia seguinte às operações aprovadas. Sem atrasos, sem burocracia." },
        { icon: "🎯", title: "Suporte especializado", text: "Equipe técnica disponível para orientação sobre produtos, processos e regulamentação vigente." },
        { icon: "📍", title: "Presença regional", text: "Baseados em Fortaleza, com forte presença no Nordeste e crescimento nacional contínuo." },
        { icon: "⚡", title: "Agilidade nos processos", text: "Fluxos otimizados de ponta a ponta, reduzindo o tempo entre proposta e aprovação da operação." },
        { icon: "👥", title: "Atendimento humano", text: "Acreditamos em relacionamentos reais. Aqui você sempre fala com pessoas prontas para ajudar." },
        { icon: "🖥️", title: "Sistema de consulta", text: "Plataforma de consulta e acompanhamento de operações em tempo real para seu controle total." },
    ];


    return (
        <div className="diferencial-container">
            <h2 className="titulo-diferencial">Nossos diferenciais</h2>
            <p>Atuamos com ética, agilidade e foco total no sucesso dos nossos parceiros.
                Não somos uma instituição financeira — somos seu elo com as melhores opções do mercado.
            </p>
            <div className="card-principal-diferencial">
                {DIFFERENTIALS.map((diferencial, i) => (
                    <div className="card-diferencial" key={i}>
                        <div className="card-icon">{diferencial.icon}</div>
                        <h3 className="card-title">{diferencial.title}</h3>
                        <p className="card-text">{diferencial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Diferencial;



