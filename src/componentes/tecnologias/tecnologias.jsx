import Outono from "../projetos/img/Suíça.jpg"
import "./tecnologias.css"

export function Tecnologias() {

    const Tecnologias = {
        html: {
            nome: "HTML5",
            img: Outono,
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        css: {
            nome: "CSS",
            img: Outono,
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        javascript: {
            nome: "JavaScript",
            img: Outono,
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        git: {
            nome: "Git",
            img: Outono,
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        react: {
            nome: "React",
            img: Outono,
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        typescript: {
            nome: "TypeScript",
            img: Outono,
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        },

        jquery: {
            nome: "JQuery",
            img: Outono,
            sobre: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat aperiam perspiciatis neque iusto id porro dicta reprehenderit, eos laudantium molestiae est, saepe animi cupiditate accusamus deleniti, expedita vel in quidem.",
        }
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