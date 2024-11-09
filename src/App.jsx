import { Header } from "./componentes/header/Header"
import { Projetos } from "./componentes/projetos/Projetos"
import { Section } from "./componentes/section-principal/Section"
import { SobreMin } from "./componentes/section-sobre-mim/sobre-mim"
import { Tecnologias } from "./componentes/tecnologias/tecnologias"

function App() {

  return (
    <>
    <Header />
    <Section />
    <SobreMin />
    <Projetos />
    <Tecnologias />
    </>
  )
}

export default App
