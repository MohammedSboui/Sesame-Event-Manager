import React,{ useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import { Input, Button,Form  } from 'semantic-ui-react'
import Zoom from '@material-ui/core/Zoom';
import axios from 'axios';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { DateInput} from 'semantic-ui-calendar-react'


function Addevent(){
    const [form, setForm] = useState({
        title: "",
        date: "",
        content : ''
        
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
        
    }
    return(
        <div>
            <Container>
            <Form>
                    <Form.Field>
                        <label>Username</label>
                        <Input   name="title" onChange = {handleChange} />
                    </Form.Field>
                    <Form.TextArea label='Event descriptio' placeholder='About the event ...' />
                    <DateInput
          inline
          name='date'
          value={this.state.date}
          onChange={this.handleDateChange}
        />
                    
                    <Button style = {{width:'100%'}} primary onClick={submit}>Add event</Button>
                    
                    
                    
                </Form> 

            </Container>
            
        </div>
    )
}

export default Addevent;