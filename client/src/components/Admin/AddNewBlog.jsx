import ReactModal from 'react-modal';
import { GiCancel } from 'react-icons/gi';
import React, { useState, useRef } from 'react';
import JoditEditor from "jodit-react";
import axios from 'axios';

const AddNewBlog = ({ showAddBlog, setShowAddBlog }) => {
    const [blogTitle, setBlogTitle] = useState('')
    const [blogSubTitle, setBlogSubTitle] = useState('')
    const [blogImage, setBlogImage] = useState(null)
    const [blogContent, setBlogContent] = useState(null)

    const customStyles = {
        content: {
            width: '800px',
            top: '40%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }


    const handleSubmitBlogData = () => {
        axios.post('http://localhost:3004/addBlog', {
            blogTitle,
            blogSubTitle,
            blogContent,
            blogImage,
        }, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(() => {
                console.log('Successfully posted new blog datas from AddNewBlog.jsx;')
            }).catch((error) => {
                console.log('AddNewBlog.jsx -de maglumatlar post edilende bir nasazlyk yuze chykdy! Ine ol nasazlyk: ', error)
            })


    }




    return (
        <div>



            <ReactModal
                isOpen={showAddBlog}
                style={customStyles}
                contentLabel="Example Modal"

            >
                <div className='max-h-[650px] py-10 overflow-y-auto' >
                    <div className='flex items-center justify-between px-3' >
                        <p className='text-gray-700 font-semibold text-lg' >
                            Add new blog
                        </p>
                        <button onClick={() => setShowAddBlog(false)} className=' text-gray-600' >
                            <GiCancel className='inline-block' />
                        </button>
                    </div>

                    <form
                        action='http://localhost:3004/addBlog'
                        method='POST'
                        onSubmit={handleSubmitBlogData}
                        encType='multipart/form-data'  >
                        <div className='my-3' >
                            <p className='text-sm text-gray-600 font-semibold' >
                                Blog title
                            </p>
                            <input
                                type="text"
                                name='blog_title'
                                onChange={(e) => setBlogTitle(e.target.value)}
                                className='w-full border rounded outline-none px-3 text-gray-700 text-sm font-semibold py-1'
                            />
                        </div>
                        <div className='my-3' >
                            <p className='text-sm text-gray-600 font-semibold' >
                                Blog subtitle
                            </p>
                            <input
                                type="text"
                                name='blog_subtitle'
                                onChange={(e) => setBlogSubTitle(e.target.value)}
                                className='w-full border rounded outline-none px-3 text-gray-700 text-sm font-semibold py-1'
                            />
                        </div>
                        <div>
                            <p className='text-sm text-gray-600 font-semibold' >
                                Blog main image
                            </p>
                            <input
                                type="file"
                                name='blogMainImage'
                                onChange={(e) => setBlogImage(e.target.files[0])}
                                accept="image/jpeg, image/jpg, image/png"
                            />
                        </div>
                        <div className='my-5' >
                            <p className='text-sm text-gray-600 font-semibold' >
                                Blog content
                            </p>

                            <JoditEditor
                                ref={editor}
                                // value={content}
                                config={config}
                                tabIndex={1} // tabIndex of textarea
                                onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                // onChange={e => setBlogContent(e.target.value)}
                                name="blog_content"
                            />
                        </div>




                        <div className='flex items-center justify-end pt-10' >
                            <button className='px-3 py-1 rounded-md transition-colors  bg-primary-color text-white hover:bg-primary-color  hover:bg-opacity-70 font-semibold' type='submit' >
                                Add new blog
                            </button>
                        </div>
                    </form>
                </div>

            </ReactModal>
        </div>
    )
}

export default AddNewBlog