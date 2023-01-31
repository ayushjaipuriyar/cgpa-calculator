import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Val from './components/Val';
import Year from './components/Year';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});
function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Nav />
			<Year></Year>
			<Val />
		</ThemeProvider>
	);
}

export default App;
