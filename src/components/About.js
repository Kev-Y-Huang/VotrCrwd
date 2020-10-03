import React from "react";
import "./App.css";
import CivicInfo from "./civic-info/CivicInfo";
import GeoInfo from "./geoinfo/geoinfo";
import VotrCrwd from "./../assets/VotrCrwd.jpg";
import {Box} from "@material-ui/core";
import {Link} from "react-router-dom";


class About extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
				
		};
	}

	render() {
		return (
			<div style={{ backgroundColor: "rgba(255, 255, 255, 0.75)" }}>
				<Box width={700}>
					<h1 style={{fontSize: 80}}>About</h1>
					<img src={VotrCrwd} alt={"logo"}/>
                    <hr/>
                    VotrCrwd was formed by 4 students from a medium-sized liberal arts college just outside of Boston.
                    <hr/>
				</Box>
			</div>
		);
	}
}

export default About;
