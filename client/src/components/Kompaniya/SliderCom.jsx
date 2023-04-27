import Slider from 'react-slick'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


function SliderCom() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    };
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3004/getAllBlogs').then((res) => {
            setBlogs(res.data.result)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <div>
            <div className='w-full  ' >
                <Slider  {...settings} >
                    {
                        blogs && blogs.map(blog => (
                            <Link to={`/useful/${blog.id}`} className=' bg-gradient-to-t from-black to-transparent   h-[600px]  relative ' key={blog.id}>
                                <img src={blog.blog_main_img} alt={blog.blog_title} className=' bg-opacity-50 w-full h-full absolute top-0 left-0 bottom-0 right-0 -z-10 object-cover ' />
                                <div className='w-full h-full flex items-end pb-10 justify-center ' >
                                    <div className='w-11/12 sm:w-8/12 mx-auto text-center' >
                                        <h1 className='text-4xl sm:text-6xl font-medium our-products text-white '  >
                                           {blog.blog_title}
                                        </h1>
                                        <p className='text-base sm:text-lg font-semibold text-gray-50 mt-4' >
                                           {blog.blog_subtitle}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </Slider>
            </div>
        </div>
    );
}

export default SliderCom;