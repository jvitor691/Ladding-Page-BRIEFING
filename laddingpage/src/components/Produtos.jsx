import "../style/produtos.css";

const PRODUCTS = [
    {
        icon: "📋",
        category: "Crédito Consignado",
        title: "Consignado",
        items: ["INSS", "Servidor Público", "Federal"],
    },
    {
        icon: "💳",
        category: "Cartões",
        title: "Cartões Especiais",
        items: ["Cartão Consignado RMC", "Cartão Benefício RCC"],
    },
    {
        icon: "💡",
        category: "Linhas de Crédito",
        title: "Crédito",
        items: ["Crédito Pessoal", "Saque FGTS", "Crédito na Conta de Energia"],
    },
];

const Produtos = () => {
    return (
        <section className="produto-container" id="produtos">

            <div className="produto-header">
                <h2 className="produto-titulo">Conheça nossos <span>produtos</span></h2>
                <p className="produto-subtitulo">
                    Soluções financeiras intermediadas com responsabilidade, conectando
                    você às melhores opções disponíveis no mercado.
                </p>
            </div>

            <div className="produto-grid">
                {PRODUCTS.map((product, index) => (
                    <div className="card" key={index}>
                        <div className="card-icon">{product.icon}</div>
                        <span className="card-categoria">{product.category}</span>
                        <h3 className="card-titulo">{product.title}</h3>
                        <ul className="card-itens">
                            {product.items.map((item, i) => (
                                <li key={i} className="card-item">
                                    <span className="card-item-seta">›</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="produto-alerta">
                ⚠️ Operações realizadas por instituições financeiras parceiras, nos
                termos da regulamentação do Banco Central do Brasil.
            </div>

        </section>
    );
};

export default Produtos;