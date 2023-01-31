import React, { useContext, useState } from 'react';
import { Box, Paper, TextField, Typography, Grid, Button } from '@mui/material';
import GPAContext from '../context/GPAContext';

function Total() {
	const context = useContext(GPAContext);
	const calculateCredits = () => {
		let sum = 0;
		let i = 0;
		while (i < context.year * 2) {
			sum += context.credits[i];
			i++;
		}
		return sum;
	};
	const calculateCGPA = () => {
		let sum = 0;
		let i = 0;

		while (i < context.year * 2) {
			sum += context.gpas[i] * context.credits[i];
			i++;
		}
		sum = parseFloat(sum / calculateCredits()).toFixed(2);
		return sum;
	};
	const [totalCredits, setTotalCredits] = useState(calculateCredits);
	const [CGPA, setCGPA] = useState(0);
	const calc = () => {
		setTotalCredits(calculateCredits);
		setCGPA(calculateCGPA);
	};
	return (
		<Box sx={{ p: 2, display: 'flex' }}>
			<Grid container>
				<Grid item xs={12}>
					<Box sx={{ p: 1 }}>
						<Paper elevation={6} sx={{ padding: '5%' }}>
							<Typography variant='h6' align='left'>
								CGPA
							</Typography>
							<br></br>
							<Box display='grid' alignItems='center' justifyContent='center'>
								{/* gridTemplateColumns: { md: '1fr 1fr' }, */}
								{/* gap: 2, */}

								<TextField
									id='outlined-basic'
									label='GPA'
									name='gpa'
									variant='outlined'
									value={CGPA}
									disabled
								/>
								<br></br>
								<TextField
									id='outlined-basic'
									label='Credits'
									name='credits'
									variant='outlined'
									value={totalCredits}
									disabled
								/>
								<br></br>
								<Button variant='outlined' onClick={calc}>
									Calculate
								</Button>
							</Box>
						</Paper>
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Total;
