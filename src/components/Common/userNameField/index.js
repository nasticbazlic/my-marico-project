import { TextField, InputAdornment } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

import './userName.css';

const UserName = ({field}) => {
    return (
        <TextField 
					{...field}
					label='User Name'
					classes={{ root:'userName' }}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<AccountCircle />
							</InputAdornment>
						),
					}}
					variant="standard"
				/>
    )
}

export default UserName;