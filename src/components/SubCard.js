import React, { useContext, useState } from 'react';
import {
	Box,
	Paper,
	TextField,
	Typography,
	FormGroup,
	FormControlLabel,
	Switch,
	Grid,
} from '@mui/material';
import GPAContext from '../context/GPAContext';
function SubCard(props) {
	const context = useContext(GPAContext);
	const semester = parseInt(props.num);
	const [gpaValue, setGpaValue] = useState(10);
	const [creditValue, setCreditValue] = useState(context.credits[semester - 1]);
	const [isDisabled, setIsDisabled] = useState(true);
	// setCreditValue(context.credits[semester - 1]);
	const creditChangeHandler = () => {
		setIsDisabled(!isDisabled);
	};
	const handleInputChange = (e) => {
		console.log(e.target.value);
		if (e.target.name === 'gpa') {
			setGpaValue(e.target.value);
			context.gpas[semester - 1] = e.target.value;
		} else if (e.target.name === 'credits') {
			setCreditValue(e.target.value);
			context.credits[semester - 1] = e.target.value;
		}
	};
	return (
		<Grid item xs={12} md={3}>
			<Box sx={{ p: 1 }}>
				<Paper elevation={6} sx={{ padding: '5%' }}>
					<Typography variant='h6' align='left'>
						Semester {semester}
					</Typography>
					<br></br>
					<Box
						display='grid'
						alignItems='center'
						justifyContent='center'
						onChange={handleInputChange}
						value={gpaValue}
					>
						{/* gridTemplateColumns: { md: '1fr 1fr' }, */}
						{/* gap: 2, */}

						<TextField
							id='outlined-basic gpa'
							label='GPA'
							name='gpa'
							variant='outlined'
							type='number'
							max='4'
							// error={errors?.index ? true : false}
							// helperText={errors?.index?.message}
						/>
						<br></br>
						<TextField
							id='outlined-basic'
							label='Credits'
							name='credits'
							disabled={isDisabled}
							variant='outlined'
							onChange={handleInputChange}
							value={creditValue}
							type='number'
						/>
					</Box>
					<br></br>
					<FormGroup>
						<FormControlLabel
							control={<Switch />}
							label='Different credits ?'
							labelPlacement='start'
							onChange={creditChangeHandler}
						/>
					</FormGroup>
				</Paper>
			</Box>
		</Grid>
	);
}

export default SubCard;
