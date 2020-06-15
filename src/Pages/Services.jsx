import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import { searchServices } from '../Actions/service';
import MyCarousel from '../Components/Carousel';
import CardInfo from '../Components/CardInfo';
import ProgressBar from '../Components/ProgressBar';
import { makeStyles } from '@material-ui/core/styles';

export default function Services() {

  const dispatch = useDispatch();
  const loading = useSelector(state => _.get(state, 'service.loading'));
  const results = useSelector(state => _.get(state, 'service.result'));
  const error = useSelector(state => _.get(state, 'service.error'));  
   
  //CONSTANTES PARA EL PROGRESS VAR 
  const [progress, setProgress] = React.useState(0);
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#D6770F',
    },
  });
  
  const classes = useStyles();

  useEffect(() => {
    if (
      (!loading && !results) &&
      !error
    ) {
      dispatch(searchServices());
    }
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  });

  const renderServices = () =>  {
   
    if (progress > 30 && results && results.length >= 1){
      return results.map((service, index) => (
      <div>
         <Grid key={index} item>
            <CardInfo {...service}/>
         </Grid>
      </div>
      ))
    }
  
    else if (loading) {
      return  <div className={classes.root}>
      <ProgressBar />
    </div>
    }
    else if (error) {
      return <h1 severity="error">Oooops, something terrible has happened! :/</h1>;
    }
    return <ProgressBar />
  };

  return ( 
   <div>
    <MyCarousel />
    <Grid container spacing={1} bgcolor="warning-main">
      {renderServices()}
    </Grid>
    </div>
  );
}