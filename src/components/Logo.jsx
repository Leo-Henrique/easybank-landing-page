import React from "react";
import { ReactComponent as SVGLogo } from "../assets/logo.svg";

const Logo = () => {
    return (
		<a href="#"
		aria-label="Três formas retangulares na diagonal seguido do nome fictício da marca 'Easybank'">
			<SVGLogo />
		</a>
	);
};

export default Logo;
