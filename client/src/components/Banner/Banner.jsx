import { useState, useEffect} from 'react'
import axios from 'axios'



import Slider from "react-slick";

function Banner() {
    const [banners, setBanners] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3004/getBanners').then((res) => {
            setBanners(res.data.result)
        }).catch((error) => {
            console.log('/getBanners- axios-da error:', error)
        })
    }, [])
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        // fade: true
    };



    return (
        <div className="w-full h-[40vh] md:h-[70vh]  lg:h-screen    " >
            <Slider  {...settings}  >
                {
                    banners && banners.map(banner => (
                        <div key={banner.id} className='w-full h-[40vh] md:h-[70vh]  lg:h-screen    ' >
                            <img src={banner.img_url} alt={banner.alt_name} className='h-full w-full object-cover' />
                        </div>
                    ))
                }

            </Slider>








            {/* <video autoPlay='autoplay' loop muted style={{ width: '100%', height: '100%' }}  >
                <source src={banner_video} type="video/mp4" />
            </video>
            <button className="absolute bottom-10 left-[48%] bg-primary-color animate-bounce rounded-full px-3 py-1  font-bold text-white" onClick={() => ScrollToBottom()} >
                <BsArrowDown className="inline-block"  />
            </button> */}
        </div>
    );
}

export default Banner;