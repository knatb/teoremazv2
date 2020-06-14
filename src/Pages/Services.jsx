import React, { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import Grid from '@material-ui/core/Grid';
import _ from 'lodash';
import { searchServices } from '../Actions/service';
import MyCarousel from '../Components/Carousel';
import CardInfo from '../Components/CardInfo';
import LinearProgress from '@material-ui/core/LinearProgress';

export default function Services() {

  const dispatch = useDispatch();
  const loading = useSelector(state => _.get(state, 'service.loading'));
  const results = useSelector(state => _.get(state, 'service.result'));
  const error = useSelector(state => _.get(state, 'service.error'));
  useEffect(() => {
    if (
      (!loading && !results) &&
      !error
    ) {
      dispatch(searchServices());
    }
  });

  const renderServices = () =>  {
    if (results && results.length >= 1){
      return results.map((service, index) => (
	<Grid item>
        <CardInfo key={index} {...service}/>
      </Grid>
      ))
    }
    else if (loading) {
      return <LinearProgress size={80} color="primary"/>
    }
    else if (error) {
      return <h1 severity="error">Oooops, something terrible has happened! :/</h1>;
    }
    return <div></div>
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