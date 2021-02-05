import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/home/Home";
import Nav from "./pages/nav/Nav";
import About from "./pages/about/About";

function App() {
	return (
		<>
			<Home/>
			<Nav/>
			<About/>
		</>
	);
}

export default App;
