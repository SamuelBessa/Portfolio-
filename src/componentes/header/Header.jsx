import "./header.css"

export function Header() {
    return (
        <header>
            <div className="flex header">
                <div>
                    <h1 className="fundo-logo">SB</h1>
                </div>

                <nav>
                    <ul className="header-link">
                        <li>HOME</li>
                        <li>SOBRE</li>
                        <li>PROJETOS</li>
                        <li>TECNOLOGIAS</li>
                        <li>CONTATOS</li>
                    </ul>
                </nav>

                <div>
                    <div class="toggle-switch">
                        <label class="switch-label">
                            <input type="checkbox" class="checkbox" />
                                <span class="slider"></span>
                        </label>
                    </div>
                </div>
            </div>
        </header>
    )
}