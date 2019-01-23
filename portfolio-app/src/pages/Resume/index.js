import React from 'react';
import { Link } from 'react-router-dom'
import { Button, Content, Heading, Image } from 'react-bulma-components';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import './index.css';

const jobs = [
	{
		name: 'Web Developer',
		place: 'Informatix Plus Compamy, Limited',
		dateStart: 'June 2018',
		dateEnd: 'present',
		description: [
			'Develop Web-app and RestAPI for existing and new products.',
			'Maintain and fix bugs follow the defect list of legacy web.',
			'learning new tools and technology (STACK) to improve efficiency of product.',
		],
	},
	{
		name: 'Programmer (Internship)',
		place: 'AAPICO ITS Company, Limited.',
		dateStart: 'June 2017',
		dateEnd: 'August 2017',
		description: [
			'The company have product about navigation and map.',
			'From the idea that we can tracking our children on school bus for safety.',
			'Research and develop school bus tracking system that can monitor school bus and children location via Web-app.',
		],
	}
]

const content = jobs.map((job) => {
	return (
		<div className="job">
			<Heading size={5}>{job.name}</Heading>
			<Heading size={6} subtitle>
				at {job.place} <br />
				{job.dateStart} - {job.dateEnd}			
			</Heading>
			<Content>
			</Content>
		</div>
	);
});

const Resume = () => (
	<div className="Resume">
		<div className="Resume-experience">
			<div className="Resume-exp-item">
				{content}
			</div>
		</div>
		<div className="Resume-skill">

		</div>
	</div>
)

export default Resume
