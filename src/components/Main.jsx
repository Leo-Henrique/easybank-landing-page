import React from "react";
import Button from "./Button";
import IMGMockups from "../assets/image-mockups.png";

const Main = () => {
    return (
		<main className="main">
			<div className="main__content containerHalf containerHalf--left">
				<h1 className="main__title">
					Banco digital de última geração
				</h1>

				<p className="main__desc">
					Leve sua vida financeira online. Sua conta Easybank será um balcão único para gastar, economizar, fazer orçamentos, investir e muito mais.
				</p>

				<Button />
			</div>

			<div className="main__mockup">
				<div className="main__bg">
					<img className="main__img"
					src={IMGMockups} 
					alt="Representação de smartphones em forma de mockup, exibindo o aplicativo da Easybank" />
				</div>
			</div>
		</main>
	);
};

export default Main;
