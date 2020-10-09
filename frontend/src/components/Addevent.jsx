import React,{ useState,useRef } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import { makeStyles } from '@material-ui/core/styles';
import { Input, Button,Form  } from 'semantic-ui-react'
import Zoom from '@material-ui/core/Zoom';
import axios from 'axios';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { DateInput,DateTimeInput} from 'semantic-ui-calendar-react'
import {generateBase64FromImage} from '../util/generateBase64FromImage';


function Addevent(){
    const [form, setForm] = useState({
        title: "",
        content : '',
        place : "",
        image : null,
        date: ""
      });
    const [imgperview,setimgperview] = useState(null);
    const fileInputRef = useRef(null);
    function handleChange(event,{name, value}) {
        //const { name, value } = event.target;
        setForm(prevForm => {
          return {
            ...prevForm,
            [name]: value
          };
        });
    }
    function submit(){
        const formData = new FormData();
        formData.append('title',form.title);
        formData.append('content',form.content);
        formData.append('place',form.place);
        formData.append('image',form.image);
        formData.append('date',form.date);
        axios.post('/admin/addevent',formData).then((res)=> {
          console.log(res);
        }
        )
    }
    function fileChange(event){
      const img = event.target.files[0];
      generateBase64FromImage(img).then(b64=>{
        setimgperview(b64);
      })
      setForm(prevForm => {
        return {
          ...prevForm,
          ['image']: img
        };
      })

     
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
                      <label>Add an image cover of the event</label>
                      {imgperview && <Image src = {imgperview} size='medium'/>}
                      <Button
                        content="Choose File"
                        labelPosition="left"
                        icon="file"
                        onClick={() => fileInputRef.current.click()}
                      />
                      <input
                        ref={fileInputRef}
                        type="file"
                        name = "image"
                        hidden
                        onChange={fileChange}
                      />
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