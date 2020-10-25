import React from 'react';
import { Card, makeStyles,CardMedia } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Image,Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import axios from 'axios'
export default function CarouselSlide(props) {
    const {title,content,date,place,_id,imageUrl } = props.content;
    const event_path = 'event/'+_id;
    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor:'#ffe084',
            borderRadius: 5,
            padding: '75px 50px',
            margin: '0px 25px',
            width: '600px',
            height:'600px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        },
    }));

    const deleteEvent = () => {
        axios.delete('/admin/deletevent/'+_id);
        window.location.reload();
    }

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <Image
                    src={imageUrl}
                    size='small'
                    />
            <span style={{marginRight:'0.5rem'}}>{date}</span><Icon name = 'time'></Icon>
             
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {title}
            </Typography>
            <Typography variant="body1" color="textPrimary" component="p">
                {content}
            </Typography>
             
            </CardContent>
            <CardActions>
                
                <Link to = {event_path}>
                    <Button size="medium" color="primary">
                        Learn More
                    </Button>
                </Link>
                <Button size="medium" color="secondary" onClick={deleteEvent}>
                        Delete event
                </Button>
                
        </CardActions>
               
            </CardActionArea>
            
            
        </Card>
    );
}