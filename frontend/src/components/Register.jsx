import React,{ useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import { Input, Button,Form  } from 'semantic-ui-react'
import Zoom from '@material-ui/core/Zoom';
import axios from 'axios';
import { withRouter } from 'react-router';

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
        textAlign : 'center',
        width:'100%',
        margin : '1rem',
        paddingTop : '2rem',
        color:'red'
        
    },
    info : {
        textAlign : 'center',
        marginLeft : '5rem',
        marginBottom : '5rem',
        color:'red'
    }
}))
function Register(props) {
    const classes = useStyles();
    const [error,Seterror] = useState('');
    const [form, setForm] = useState({
        username: "",
        password: "",
        role : "user",
        fullname : "",
        banned : false
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
function submit(){
  axios.post('/user/register',form).then((res) => {
    console.log(res.data);
    if(res.data.error){
      Seterror(res.data.error);
    }
    else{
      props.history.push('/login');
    }
  })
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
                        <Input type='password' icon={{ name: 'user secret', circular: true, link: true }} name="password" onChange = {handleChange} / >
                          
                    </Form.Field>
                    <Form.Field>
                        <label>Full name</label>
                        <Input  icon={{name: 'address card outline', circular: true, link: true }} name="fullname" onChange = {handleChange} />
                    </Form.Field>
                    
                    <Button style = {{width:'100%'}} primary onClick={submit}>Register</Button>
                    
                </Form> 
               
            </div>
      
            
            </Card.Content>
        </Card>
        <span className={classes.info}>{error}</span>
    </div>
    
    </Zoom>
    
  );
}

export default withRouter(Register);
