import { Link } from 'react-router-dom'
import ReactModal from 'react-modal';
import { useState, useEffect, useRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import SearchModal from './SearchModal'
import { HiMenu } from 'react-icons/hi'
import { GiCancel } from 'react-icons/gi'
import axios from 'axios'
import BlogAdmin from './BlogAdmin'

function Admin() {
    const [showSearch, setShowSearch] = useState(false)
    const [showAddBanner, setShowAddBanner] = useState(false)
    const [showBannerArea, setShowBannerArea] = useState(true)
    const [showBlogArea, setShowBlogArea] = useState(true)
    const handleShowSearch = () => {
        setShowSearch(!showSearch)
    }
    const customStyles = {
        content: {
            width: '500px',
            top: '30%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    const [alt_name, setAlt_name] = useState('')
    const [bannerImage, setBannerImage] = useState(null)
    const handleBannerSubmit = () => {
        axios.post('http://localhost:3004/addBanner', {
            alt_name,
            bannerImage
        }, {
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(() => {
                console.log('success')
            }).catch(error => {
                console.log(error)
            })
    }
    const [banners, setBanners] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3004/getBanners').then((res) => {
            setBanners(res.data.result)
        }).catch((error) => {
            console.log('/getBanners- axios-da error:', error)
        })
    }, [])
    const deleteBanner = (id) => {
        const conf = window.confirm('Hakykatdanam banneri ochurmek isleyarsinizmi ?')
        if (conf === true) {
            axios.delete(`http://localhost:3004/deleteBanner/${id}`).then(() => {
                console.log('Deleted banner successfully')
            })
            window.location.reload()
        } else {
            return null
        }
    }
  

    const LogoutHandle = () => {
        const cookie = document.cookie;
        if(cookie.includes('rozygeldiyew')){
            document.cookie = 'parolName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            window.location.reload()
        }
    }




    return (
        <main >
            
                    <header className='w-full z-[9]  h-16 border-b bg-white shadow sticky top-0 ' >
                        <nav className='flex items-center gap-x-0 sm:gap-x-3 w-full h-full ml-auto' >
                            <button className='hidden p-3 text-xl pl-7 text-gray-500' >
                                <HiMenu className='inline-block' />
                            </button>
                            <a href='/' className='p-3 text-xl pl-7 text-gray-500 hover:text-primary-color' >
                                Go to site
                            </a>
                            <button onClick={LogoutHandle}>
                                Logout
                            </button>

                            <div className='flex w-3/12 items-center  ml-auto gap-x-3 transition-colors' >
                                <button className={`px-3 py-1 rounded-md  hover:bg-gray-200 ${showBannerArea ? 'bg-sky-400 text-white hover:bg-sky-500' : ''}`} onClick={() => setShowBannerArea(!showBannerArea)} >
                                    Banner
                                </button>
                                <button className={`px-3 py-1 rounded-md   ${showBlogArea ? 'bg-primary-color text-white hover:bg-primary-color hover:bg-opacity-70 ' : ''}`} onClick={() => setShowBlogArea(!showBlogArea)}   >
                                    Blogs
                                </button>
                            </div>
                            <button className='p-3 text-gray-500 flex items-center justify-center hidden sm:block rounded-full mr-5' style={{ backgroundColor: '#f1f5f9' }} onClick={handleShowSearch} >
                                <AiOutlineSearch size={20} />
                            </button>
                        </nav>
                    </header>
        
                    {/* Banner area */}
            {
                showBannerArea && (
                    <div>
                        <div className='w-full flex items-center justify-between border-b px-10 py-3' >
                            <p className='text-lg font-bold text-gray-600' >
                                Banners area
                            </p>
                            <button className='px-3 py-1 rounded-md transition-colors  bg-sky-400 hover:bg-sky-500 text-white font-semibold' onClick={() => setShowAddBanner(true)} >
                                Add new banner
                            </button>
                        </div>

                        <ReactModal
                            isOpen={showAddBanner}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <div className='flex items-center justify-between px-3' >
                                <p className='text-gray-700 font-semibold text-lg' >
                                    Add new banner
                                </p>
                                <button onClick={() => setShowAddBanner(false)} className=' text-gray-600' >
                                    <GiCancel className='inline-block' />
                                </button>
                            </div>

                            <form action='http://localhost:3004/addBanner' method='POST' encType='multipart/form-data' onSubmit={handleBannerSubmit} >
                                <div className='my-3' >
                                    <p className='text-sm text-gray-600 font-semibold' >
                                        Banner name
                                    </p>
                                    <input type="text" name='alt_name' onChange={(e) => setAlt_name(e.target.value)} className='w-full border rounded outline-none px-3 text-gray-700 text-sm font-semibold py-1' />
                                </div>
                                <div>
                                    <p className='text-sm text-gray-600 font-semibold' >
                                        Banner image
                                    </p>
                                    <input type="file" name='bannerImage' onChange={(e) => setBannerImage(e.target.files[0])} accept="image/jpeg, image/jpg,  image/png" />
                                </div>
                                <div className='flex items-center justify-end pt-10' >
                                    <button className='px-3 py-1 rounded-md transition-colors  bg-sky-400 hover:bg-sky-500 text-white font-semibold' onClick={() => setShowAddBanner(true)} type='submit' >
                                        Add banner
                                    </button>
                                </div>
                            </form>

                        </ReactModal>



                        


                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5   xl:grid-cols-6 gap-5 px-10 py-5' >
                            {
                                banners.map((banner) => (



                                    <div className='border w-[100%] pb-3 bg-white shadow-md' key={banner.id} >
                                        <div className='w-full h-40' >
                                            <img src={banner.img_url} alt={banner.alt_name} className='h-full w-full object-cover' />
                                        </div>
                                        <div className='flex items-center justify-between py-2 px-1' >
                                           
                                            <button className='px-3 py-1 rounded-md transition-colors ml-auto bg-sky-400 hover:bg-sky-500 text-white font-semibold'
                                                onClick={() => deleteBanner(banner.id)} >
                                                Delete
                                            </button>
                                        </div>
                                    </div>

                                ))

                            }
                        </div>


                    </div>
                )

            }
            {
                showBlogArea && <BlogAdmin showBlogArea={showBlogArea} setShowBlogArea={setShowBlogArea} />
            }

            <SearchModal showSearch={showSearch} setShowSearch={setShowSearch} />
            
        </main>
    );
}

export default Admin;