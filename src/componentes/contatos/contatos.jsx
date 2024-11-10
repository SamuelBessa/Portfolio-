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
                    <a href="#" className="outer-shadow">
                        <FontAwesomeIcon icon={faEnvelope} style={{color: "#63E6BE",}} />
                    </a>
                    <a href="#" className="outer-shadow">
                        <FontAwesomeIcon icon={faLinkedinIn} style={{color: "#63E6BE",}} />
                    </a>
                    <a href="#" className="outer-shadow">
                        <FontAwesomeIcon icon={faGithub} style={{color: "#d6d",}} />
                    </a>
                    <a href="#" className="outer-shadow">
                        <FontAwesomeIcon icon={faWhatsapp} style={{color: "#63E6BE",}} />
                    </a>
                </div>
            </div>
        </footer>
    )
}