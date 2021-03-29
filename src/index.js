import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {Planet} from 'react-kawaii';
import axios from 'axios';
import "./styles.css";
import Quadrant from "./Quadrant";

const apiKey = process.env.REACT_APP_API_KEY;
const searchTerm = "art";
const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;


const ArtApi = () => {
	const [firstAPI, setFirstAPI] = useState(null);
	const [secondAPI, setSecondAPI] = useState(null);

	const fetchFirstAPI = async() =>{
		const response = await axios.get('https://aws.random.cat/meow')
		setFirstAPI(response.data.file)
	}
	const fetchSecondAPI = async() =>{
		const response = await axios.get('https://randomfox.ca/floof/')
		setSecondAPI(response.data.image)
	}

	useEffect(()=>{
		fetchSecondAPI()
		fetchFirstAPI()
	},[])

	const clickHandler = () =>{
		setFirstAPI(null);
		setSecondAPI(null);
		fetchSecondAPI();
		fetchFirstAPI();
	}


	return (
		<div className="main">
			<Quadrant image={firstAPI}/>
			<Quadrant image={secondAPI}/>

			<section className="section">
				<Planet size={200} mood={(firstAPI && secondAPI) ? "blissful":"sad"} color="#FDA7DC" />
			</section>
			<section className="section">
				<button onClick={clickHandler}>
					Click me
				</button>
			</section>
		</div>
	);
}

export default ArtApi;

const rootElement = document.getElementById("root");
ReactDOM.render(<ArtApi />, rootElement);
