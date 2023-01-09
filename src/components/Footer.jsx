import React from "react";
import Logo from "./Logo";
import { ReactComponent as SVGFacebook } from "../assets/icon-facebook.svg";
import { ReactComponent as SVGYouTube } from "../assets/icon-youtube.svg";
import { ReactComponent as SVGTwitter } from "../assets/icon-twitter.svg";
import { ReactComponent as SVGPinterest } from "../assets/icon-pinterest.svg";
import { ReactComponent as SVGInstagram } from "../assets/icon-instagram.svg";
import Button from "./Button";

const Footer = () => {
	const social = [
		SVGFacebook,
		SVGYouTube,
		SVGTwitter,
		SVGPinterest,
		SVGInstagram
	];
	const Links = () => {
		const links = [
			["Sobre nós", "Contato", "Blog"],
			["Carreiras", "Suporte", "Política de Privacidade"]
		];

		return (
			<>
				{links.map((col, index) => (
					<div key={index}>
						<nav>
							<ul>
								{col.map((link, index) => (
									<li key={index}>
										<a href="#">{link}</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
				))}
			</>
		)
	}

    return (
		<footer>
			<div className="container">
				<div>
					<Logo />

					<ul>
						{social.map((network, index) => (
							<li key={index}>
								{React.createElement(network)}
							</li>
						))}
					</ul>
				</div>

				{Links()}

				<div>
					<Button />

					<div>
						<p>
							Desenvolvido com <span>&hearts;</span>, React e SASS! Por {"\n"}
							<a href="https://www.linkedin.com/in/leonardo-henrique-/"
							target="_blank"
							rel="external noopener noreferrer">
								Leonardo Henrique
							</a>.
						</p>
						
						<p>
							Este é um desafio do {"\n"}
							<a href="https://www.frontendmentor.io/"
							target="_blank"
							rel="external noopener noreferrer">
								Frontend Mentor
							</a>.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
