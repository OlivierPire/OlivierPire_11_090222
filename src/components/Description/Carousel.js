import React, { useState } from "react";
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";

const Carousel = ({ pictures, alt }) => {
	const [current, setCurrent] = useState(0);
	const length = pictures.length;

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	return (
		<div className="carousel">
			<IoChevronBackSharp onClick={prevSlide} className="arrow-left" />
			<IoChevronForwardSharp onClick={nextSlide} className="arrow-right" />
			{pictures.map((picture, index) => {
				return current === index && <img key={picture} src={picture} alt={alt} />;
			})}
		</div>
	);
};

export default Carousel;
