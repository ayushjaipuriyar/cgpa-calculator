import {
	Box,
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio,
} from '@mui/material';
import React, { useContext } from 'react';
import GPAContext from '../context/GPAContext';

const Year = () => {
	const context = useContext(GPAContext);
	const handleChange = function (e) {
		context.year = e.target.value;
	};
	return (
		<Box sx={{ p: 2, display: 'flex', margin: 'auto' }}>
			<FormControl>
				<FormLabel id='demo-row-radio-buttons-group-label'>Year</FormLabel>
				<RadioGroup row name='years' defaultValue='1' onChange={handleChange}>
					<FormControlLabel value='1' control={<Radio />} label='1st' />
					<FormControlLabel value='2' control={<Radio />} label='2nd' />
					<FormControlLabel value='3' control={<Radio />} label='3rd' />
					<FormControlLabel value='4' control={<Radio />} label='4th' />
				</RadioGroup>
			</FormControl>
		</Box>
	);
};

export default Year;
