import React from 'react';
import { Card, makeStyles,CardMedia } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import { Image,Icon } from 'semantic-ui-react'

export default function CarouselSlide(props) {
    const {title,content,date,place } = props.content;

    const useStyles = makeStyles(() => ({
        card: {
            backgroundColor:'#ffe084',
            borderRadius: 5,
            padding: '75px 50px',
            margin: '0px 25px',
            width: '600px',
            height:'400px',
            boxShadow: '20px 20px 20px black',
            display: 'flex',
            justifyContent: 'center',
        },
    }));

    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <Image
                    src={require('../images/logo.png')}
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
                <Button size="medium" color="primary">
                Make fav
                </Button>
                <Button size="medium" color="primary">
                Learn More
                </Button>
        </CardActions>
               
            </CardActionArea>
            
            
        </Card>
    );
}