import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import parse from 'html-react-parser';

function BlogDetails() {
    const { blogID } = useParams()
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3004/getAllBlogs').then((res) => {
            setBlogs(res.data.result)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    const blog = blogs.filter(blog => blog.id === parseInt(blogID))



    return (
        <div className='w-full ' >
            {
                blog && blog.map((b, key) => (
                    <div style={{ maxHeight: '500px', backgroundImage: `url(${b.blog_main_img})` }} className='w-full bg-cover mx-auto h-[500px] bg-gray-50 flex items-center justify-center' key={key}  >
                        <div className='text-6xl our-products text-white blog-heading-text' >
                            {b.blog_title}
                        </div>
                    </div>
                ))
            }
            <div className='grid grid-cols-1 md:grid-cols-2 w-11/12 mx-auto gap-x-10 ' >
                <div className=' w-[125%] p-10 flex flex-col gap-y-7 ' >
                    {
                        blog && blog.map((b, key) => (
                            <div key={key} >
                                <h1 className='text-4xl font-semibold text-gray-700 mb-5  ' >
                                    {b.blog_subtitle}
                                </h1>
                                <p className='text-lg text-gray-600 ' >
                                    {parse(b.blog_content)}
                                </p>
                            </div>
                        ))
                    }
                </div>
                <div className='flex flex-col gap-y-10 w-full md:w-[80%] md:ml-auto p-5 px-5 md:px-20 ' >
                    {
                        blogs && blogs.map(blog => (
                            <Link to={`/useful/${blog.id}`} className='flex flex-col gap-y-1  ' >
                                <div className='w-full  flex items-center justify-center' >
                                    <img src={blog.blog_main_img} alt={blog.blog_title} className=' rounded' />
                                </div>
                                <h1 className='text-xl font-semibold text-gray-800 text-left' >
                                    {blog.blog_title}
                                </h1>
                                <p className='text-gray-500 font-semibold' >
                                    {blog.blog_subtitle}
                                </p>
                            </Link>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default BlogDetails;