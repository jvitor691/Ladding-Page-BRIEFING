import "../style/ondeestamos.css";

const ESTADOS = [
    { uf: "CE", nome: "Ceará", cidades: "Fortaleza · Sede principal", sede: true },
    { uf: "PE", nome: "Pernambuco", cidades: "Recife · Grande Recife", sede: false },
    { uf: "BA", nome: "Bahia", cidades: "Salvador · Interior", sede: false },
    { uf: "RN", nome: "Rio G. do Norte", cidades: "Natal · Mossoró", sede: false },
    { uf: "MA", nome: "Maranhão", cidades: "São Luís · Imperatriz", sede: false },
    { uf: "PI", nome: "Piauí", cidades: "Teresina · Interior", sede: false },
    { uf: "PB", nome: "Paraíba", cidades: "João Pessoa · Campina Grande", sede: false },
    { uf: "AL", nome: "Alagoas", cidades: "Maceió · Interior", sede: false },
];

const IconePin = () => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const OndeEstamos = () => {
    return (
        <section className="onde-estamos" id="onde-estamos">

            <div className="sec-header">
                <span className="sec-label">Presença Regional</span>
                <h2 className="sec-title">Onde <span>estamos</span></h2>
                <p className="sec-sub">
                    A Ideia Promotora está presente em 8 estados do Norte e Nordeste,
                    levando as melhores oportunidades do crédito consignado para todo o Brasil.
                </p>
            </div>

            <div className="estados-grid">
                {ESTADOS.map((estado) => (
                    <div
                        className={`estado-card ${estado.sede ? "estado-card--sede" : ""}`}
                        key={estado.uf}
                    >
                        <div className="estado-icon">
                            <IconePin />
                        </div>

                        <div className="estado-info">
                            <div className="estado-uf">{estado.uf}</div>
                            <div className="estado-nome">{estado.nome}</div>
                            <div className="estado-cidades">{estado.cidades}</div>
                            {estado.sede && (
                                <span className="estado-sede-tag">Sede</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default OndeEstamos;