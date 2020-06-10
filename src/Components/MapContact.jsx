import React from 'react';
import { 
  GoogleMap,
  withScriptjs,
  withGoogleMap
} from 'react-google-maps';

const Map = (props) => {
  return(
    <div>
      <GoogleMap 
        defaultZoom={20}
        defaultCenter={{ lat: 21.1285857, lng: -101.6489441}}
      />
    </div>    
  );
}

export default withScriptjs(
  withGoogleMap(
    Map
  )
)