import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Content, Heading, Image } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './index.css';


const Home = () => (
	<div className="Home">
		<div className="Home-picture">
			<Image src="https://blog.ramboll.com/fehmarnbelt/wp-content/themes/ramboll2/images/profile-img.jpg" size="256x256"/>
		</div>
		<div className="Home-description">
			<Heading size={1}>My name's Bank,</Heading>
			<Content>
			I'm currently working as <strong>Web Developer (Back-end, Front-end sometimes). </strong> 
			the programming languages which i used are <strong>PHP (Yii Framework), Node.js (hapi.js). </strong>
			<br /><br />
			My goals in five years from the present, To find the way and job that suitable for me. 
			I'm eager to learn new technology and improve my skills. 
			</Content>
			<div className="Home-link-button">
				<Link to="/resume">
					<Button className="Link-button">MY RESUME</Button>
				</Link>
				<Link to="/projects">
					<Button className="Link-button">MY PROJECTS</Button>
				</Link>
				<Link to="/contact">
					<Button className="Link-button">CONTACT ME</Button>
				</Link>
			</div>
		</div>
	</div>
)

export default Home
