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
       
        width:'100%',
        margin : '1rem',
        paddingTop : '2rem',
        
    },
    info : {
      textAlign : 'center',
      marginLeft : '5rem',
      marginBottom : '5rem',
      color:'red'
  }
}))
function Login(props) {
    const [error,Seterror] = useState('');
    const classes = useStyles();
    const [form, setForm] = useState({
        username: "",
        password: ""
        
      });
  

  function handleChange(event) {
    const { name, value } = event.target;
    setForm(prevForm => {
      return {
        ...prevForm,
        [name]: value
      };
    });
}
function submit(){
  axios.post('/user/login',form).then((res) => {
    if(!res.data.error){
      localStorage.setItem('usertoken', res.data);
      props.history.push('/');
      window.location.reload();

   }
   else{
     Seterror(res.data.error);
   }
  })
}
  return (
    <Zoom in = {true}>
        <div className={classes.root}>
        <Card>
            <Image src= {require('../images/logo.png')} wrapped ui={false} />
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
                    
                    
                    <Button style = {{width:'100%'}} primary onClick={submit}>Login</Button>
                    
                    
                    
                </Form> 
                
            </div>
            
            </Card.Content>
        </Card>
        <span className={classes.info}>{error}</span>
    </div>
    </Zoom>
    
  );
}

export default withRouter(Login);
