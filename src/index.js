import React, { Component, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {Planet} from 'react-kawaii';
import axios from 'axios';
import "./styles.css";
import Quadrant from "./Quadrant";

const apiKey = process.env.REACT_APP_API_KEY;
const searchTerm = "art";
const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=${apiKey}`;


// const ArtApi = () => {
// 	const [firstAPI, setFirstAPI] = useState(null);
// 	const [secondAPI, setSecondAPI] = useState(null);

// 	const fetchFirstAPI = async() =>{
// 		const response = await axios.get('https://aws.random.cat/meow')
// 		setFirstAPI(response.data.file)
// 	}
// 	const fetchSecondAPI = async() =>{
// 		const response = await axios.get('https://randomfox.ca/floof/')
// 		setSecondAPI(response.data.image)
// 	}

// 	useEffect(()=>{
// 		fetchSecondAPI()
// 		fetchFirstAPI()
// 	},[])

// 	const clickHandler = () =>{
// 		setFirstAPI(null);
// 		setSecondAPI(null);
// 		fetchSecondAPI();
// 		fetchFirstAPI();
// 	}


// 	return (
// 		<div className="main">
// 			<Quadrant image={firstAPI}/>
// 			<Quadrant image={secondAPI}/>

// 			<section className="section">
// 				<Planet size={200} mood={(firstAPI && secondAPI) ? "blissful":"sad"} color="#FDA7DC" />
// 			</section>
// 			<section className="section">
// 				<button onClick={clickHandler}>
// 					Click me
// 				</button>
// 			</section>
// 		</div>
// 	);
// }

class ArtApi extends Component {
	state = {
		firstAPIData: [],
		secondAPIData: [],
	};

	componentDidMount() {
		this.fetchFirstAPI();
		this.fetchSecondAPI();
	}
 	fetchFirstAPI = async() =>{
		const response = await axios.get('https://aws.random.cat/meow')
		this.setState({firstAPIData:response.data.file})
		// setFirstAPI(response.data.file)
	}
	fetchSecondAPI = async() =>{
		const response = await axios.get('https://randomfox.ca/floof/')
		this.setState({secondAPIData:response.data.image})
		// setSecondAPI(response.data.image)
	}
	clickHandler = () =>{
		// this.setFirstAPI(null);
		// this.setSecondAPI(null);
		this.setState({firstAPIData:null,secondAPIData:null},()=>{
			this.fetchFirstAPI();
			this.fetchSecondAPI();
		});
	}

	render() {
		return (
			<div className="main">
 			<Quadrant image={this.state.firstAPIData}/>
 			<Quadrant image={this.state.secondAPIData}/>
 			<section className="section">
 				<Planet size={200} mood={(this.state.firstAPIData && this.state.secondAPIData) ? "blissful":"sad"} color="#FDA7DC" />
 			</section>
 			<section className="section">
 				<button onClick={this.clickHandler}>
 					Click me
 				</button>
 			</section>
 		</div>
		);
	}
}

export default ArtApi;

const rootElement = document.getElementById("root");
ReactDOM.render(<ArtApi />, rootElement);
