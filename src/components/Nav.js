import React from 'react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';
function Nav() {
	return (
		<Box
			sx={{
				display: 'flex',
				marginBottom: { xs: '15%', sm: '5%' },
				flexGrow: 1,
			}}
		>
			<AppBar component='nav'>
				<Toolbar>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						CPGA Calculator for MUJ
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Nav;
