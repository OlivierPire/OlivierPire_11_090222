import React from "react";
import Header from "../components/Header";
import { NavLink } from "react-router-dom";
import "../styles/NotFound/index.scss";

const NotFound = () => {
	return (
		<div className="not-found">
			<Header />
			<h1>404</h1>
			<h2>Oups! La page que vous demandez n'existe pas.</h2>
			<NavLink className={"navToHome"} to="/">
				Retourner sur la page d'accueil
			</NavLink>
		</div>
	);
};

export default NotFound;
