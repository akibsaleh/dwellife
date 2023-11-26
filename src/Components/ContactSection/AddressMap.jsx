import GoogleMapReact from 'google-map-react';
import Marker from './Marker';

const AddressMap = () => {
  const handleMapClick = (mapProps, mapEvent) => {
    console.log('Map clicked at:', mapEvent.latLng);
  };
  return (
    <div className="google-map h-[420px] w-full rounded-box overflow-hidden">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDV3wt3Ww2AkFkQH6LmXAS2nNiklhvFPog' }}
        defaultCenter={[23.7991107,90.4161594]}
        zoom={17}
        onClick={handleMapClick}
      >
        <Marker
          lat={23.7991107}
          lng={90.4161594}
          draggable={true}
        />
      </GoogleMapReact>
    </div>
  );
};

export default AddressMap;
