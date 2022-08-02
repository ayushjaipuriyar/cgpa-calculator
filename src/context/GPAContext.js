import React from 'react';

const GPAContext = React.createContext({
	year: 1,
	credits: [22, 22, 24, 26, 28, 29, 16, 12],
	gpas: [0, 0, 0, 0, 0, 0, 0, 0],
});

export default GPAContext;
