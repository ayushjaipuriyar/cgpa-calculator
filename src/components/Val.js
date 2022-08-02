import { Box, Grid } from '@mui/material';
import React, { useContext } from 'react';
import SubCard from './SubCard';
import Total from './Total';
import GPAContext from '../context/GPAContext';

function Val(props) {
	const context = useContext(GPAContext);
	const number = props.number;
	return (
		<>
			<Box sx={{ p: 2, display: 'flex' }}>
				<Grid container>
					<SubCard num='1'></SubCard>
					<SubCard num='2'></SubCard>
					<SubCard num='3'></SubCard>
					<SubCard num='4'></SubCard>
					<SubCard num='5'></SubCard>
					<SubCard num='6'></SubCard>
					<SubCard num='7'></SubCard>
					<SubCard num='8'></SubCard>
					{/* {dummyArray.map((e, i) => ( */}
					{/* <Grid item key={i}> */}
					{/* <p>{e}</p> */}
					{/* </Grid> */}
					{/* ))} */}
					{/* // <Grid item></Grid> */}
				</Grid>
			</Box>
			<Total />
		</>
	);
}

export default Val;
