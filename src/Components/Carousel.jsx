import React from 'react';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    item: {
        alignItems: 'center',
        minHeight: '0px',
        justifyContent: 'center',
        margin: '50px 0px'
    },
    image: {
        width: '100%'
    }
  });
 
export default function MyCarousel(props) 
{
    var items = [
        {
            name: 'image1',
            url: require('../images/backgraound.jpg')
        },
        {
            name: 'image2',
            url: require('../images/backgraound1.jpg')
        },
        {
            name: 'image3',
            url: require('../images/backgraound2.jpg')
        }
    ]
    return (
      <div margin={20} height={300}> 
        <Carousel indicators={false}>          
            {   
               items.map( (item, num) => <Item item={item} key={num}/> )
            }
        </Carousel>
      </div>
    )
}
 
function Item(props)
{
    var styles = useStyles();
    return (
        <Paper className={styles.item}>
            <img className={styles.image} src={props.item.url} alt={props.item.name}/>
        </Paper>
    )
}
