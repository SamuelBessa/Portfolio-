import "./section.css"
import foto from "./img/img.adm.jpg"


export function Section() {

    const fotoadm = foto

    return (
        <section id="home">
            <div className="centralizado">
                <div className="info">
                    <h1>Olá, sou Samuel Bessa🖐</h1>
                    <h2 className="sub-titulo">Desenvolvedor Frontend</h2>
                    <h3>Tranformo ideias em interfaces elegantes e funcionais</h3>
                    <div className="texto">
                        <p>Apaixonado por desenvolvimento frontend, construindo projetos de alto desempenho e com foco em usabilidade. Atualmente aprimorando minhas habilidades em React e interessado em novas oportunidades na área.</p>                      
                    </div>
                </div>

                <div className="foto">
                    <div>
                        <img src={fotoadm} alt="foto-adm" />
                    </div>
                </div>
            </div>
        </section>
    )
}