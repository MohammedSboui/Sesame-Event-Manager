import React,{ useState } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import { Input, Button,Form  } from 'semantic-ui-react'
import Zoom from '@material-ui/core/Zoom';
import axios from 'axios';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { DateInput,DateTimeInput} from 'semantic-ui-calendar-react'


function Addevent(){
    const [form, setForm] = useState({
        title: "",
        content : '',
        place : "",
        date: ""
      });
    function handleChange(event,{name, value}) {
        //const { name, value } = event.target;
        console.log(value);
        setForm(prevForm => {
          return {
            ...prevForm,
            [name]: value
          };
        });
    }
    function submit(){
        axios.post('/admin/addevent',form).then((res)=> {
          console.log(res);
        }
        )
    }
    return(
        <div>
            <Container>
            <br></br>
            <Form>
                    <Form.Field>
                        <label>Title</label>
                        <Input   name="title" onChange = {handleChange} />
                    </Form.Field>
                    <Form.Field>
                      <label>Description</label>
                      <Form.TextArea  onChange = {handleChange} name="content" placeholder='About the event ...' />
                    </Form.Field>
                    <Form.Field>
                        <label>Place</label>
                        <Input   name="place" onChange = {handleChange} />
                    </Form.Field>
                    
                    <Form.Field>
                      <label>Date</label>
                      <DateInput
                        inline
                        name='date'
                        value = {form.date}
                        onChange = {handleChange}
                      />
                     
                    </Form.Field>
                    
                    
                    <Button style = {{width:'100%'}} primary onClick={submit}>Add event</Button>
                    
                </Form> 
                <br></br>
            </Container>
            
        </div>
    )
}

export default Addevent;