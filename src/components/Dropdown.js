import React, { useState } from "react";
import { IoChevronUpSharp } from "react-icons/io5";
import { IoChevronDownSharp } from "react-icons/io5";

const Dropdown = ({ title, text, className }) => {
	const [style, setStyle] = useState("content-hidden");

	const displayContent = () => {
		console.log("click");
		// eslint-disable-next-line no-unused-expressions
		style === "content" ? setStyle("content-hidden") : setStyle("content");
	};

	return (
		<div className={className}>
			<h1  onClick={displayContent}>
				{title}{" "}
				{style === "content-hidden" ? (
					<IoChevronUpSharp className="chevron" />
				) : (
					<IoChevronDownSharp className="chevron" />
				)}
			</h1>
			<div className={style}>
				{title === "Équipements" ? (
					<ul>
						{text.map((equipment) => (
							<li key={equipment}>{equipment}</li>
						))}
					</ul>
				) : (
					<p>{text}</p>
				)}
			</div>
		</div>
	);
};

export default Dropdown;
