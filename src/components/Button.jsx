import React from "react";

const Button = ({ classes }) => {
	const blockClass = "btn";

    return (
		<button className={classes ? `${classes} ${blockClass}` : blockClass}
		type="button">
			Solicitar Convite
		</button>
	);
};

export default Button;
