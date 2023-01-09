import React from "react";
import Button from "./Button";
import IMGMockups from "../assets/image-mockups.png";

const Main = () => {
    return (
		<main>
			<div>
				<h1>
					Banco digital de última geração
				</h1>

				<p>
					Leve sua vida financeira online. Sua conta Easybank será um balcão único para gastar, economizar, fazer orçamentos, investir e muito mais.
				</p>

				<Button />
			</div>

			<div>
				<img src={IMGMockups} 
				alt="Representação de smartphones em forma de mockup, exibindo o aplicativo da Easybank" />
			</div>
		</main>
	);
};

export default Main;
