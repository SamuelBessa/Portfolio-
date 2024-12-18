import "./header.css"
import React, { useState, useEffect } from 'react';

export function Header() {

    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(window.scrollY);
  
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY < lastScrollY) {
          setIsVisible(true); // Exibe ao rolar para cima
        } else {
          setIsVisible(false); // Oculta ao rolar para baixo
        }
        setLastScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [lastScrollY]);

    const [isChecked, setIsChecked] = useState(false);
    const handleInputChange = () => {
        setIsChecked(!isChecked);
    };


    return (
        <header className={`${isVisible ? 'visible' : ''}`}>
            <div className="flex header">
                <div>
                    <h1 className="logo">SB</h1>
                </div>

                <nav>
                    <ul className={`header-link ${isChecked ? 'active' : ''}`}>
                        <li><a href="./">HOME</a></li>
                        <li><a href="#sobre">SOBRE</a></li>
                        <li><a href="#projetos">PROJETOS</a></li>
                        <li><a href="#tecnologias">TECNOLOGIAS</a></li>
                        <li><a href="#contatos">CONTATOS</a></li>
                    </ul>
                </nav>

                <div>
                    <input
                        id="menu-hamburguer"
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleInputChange}
                    />

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