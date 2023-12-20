import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import './password.css'

const PassworField = ({ field }) => {
	const [show, setShow] = useState(false);

	const handleClickShowPassword = () => {
    setShow((value) => !value);
  };
	

	return (
		<TextField
			{...field}
			classes={{ root: 'passField' }}
			variant="standard"
			label="Password"
			type={show ? 'text' : 'password'}
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<IconButton
							onClick={handleClickShowPassword}
							edge="end"
						>
							{show ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				),
			}}
		/>
	)
}

export default PassworField;