import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState('');
  
	return (
	  <div>
		<div className="trafficTop"></div>
		<div className="container">
		  <div
			className={`light red ${selectedColor === 'red' ? 'shine' : ''}`}
			onClick={() => setSelectedColor('red')}
		  />
		  <div
			className={`light yellow ${selectedColor === 'yellow' ? 'shine' : ''}`}
			onClick={() => setSelectedColor('yellow')}
		  />
		  <div
			className={`light green ${selectedColor === 'green' ? 'shine' : ''}`}
			onClick={() => setSelectedColor('green')}
		  />
		</div>
	  </div>
	);
  };
export default Home;
