import React from "react";
import "./scss/style.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Benefits from "./components/Benefits";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import useAnimation from "./hooks/useAnimation";

const App = () => {
	useAnimation();

    return (
		<>
			<Header />
			<Main />
			<Benefits />
			<Articles />
			<Footer />
		</>
	);
};

export default App;
