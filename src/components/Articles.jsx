import React from "react";
import IMGCurrency from "../assets/image-currency.jpg";
import IMGRestaurant from "../assets/image-restaurant.jpg";
import IMGPlane from "../assets/image-plane.jpg";
import IMGConfetti from "../assets/image-confetti.jpg";

const Articles = () => {
	const articles = [
		{
			image: {
				src: IMGCurrency,
				alt: "Várias notas de dinheiro de diferentes valores apoiadas em um objeto plano"
			},
			author: "Claire Robinson",
			title: "Receba dinheiro em qualquer moeda sem taxas",
			desc: "O mundo está ficando menor e estamos nos tornando mais móveis. Então, por que você deveria ser forçado a receber dinheiro apenas em um único ..."
		},
		{
			image: {
				src: IMGRestaurant,
				alt: "Um balcão de um restaurante, dando ênfase a um prato de comida"
			},
			author: "Wilson Hutton",
			title: "Mime-se sem se preocupar com dinheiro",
			desc: "Nosso recurso de orçamento simples permite separar seus gastos e definir limites realistas a cada mês. Isso significa que você ..."
		},
		{
			image: {
				src: IMGPlane,
				alt: "Asa de um avião sobrevoando nas nuvens com um sol de fim da tarde"
			},
			author: "Wilson Hutton",
			title: "Mime-se sem se preocupar com dinheiro",
			desc: "Queremos que você aproveite suas viagens. É por isso que não cobramos nenhuma taxa nas compras enquanto você estiver no exterior. Vamos até te mostrar ..."
		},
		{
			image: {
				src: IMGConfetti,
				alt: "Diversos confeitos coloridos típicos de confeitarias em um fundo azul falso"
			},
			author: "Claire Robinson",
			title: "Mime-se sem se preocupar com dinheiro",
			desc: "Depois de muito trabalho de toda a equipe, estamos ansiosos para lançar nosso beta fechado. É fácil solicitar um convite pelo site ..."
		}
	];

    return (
		<section>
			<div className="container">
				<h2>Latest Articles</h2>

				<div>
					{articles.map(({ image, author, title, desc }, index) => (
						<article key={index}>
							<div>
								<img src={image.src} 
								alt={image.alt} />
							</div>

							<div>
								<span>Por {author}</span>

								<h3>{title}</h3>

								<p>{desc}</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default Articles;
