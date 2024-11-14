import Céu from "./img/Céu.jpg";
import Café from "./img/Café.jpg";
import Suíça from "./img/Suíça.jpg";
import Outono from "./img/Outono.jpg";

import "./projetos.css"

export function Projetos() {

    const InfoProjetos = {
        projeto1: {
            nome: "Pokedex",
            imagem: Céu,
            sobre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, corporis laboriosam numquam, vitae incidunt alias, cupiditate non ut aliquid labore ad voluptatem excepturi voluptates repellat fugit sint pariatur? Illum, voluptas?",
            tecnologias: " HTML, CSS, JavaScript, React",
            linkRepositorio: "https://github.com/SamuelBessa/Pokedex",
            linkProjeto: "",
        },

        projeto2: {
            nome: "Gerador de conselhos",
            imagem: Café,
            sobre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, corporis laboriosam numquam, vitae incidunt alias, cupiditate non ut aliquid labore ad voluptatem excepturi voluptates repellat fugit sint pariatur? Illum, voluptas?",
            tecnologias: " HTML, CSS, JavaScript, React",
            linkRepositorio: "",
            linkProjeto: "",
        },

        projeto3: {
            nome: "Consumindo API GitHub",
            imagem: Suíça,
            sobre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, corporis laboriosam numquam, vitae incidunt alias, cupiditate non ut aliquid labore ad voluptatem excepturi voluptates repellat fugit sint pariatur? Illum, voluptas?",
            tecnologias: " HTML, CSS, JavaScript, React",
            linkRepositorio: "",
            linkProjeto: "",
        },

        projeto4: {
            nome: "Landing-page xyz",
            imagem: Outono,
            sobre: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, corporis laboriosam numquam, vitae incidunt alias, cupiditate non ut aliquid labore ad voluptatem excepturi voluptates repellat fugit sint pariatur? Illum, voluptas?",
            tecnologias: " HTML, CSS, JavaScript, React",
            linkRepositorio: "",
            linkProjeto: "",
        }
    };

    return (
        <section id="projetos">
            <h2 className="titulo">Projetos</h2>

            <div className="container">
                <ul>
                    {Object.values(InfoProjetos).map((projeto, index) => (
                        <li key={index}>
                            <div className="div-img">
                                <img src={projeto.imagem} alt={projeto.nome} />
                                <h2>
                                    {projeto.nome}
                                </h2>
                            </div>

                            <div className="
                            div-descricao">
                                <p className="text-align">{projeto.sobre}</p>
                                <p className="text-align">
                                    <strong>Tecnologias usadas:</strong>
                                    {projeto.tecnologias}
                                </p>
                                <a className="btn" target="_blank" href={projeto.linkProjeto} >Ver Projeto</a>

                                <a className="btn" target="_blank" href={projeto.linkRepositorio} >Ver Repositorio</a>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>

            <div className="btn-mais-projetos flex">
                <button className="btn-projetos">Mais Projetos</button>
            </div>

            <div className="texto-contato flex">
                <h2>
                    <a href="https://wa.me/5538999315290"
                    target="_blank" rel="noopener noreferrer">
                        Vamos trabalhar juntos 👨‍💻
                    </a>
                </h2>
            </div>
        </section>
    )
}