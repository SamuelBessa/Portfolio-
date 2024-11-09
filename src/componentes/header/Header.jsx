import "./header.css"

export function Header() {
    return (
        <header>
            <div className="flex header">
                <div>
                    <h1 className="logo">SB</h1>
                </div>

                <nav>
                    <ul className="header-link">
                        <li>
                            <a href="home">HOME</a>
                        </li>
                        <li>
                            <a href="#sobre">SOBRE</a>
                        </li>
                        <li>
                            <a href="#projetos">PROJETOS</a>
                        </li>
                        <li>
                            <a href="#tecnologias">TECNOLOGIAS</a>
                        </li>
                        <li>
                            <a href="#contatos">CONTATOS</a>
                        </li>
                    </ul>
                </nav>

                <div>
                    <input id="menu-hamburguer" type="checkbox" />

                    <label htmlFor="menu-hamburguer">
                        <div className="menu">
                            <span className="hamburguer"></span>
                        </div>
                    </label>
                </div>
            </div>
        </header>
    )
}