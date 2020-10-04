import React from "react";
import "./About.css";
import VotrCrwd from "./../assets/VotrCrwd.jpg";
import {Box} from "@material-ui/core";
import Alex from "./../assets/AlexCheng.jpg";
import Ethan from "./../assets/EthanLee.png";
import Kevin from "./../assets/KevinHuang.jpg";
import Lucas from "./../assets/LucasPao.JPG";


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
					VotrCrwd was formed by 4 Harvard students whose mission was to transform democracy.
					<hr/>

					<div id="parent">
						<div>
							<img src={Alex} height="100" alt="Alex"/>
							<h6> Alex Cheng <br/> Harvard 23' <br/> Utah </h6>
						</div>

						<div>
							<img src={Ethan} height="100" alt="Ethan"/>
							<h6> Ethan Lee <br/> Harvard 23' <br/>  Massachusetts </h6>
						</div>
						
						<div>
							<img src={Kevin} height="100" alt="Kevin"/>
							<h6> Kevin Huang <br/> Harvard 23' <br/> Minnesota </h6>
						</div>
						
						<div>
							<img src={Lucas} height="100" alt="Lucas"/>
							<h6> Lucas Pao <br/> Harvard 23' <br/> Tennessee </h6>
						</div>
					</div>
					
				</Box>
			</div>
		);
	}
}

export default About;
