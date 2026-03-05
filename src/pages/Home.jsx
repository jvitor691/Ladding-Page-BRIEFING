import Hero from "../components/Hero";
import Produtos from "../components/Produtos";
import OndeEstamos from "../components/OndeEstamos";
import Institucional from "../components/Institucional";
import Parceiros from "../components/Parceiros";
import Footer from "../components/Footer";
import Cookie from "../components/Cookie";
import Navbar from "../components/Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Produtos />
            <OndeEstamos />
            <Institucional />
            <Parceiros />
            <Footer />
            <Cookie />
        </>
    );
};

export default Home;
