import React,{ useState,useEffect } from 'react';
//import { SLIDE_INFO } from './constants';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import CarouselSlide from './CarouselSlide';
import Slide from '@material-ui/core/Slide';
import '../styling.css'
import axios from 'axios';


function Arrow(props) {
    const { direction, clickFunction } = props;
    const icon = direction === 'left' ? <FaChevronLeft /> : <FaChevronRight />;

    return <div onClick={clickFunction}>{icon}</div>;
}

function Home() {
    const [SLIDE_INFO,SetSLIDE_INFO] = useState(null);
   
    const [index, setIndex] = useState(0);
    
    const [numSlides,SetnumSlides] = useState(0);
    const [slideIn, setSlideIn] = useState(true);
    const [slideDirection, setSlideDirection] = useState('down');

    const onArrowClick = (direction) => {
        const increment = direction === 'left' ? -1 : 1;
        const newIndex = (index + increment + numSlides) % numSlides;

        const oppDirection = direction === 'left' ? 'right' : 'left';
        setSlideDirection(direction);
        setSlideIn(false);

        setTimeout(() => {
            setIndex(newIndex);
            setSlideDirection(oppDirection);
            setSlideIn(true);
        }, 500);
    };

    useEffect(  () => { 
        const getevents =  async () => axios.get('/user/getevents').then((res)=>{
            SetSLIDE_INFO(res.data);
            SetnumSlides(res.data.length);
        })
        getevents();
    },[])

    useEffect( () => {
        const handleKeyDown = (e) => {
            if (e.keyCode === 39) {
                onArrowClick('right');
            }
            if (e.keyCode === 37) {
                onArrowClick('left');
            }
        };
        

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    });
    if(!SLIDE_INFO){
        return(
            <div>
                dsfdsf
            </div>
        )
    }
    else
    return (
        <div className='Carousel'>
            <Arrow
                direction='left'
                clickFunction={() => onArrowClick('left')}
            />
            <Slide in={slideIn} direction={slideDirection}>
                <div>
                    <CarouselSlide content={SLIDE_INFO[index]} />
                </div>
            </Slide>
            <Arrow
                direction='right'
                clickFunction={() => onArrowClick('right')}
            />
        </div>
    );
}

export default Home;
