import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Val from './components/Val';
import Year from './components/Year';
import GPAContextProvider from './context/GPAContexProvider';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});
function App() {
	const [selectedYear, setSelectedYear] = useState();
	const handleCallback = (childData) => {
		setSelectedYear(childData);
		console.log(selectedYear);
	};

	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Nav />
			<Year parentCallback={handleCallback}></Year>
			<Val number='4' />
			<GPAContextProvider></GPAContextProvider>
		</ThemeProvider>
	);
}

export default App;
