import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Description from "./pages/Description";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/a-propos" exact element={<About />} />
				<Route path="/logements/:id" element={<Description />} />
				<Route path="/*" element={<NotFound />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
