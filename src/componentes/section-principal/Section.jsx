import "./section.css"
import foto from "./img/img.adm.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


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
                    <div className="redes-sociais">
                        <a
                        href="mailto:dev.samuelbessa@gmail.com"
                        className="outer-shadow">
                            <FontAwesomeIcon icon={faEnvelope} style={{color: "#0ce629", width: "15px", marginBottom: "20px"}} />
                        </a>

                        <a
                        href="https://www.linkedin.com/in/dev-samuelbessa/"
                        target="_blank" rel="noopener noreferrer"
                        className="outer-shadow">
                            <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#0ce629", width: "15px", marginBottom: "20px"}} />
                        </a>

                        <a
                        href="https://github.com/SamuelBessa"
                        target="_blank" rel="noopener noreferrer"
                        className="outer-shadow">
                            <FontAwesomeIcon icon={faGithub} style={{color: "#0ce629", width: "15px", marginBottom: "20px"}} />
                        </a>

                        <a
                        href="https://wa.me/5538999315290"
                        target="_blank" rel="noopener noreferrer"
                        className="outer-shadow">
                            <FontAwesomeIcon icon={faWhatsapp} style={{color: "#0ce629", width: "15px", marginBottom: "20px"}} />
                        </a>
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