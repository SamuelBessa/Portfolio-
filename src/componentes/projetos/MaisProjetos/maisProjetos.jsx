import { useNavigate } from "react-router-dom"
import "./maisProjetos.css"

export function MaisProjetos() {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/Portfolio-");
    };


    return(
        <section>
            <button onClick={goToHome}>Voltar para Home</button>
            <h1 className="mensagem">Indisponivel sendo criada</h1>
        </section>
    )
}