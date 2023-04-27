import { useState, useEffect } from 'react'
import AddNewBlog from './AddNewBlog'
import axios from 'axios'
import EditBlog from './EditBlog';

const BlogAdmin = () => {
    const [showAddBlog, setShowAddBlog] = useState(false)
    const [blogs, setBlogs] = useState([])
    const [editBlog, setEditBlog] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:3004/getAllBlogs').then((res) => {
            setBlogs(res.data.result)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    const deleteBlog = (blogID) => {
        const conf = window.confirm("Hakykatdanam shu blog-y ochurmek isleyarsinizmi ?")
        if (conf === true) {
            axios.delete(`http://localhost:3004/deleteBlog/${blogID}`)
                .then(() => {
                    console.log(`Successfully deleted ${blogID} blog`)
                })
                .catch((error) => {
                    console.log('Blog ochurjek bolamda bir problema yuze chykdy! Ine sho aydyan problemamyn asly: ', error)
                })
            window.location.reload()
        }
    }

    const [blogID, setBlogID] = useState(0)
    const handleEditBlog = (id) => {
        setEditBlog(true)
        setBlogID(id)

    }

    return (
        <div>
            <div className='w-full flex items-center justify-between border-b px-10 py-3' >
                <p className='text-lg font-bold text-gray-600' >
                    Blogs area
                </p>
                <button className='px-3 py-1 rounded-md transition-colors  bg-primary-color text-white hover:bg-primary-color  hover:bg-opacity-70 font-semibold' onClick={() => setShowAddBlog(true)} >
                    Add new blog
                </button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-x-5  px-10 py-5' >




                {
                    blogs ? blogs.map((val, key) => (
                        <div className='border w-full pb-3 bg-white shadow-md' key={key} >
                            <div className='w-full h-40' >
                                <img src={val.blog_main_img} alt={val.blog_title} className='h-full w-full object-cover' />
                            </div>
                            <p className='p-1 text-gray-600  text-sm font-semibold line-clamp-3' >
                                {val.blog_title}
                            </p>
                            <div className='flex items-center justify-between py-2 px-1  ' >

                                <button className='px-3 py-1 rounded-md transition-colors  bg-primary-color text-white hover:bg-primary-color  hover:bg-opacity-70 font-semibold' onClick={() => handleEditBlog(val.id)}  >
                                    Edit
                                </button>
                                <button className='px-3 py-1 rounded-md transition-colors  bg-primary-color text-white hover:bg-primary-color  hover:bg-opacity-70 font-semibold'
                                    onClick={() => deleteBlog(val.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    )) : <div> No blog </div>
                }
            </div>
            <EditBlog  editBlog={editBlog} setEditBlog={setEditBlog} blogID={blogID} />
            <AddNewBlog showAddBlog={showAddBlog} setShowAddBlog={setShowAddBlog} />
          

        </div>
    )
}

export default BlogAdmin