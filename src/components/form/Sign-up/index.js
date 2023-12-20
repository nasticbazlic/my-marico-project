import { useForm, Controller } from "react-hook-form";
import { TextField, InputAdornment  } from "@mui/material";
import { Email } from "@mui/icons-material";
import Button from '../../button/button';

import PassworField from "../../Common/passwordField";

import './Sign-up.css';
import UserName from "../../Common/userNameField";


const SignUpForm = () => {
	const { control, handleSubmit } = useForm({
		defaultValues: {
			userName: '',
			email: '',
			password: '',
		}
	});

	const onSubmit = data => console.log(data);
	return (
		<form className="container" onSubmit={handleSubmit(onSubmit)}>
			<Controller 
				name="userName"
				control={control}
				render={({ field }) => (
					<UserName field={field} />	
				)}
			/>
			<Controller
				name="email"
				control={control}
				render={({ field }) => (
					<TextField 
					{...field}
					label ='Email'
					classes={{ root:'email' }}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Email />
							</InputAdornment>
						),
					}}
					variant="standard"
				/>
				)}
			/>
			<Controller
				name="password"
				control={control}
				render={({ field }) => (
					<PassworField field={field} />
				)}
			/>
			
			<Button type="submit" variation="  button_login">
                    Log In
            </Button>
		</form>
	);
}

export default SignUpForm;