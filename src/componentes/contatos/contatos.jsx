import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./contatos.css"

export function Contatos() {
    return (
        <footer id='contatos'>
            <div>
                <div>
                  <h3>Me envie uma mensagem!</h3>                   
                </div>

                <div className="redes-sociais">
                    <a
                    href="mailto:dev.samuelbessa@gmail.com"
                    className="outer-shadow">
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#63E6BE",}} />
                    </a>

                    <a
                    href="https://www.linkedin.com/in/samuel-bessa-29a74a331/"
                    target="_blank" rel="noopener noreferrer"
                    className="outer-shadow">
                        <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#63E6BE",}} />
                    </a>

                    <a
                    href="https://github.com/SamuelBessa"
                    target="_blank" rel="noopener noreferrer"
                    className="outer-shadow">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#d6d",}} />
                    </a>

                    <a
                    href="https://wa.me/5538999315290"
                    target="_blank" rel="noopener noreferrer"
                    className="outer-shadow">
                        <FontAwesomeIcon icon={faWhatsapp} style={{color: "#63E6BE",}} />
                    </a>
                </div>
            </div>
        </footer>
    )
}