import "./tecnologias.css"

export function Tecnologias() {

    const Tecnologias = {
        html: {
            nome: "HTML",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            sobre: "Domínio dos fundamentos de HTML para criar estruturas semânticas, acessíveis e bem organizadas, permitindo uma base sólida para o desenvolvimento de páginas web eficazes e otimizadas.",
        },

        css: {
            nome: "CSS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            sobre: "Habilidade em CSS para desenvolver layouts responsivos e estilização avançada, com proficiência em Flexbox, Grid e boas práticas de design, garantindo uma apresentação visual atraente e funcional.",
        },

        javascript: {
            nome: "JavaScript",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            sobre: "Conhecimento sólido em JavaScript, incluindo manipulação de DOM, funções assíncronas e boas práticas de programação. Capaz de criar interações dinâmicas e otimizar a experiência do usuário.",
        },

        git: {
            nome: "Git",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            sobre: "Experiência com Git para controle de versão eficiente, incluindo uso de branches, merge e resolução de conflitos. Comando de boas práticas para gerenciar e colaborar em projetos de forma organizada.",
        },

        react: {
            nome: "React",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            sobre: "Base sólida em React, com experiência no desenvolvimento de interfaces interativas e escaláveis usando componentes funcionais, hooks e gerenciamento de estado. Estou me especializando na biblioteca para aprofundar conhecimentos e boas práticas, visando a criação de aplicações web dinâmicas e eficientes.",
        },

        typescript: {
            nome: "TypeScript",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            sobre: "Conhecimento básico em TypeScript, com capacidade para adicionar tipagem ao JavaScript, o que contribui para maior segurança e manutenção de código. Em fase de aprendizado contínuo para aprofundar o domínio dessa ferramenta.",
        },

        jquery: {
            nome: "JQuery",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
            sobre: "Familiaridade com jQuery para manipulação de DOM e criação de interações simples, facilitando tarefas com JavaScript. Utilizo jQuery em projetos específicos, embora esteja focado em aprimorar minhas habilidades em JavaScript e frameworks modernos.",
        },

        redux: {
            nome: "Redux",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
            sobre: "Conhecimento em Redux para gerenciamento de estado global em aplicações React, permitindo organizar dados de maneira previsível e escalável. Estou em fase de aprofundamento para aprimorar a eficiência na estruturação de estados complexos.",
        },

        jest: {
            nome: "Jest",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
            sobre: "Familiaridade com Jest para criação de testes automatizados, garantindo a qualidade e a estabilidade do código. Atualmente, estou estudando mais a fundo para fortalecer habilidades em testes unitários e funcionais.",
        },

    }

    return (
        <section id="tecnologias">
            <div>
                <h2 className="titulo">Tecnologias</h2>

                <div className="div-tec">
                    <ul>
                        {Object.values(Tecnologias).map((tec, index) => (
                            <li key={ImageBitmapRenderingContext}>
                                <div>
                                    <img className="img" src={tec.img} alt={tec.nome} />

                                    <h3>{tec.nome}</h3>
                                </div>

                                <div>
                                    <p>{tec.sobre}</p>
                                </div>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </section>
    )
}