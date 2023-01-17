import React from "react";

const Button = ({ classes, ...residual }) => {
	const blockClass = "btn";

    return (
		<button className={classes ? `${classes} ${blockClass}` : blockClass}
		{...residual}
		type="button">
			Solicitar Convite
		</button>
	);
};

export default Button;
