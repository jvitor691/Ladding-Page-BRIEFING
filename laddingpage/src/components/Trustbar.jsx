import React from "react";
import "../style/trustbar.css"



function Trustbar() {
    const items = [
        { icon: "🏦", label: "34 bancos parceiros" },
        { icon: "⚖️", label: "Regulamentado pelo Bacen" },
        { icon: "🔒", label: "Conformidade LGPD" },
        { icon: "📍", label: "Fortaleza · CE" },
        { icon: "💰", label: "Comissão diária" },
        { icon: "🤝", label: "Atendimento humano" },
    ];
    return (
        <div className="trust-bar">
            <div className="trust-inner">
                {items.map((i) => (
                    <div key={i.label} className="trust-item">
                        <span>{i.icon}</span> {i.label}
                    </div>
                ))}
            </div>
        </div>
    );
}




export default Trustbar;