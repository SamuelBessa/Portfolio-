import "./tecnologias.css"

export function Tecnologias() {

    const Tecnologias = {
        html: {
            nome: "HTML",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        css: {
            nome: "CSS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        javascript: {
            nome: "JavaScript",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        git: {
            nome: "Git",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        react: {
            nome: "React",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        typescript: {
            nome: "TypeScript",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        jquery: {
            nome: "JQuery",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg",
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        redux: {
            nome: "Redux",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        jest: {
            nome: "Jest",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
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