import React from "react";
import Dropdown from "../components/Dropdown";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const About = () => {
	return (
		<div className="about">
			<Header />
			<Banner
				src={"./img/bannerAbout.png"}
				title={""}
				classname={"banner banner-phone"}
			/>
			<Dropdown
				title={"Fiabilité"}
				text={
					"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
				}
				className={"dropdown"}
			/>
			<Dropdown
				title={"Respect"}
				text={
					"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
				}
				className={"dropdown"}
			/>
			<Dropdown
				title={"Service"}
				text={
					"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
				}
				className={"dropdown"}
			/>
			<Dropdown
				title={"Responsabilité"}
				text={
					"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
				}
				className={"dropdown"}
			/>
			<Footer />
		</div>
	);
};

export default About;
