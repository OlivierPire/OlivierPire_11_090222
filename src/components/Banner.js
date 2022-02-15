import React from "react";

const Banner = ({ src, title, classname }) => {
	return (
		<div className={classname}>
			<img src={src} alt="" />
			<h1>{title}</h1>
		</div>
	);
};

export default Banner;
