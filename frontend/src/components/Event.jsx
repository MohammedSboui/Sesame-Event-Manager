import React , {useEffect, useState} from 'react'
import axios from 'axios';
import { Grid,Image ,Card,Comment,Header,Icon, Form,Button, CommentText  } from 'semantic-ui-react';
import { makeStyles } from '@material-ui/core/styles';
import jwt_decode from 'jwt-decode'
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
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'3rem',
        marginLeft:'3rem'
    }
}))
function Event(props){
    const id = props.match.params.id;
    const [event,Setevent] = useState(null);
    const classes = useStyles();
    const [comments,Setcomments] = useState(null); 
    const [comment,SetComment] = useState('');
    const token = localStorage.usertoken;
    let decoded ;
    if(token)decoded = jwt_decode(token);
    useEffect(()=>{
        const id = props.match.params.id;
        const getevent = async () => {
           const fetchEvent  =  axios.get('/user/event/'+id).then(res => {
                console.log(res.data);
                return res.data
            })
            const fetchComments = axios.get('/user/comments/'+id).then(res => {
                console.log(res.data);
                Setcomments(res.data);
            })
            const res = await fetchEvent;
            const comments = await fetchComments;
            Setevent(res);
            console.log(comments);
        }

        getevent();
       
    },[])


    function commentchange(event){
        const { name, value } = event.target;
        SetComment(value);
    }

    function submitComment(){
        axios.post('/user/comment',{event : id , author : decoded._id ,content : comment}).then(res=>{
            SetComment('');
            Setcomments(prevcomments =>{
                return [...prevcomments,{event : id , author : decoded._id ,content : comment}]
            })
        })
    }



    if(!event || !comments){
        return (
            <div>
                loading..
            </div>
        )
    }
    return (
        <div>
            
                <Grid columns='two' divided>
                    <Grid.Row>
                        <Grid.Column>
                            
                            <Grid.Row>
                                <div className={classes.centrify}>
                                    <span style={{paddingRight:'0.5rem'}} >{event.date}</span><Icon name = 'time'></Icon>
                                </div>
                                <div className={classes.centrify}>
                                    <span style={{paddingRight:'0.5rem'}}> {event.place}</span><Icon name = 'location arrow'></Icon>
                                </div>
                                
                            </Grid.Row>
                            
                            <Grid.Row>
                                <div className={classes.centrify}>
                                    <Image
                                        src={require('../images/event.jpg')}
                                        size='big'
                                    />
                                </div>
                            </Grid.Row>
                               
                            
                        </Grid.Column>
                        <Grid.Column>
                            
                            <Card style={{width:'90%',height:'100%'}}>
                                <h1 className={classes.centrify} style={{marginTop:'3rem'}}>{event.title}</h1>
                                <p style={{margin:'5rem'}}>{event.content}</p>
                                
                                <Comment.Group>
                                    <Header as='h3' dividing style={{marginLeft:'1rem'}}>
                                    Comments
                                    </Header>
                                        {localStorage.usertoken && <Form reply style={{marginLeft:'1.5rem'}}>
                                                <Form.TextArea value={comment} onChange={commentchange}/>
                                                <Button content='Comment' labelPosition='left' icon='edit' primary onClick={submitComment} />
                                        </Form>}
                                        {
                                            comments.map((comment,index) => {
                                                return (
                                                    <Comment style={{marginLeft:'1rem'}} key={index}>
                                                        <Comment.Avatar src={require('../images/logo.png')} />
                                                        <Comment.Content >
                                                            <Comment.Author as='a'>{comment.author.fullname}</Comment.Author>
                                                            
                                                            <Comment.Text >{comment.content}</Comment.Text>
                                                        </Comment.Content>
                                                    </Comment>
                                                )
                                            })
                                        }
                                        
                                        
                                       
                                </Comment.Group>
                                
                                
                            </Card>
                                
                            
                           
                        </Grid.Column>
                        
                    </Grid.Row>
                    
                </Grid>
           
           
        </div>
    )
}
export default Event;