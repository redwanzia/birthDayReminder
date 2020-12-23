import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
	const [ people, setPeople ] = useState(data);


	const clearAll = () => {
		setPeople([]);
	};
	return (
		<main>
			<section className='container'>
				<h2>{data.length} Birthdays Today</h2>
				<List people={people} />
				<button onClick={clearAll} className='btn'>
					clear all
				</button>
			</section>
		</main>
	);
}

export default App;
