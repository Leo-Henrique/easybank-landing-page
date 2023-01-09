import React from "react";
import { ReactComponent as SVGLogo } from "../assets/logo.svg";
import { ReactComponent as SVGHamburger} from "../assets/icon-hamburger.svg";
import Button from "./Button";
import Logo from "./Logo";

const Header = () => {
	const menu = ["Página Inicial", "Sobre", "Contato", "Blog", "Carreiras"];

    return (
		<header>
			<div className="container">
				<Logo />

				<button type="button"
				aria-controls="headerMenu"
				aria-expanded="false"
				aria-label="Abrir menu de navegação">
					<SVGHamburger />
				</button>

				<nav id="headerMenu">
					<ul>
						{menu.map(item => (
							<li key={item}>
								<a href="#">{item}</a>
							</li>
						))}
					</ul>
				</nav>

				<Button />
			</div>
		</header>
	);
};

export default Header;
