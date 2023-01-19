import React from "react";
import { ReactComponent as SVGHamburger } from "../assets/icon-hamburger.svg";
import { ReactComponent as SVGClose } from "../assets/icon-close.svg";
import Button from "./Button";
import Logo from "./Logo";
import useToggle from "../hooks/useToggle";

const Header = () => {
    const menu = ["Página Inicial", "Sobre", "Contato", "Blog", "Carreiras"];
    const togglerRef = React.useRef();
    const elementRef = React.useRef();
    const callbackStart = () => togglerRef.current.classList.add("--hidden");
    const callbackEnd = () => togglerRef.current.classList.remove("--hidden");
    const { visibility, open } = useToggle(elementRef, callbackStart, callbackEnd);

    return (
        <header className="header">
            <div className="header__container container"
			data-animate>
                <Logo classes="header__logo" />

                <button
                    className="header__toggler"
                    type="button"
                    aria-controls="headerNav"
                    aria-expanded={visibility}
                    aria-label={visibility ? "Fechar menu de navegação" : "Abrir menu de navegação"}
                    onClick={() => visibility || open()}
                    ref={togglerRef}>
                    {visibility ? <SVGClose /> : <SVGHamburger />}
                </button>

                <nav className="header__nav" 
                id="headerNav" 
                ref={elementRef}>
                    <ul className="header__list">
                        {menu.map(item => (
                            <li key={item} className="header__item">
                                <a className="header__anchor" 
                                href="#">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Button classes="header__btn" />
            </div>
        </header>
    );
};

export default Header;
