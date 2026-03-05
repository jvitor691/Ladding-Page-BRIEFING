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
    const generateWhatsAppLink = (productName, category) => {
        const message = `Olá, gostaria de mais informações sobre o ${productName} da categoria ${category}.`;
        return `https://wa.me/558521395599?text=${encodeURIComponent(message)}`;
    };

    return (
        <section className="produtos" id="produtos">
            <div className="sec-header">
                <span className="sec-label">Nossos Produtos</span>
                <h2 className="sec-title">Conheça nossas <span>soluções financeiras</span></h2>
                <p className="sec-sub">Uma parceria pronta para te oferecer muito mais — com as melhores condições do mercado.</p>
            </div>
            <div className="produtos-grid">

                {PRODUCTS.map((product, index) => (
                    <div className="prod-card" key={index}>
                        <div className="prod-icon">
                            {product.icon}
                        </div>
                        <div className="prod-cat">{product.category}</div>
                        <div className="prod-name">{product.title}</div>
                        <ul className="prod-items">
                            {product.items.map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                        <a
                            href={generateWhatsAppLink(product.title, product.category)}
                            className="prod-btn"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Saiba mais
                            <svg viewBox="0 0 24 24">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </a>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default Produtos;