import freshF from '../../assets/images/fresh-f.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'



const UsefulPage = () => {
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
      <div className='   h-80 relative ' >
        <img src={freshF} alt="Fresh " className='w-full h-full object-cover blur-xs' />
        <h1 className="our-products   flex items-center justify-center text-3xl md:text-5xl  absolute top-0 left-0 right-0 bottom-0 w-full h-full  text-white  drop-shadow-2xl"  >
          <span className='flex items-center justify-center backdrop-sepia shadow-xl bg-black bg-opacity-40  px-6 py-3 rounded' >
            Ençeme peýdaly maslahatlar...
          </span>
        </h1>
      </div>
      <div className='w-11/12 mx-auto  pb-32' >
        <div className="w-full grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-20 my-10 px-5">

          {
            blogs.map(blog => (
              <Link to={`/useful/${blog.id}`} className='flex flex-col gap-y-1  bg-white  ' key={blog.id} >
                <div className='w-full  flex items-center justify-center' >
                  <img src={blog.blog_main_img} alt={blog.blog_title} className='w-full h-full rounded' />
                </div>
                <div className='mt-auto hover:text-primary-color' >
                  <h1 className='text-xl font-semibold text-gray-800 text-left' >
                    {blog.blog_title}
                  </h1>
                  <p className='text-gray-500 font-semibold' >
                    {blog.blog_subtitle}
                  </p>
                </div>
              </Link>
            ))
          }


        </div>
      </div>
    </div>
  )
}

export default UsefulPage