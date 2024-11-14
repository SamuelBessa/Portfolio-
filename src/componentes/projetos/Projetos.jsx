import pokemon from "./img/pokemon.png"
import portfolio from "./img/portfolio.png"
import xyz from "./img/xyz-tela.gif.gif";
import apigithub from "./img/api-github.png";

import "./projetos.css"

export function Projetos() {

    const InfoProjetos = {
        projeto1: {
            nome: "Pokedex",
            imagem: pokemon,
            sobre: "Esta aplicação é uma Pokédex interativa desenvolvida em React.js, que utiliza a API PokeAPI para buscar dados de Pokémon em tempo real. A aplicação exibe uma lista de Pokémon que o usuário pode explorar e acessar detalhes específicos. O projeto implementa funcionalidades como alternância de temas (claro e escuro), carregamento dinâmico de dados e navegação entre páginas, proporcionando uma experiência fluida e moderna para os usuários.",
            tecnologias: " HTML, CSS, JavaScript, React",
            linkRepositorio: "https://github.com/SamuelBessa/Pokedex",
            linkProjeto: "https://samuelbessa.github.io/Pokedex/",
        },

        projeto2: {
            nome: "Portfólio",
            imagem: portfolio,
            sobre: "Este projeto é um portfólio pessoal desenvolvido para apresentar minhas habilidades, projetos e experiências como desenvolvedor front-end. Nele, busquei criar uma identidade visual que reflete profissionalismo, elegância e inovação, utilizando React e React Router para navegação entre as seções.",
            tecnologias: " HTML, CSS, JavaScript, React",
            linkRepositorio: "https://github.com/SamuelBessa/Portfolio-",
            linkProjeto: "",
        },

        projeto3: {
            nome: "Consumindo API GitHub",
            imagem: apigithub,
            sobre: "Este projeto foi uma quest do curso dev-quest, desenvolvida para aplicar conhecimentos de HTML, CSS e JavaScript e finalizar um módulo do curso. Trata-se de um projeto que consome uma a API do GitHub e busca dados de um usuário mostrando as informações na tela",
            tecnologias: " HTML, CSS, JavaScript",
            linkRepositorio: "https://github.com/SamuelBessa/fetch-github-api",
            linkProjeto: "https://samuelbessa.github.io/fetch-github-api/",
        },

        projeto4: {
            nome: "Landing-page xyz",
            imagem: xyz,
            sobre: "Este projeto foi desenvolvido como parte de um exercício prático após as aulas sobre CSS Grid. O objetivo era aperfeiçoar os conceitos aprendidos no curso. Trata-se de uma landing page simples para uma agência fictícia, XYZ, com toda a estrutura necessária para esse tipo de página.",
            tecnologias: " HTML, CSS",
            linkRepositorio: "https://github.com/SamuelBessa/landing-page-com-CSS-e-HTML-avan-ado-",
            linkProjeto: "https://samuelbessa.github.io/landing-page-com-CSS-e-HTML-avan-ado-/",
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