import GoogleMapReact from 'google-map-react';
import { IoLocationSharp } from 'react-icons/io5'



const AnyReactComponent = ({ text }) => <>
<IoLocationSharp className='inline-block text-3xl' />
<div className='text-white text-xl font-semibold w-80' >{text}</div>

 </>;



function Map() {

    const location = {
        lat: 37.9449931,
        lng: 58.4275158,
    }


    return (
        <div className=' w-full md:w-10/12 mx-0 md:mx-auto my-10' >
            <div className='h-[70vh] md:h-[80vh] w-full' >
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyDkHVH7GsXk3IuofVjgcQF6N1ml5P8jBRs' }}
                    defaultCenter={location}
                    defaultZoom={11}
                >

                    <AnyReactComponent
                        lat={location.lat}
                        lng={location.lng}
                        text={'Terönüm'}
                    />
                </GoogleMapReact>
            </div>
        </div>
    );
}

export default Map;