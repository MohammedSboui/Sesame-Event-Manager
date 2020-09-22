import React,{ useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import { Input, Button,Form  } from 'semantic-ui-react'
import Zoom from '@material-ui/core/Zoom';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
      paddingTop:'7%',
      paddingLeft : '40%',
      color : "White",
    },
    centrify : {
       
        width:'100%',
        margin : '1rem',
        paddingTop : '2rem',
        
    }
}))
function Register() {
    const classes = useStyles();
    const [form, setForm] = useState({
        username: "",
        password: "",
        fullname : ""
      });
  

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: value
      };
    });
    console.log(form);
}
  return (
    <Zoom in = {true}>
      <div className={classes.root}>
        <Card>
            <Image src= {require('../images/register.png')} wrapped ui={false} />
            <Card.Content>
            <div >
                <Form>
                    <Form.Field>
                        <label>Username</label>
                        <Input  icon={{ name: 'user', circular: true, link: true }} name="username" onChange = {handleChange} />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <Input type='password'  icon={{ name: 'user secret', circular: true, link: true }} name="password" onChange = {handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Full name</label>
                        <Input icon={{ name: 'address card outline', circular: true, link: true }} name="fullname" onChange = {handleChange} />
                    </Form.Field>
                    
                    <Button style = {{width:'100%'}} primary>Register</Button>
                </Form> 
                
            </div>
            
            </Card.Content>
        </Card>
    </div>
    </Zoom>
    
  );
}

export default Register;
