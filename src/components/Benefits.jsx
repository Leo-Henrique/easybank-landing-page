import React from "react";
import { ReactComponent as SVGOnline } from "../assets/icon-online.svg";
import { ReactComponent as SVGBudgeting } from "../assets/icon-budgeting.svg";
import { ReactComponent as SVGOnboarding } from "../assets/icon-onboarding.svg";
import { ReactComponent as SVGAPI } from "../assets/icon-api.svg";

const Benefits = () => {
	const benefits = [
		{
			icon: SVGOnline,
			title: "Banco on-line",
			desc: "Nossos modernos aplicativos móveis e da Web permitem que você acompanhe suas finanças onde quer que esteja no mundo.",
		},
		{
			icon: SVGBudgeting,
			title: "Orçamento simples",
			desc: "Veja exatamente para onde vai o seu dinheiro todos os meses. Receba notificações quando estiver perto de atingir seus limites.",
		},
		{
			icon: SVGOnboarding,
			title: "Integração rápida",
			desc: "Não fazemos filiais. Abra sua conta online em minutos e comece a controlar suas finanças imediatamente.",
		},
		{
			icon: SVGAPI,
			title: "API aberta",
			desc: "Gerencie suas economias, investimentos, pensões e muito mais de uma conta. Rastrear seu dinheiro nunca foi tão fácil.",
		}
	];
	
    return (
		<section className="benefits">
			<div className="container">
				<h2 className="benefits__title">
					Porque escolher o Easybank?
				</h2>

				<p className="benefits__desc">
					Aproveitamos o Open Banking para transformar sua conta bancária em seu centro financeiro. Controle suas finanças como nunca antes.
				</p>

				<ul className="benefits__list">
				{benefits.map(({ icon, title, desc }) => (
					<li key={title} 
					className="benefits__item">
						<div>
							{React.createElement(icon)}
						</div>

						<h3 className="h3">{title}</h3>

						<p>{desc}</p>
					</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Benefits;
