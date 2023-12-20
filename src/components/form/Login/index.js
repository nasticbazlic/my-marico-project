import { useForm, Controller } from "react-hook-form";
import UserName from "../../Common/userNameField";
import PassworField from "../../Common/passwordField";
import  Button  from "../../button/button";


import './Login.css';

const LoginForm = () => {
    
  const { control, handleSubmit } = useForm({
		defaultValues: {
			userName: '',
			password: '',
		}
	});
        const onSubmit = data => console.log(data);
         
        return (
          <form onSubmit={handleSubmit(onSubmit)} className="form">
            <div className="form_login">
            <Controller 
              name="userName"
              control={control}
              render={({ field }) => (
                <UserName field={field} />	
              )}
			      />
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <PassworField field={field} />
              )}
            />

            </div>
            <Button type="submit" variation="  button_login">
                    Log In
            </Button>
          </form>
        );
      }
    


export default LoginForm;





