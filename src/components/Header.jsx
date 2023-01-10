import React from "react";
import { ReactComponent as SVGHamburger} from "../assets/icon-hamburger.svg";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
	const menu = ["Página Inicial", "Sobre", "Contato", "Blog", "Carreiras"];

    return (
		<header className="header">
			<div className="header__container container">
				<Logo classes="header__logo" />

				<button className="header__toggler"
				type="button"
				aria-controls="headerNav"
				aria-expanded="false"
				aria-label="Abrir menu de navegação">
					<SVGHamburger />
				</button>

				<nav className="header__nav"
				id="headerNav">
					<ul className="header__list">
						{menu.map(item => (
							<li key={item}
							className="header__item">
								<a className="header__anchor" href="#">{item}</a>
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
