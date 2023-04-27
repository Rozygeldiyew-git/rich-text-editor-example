import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BsPatchCheckFill } from 'react-icons/bs'
import { Collapse } from 'react-collapse'


function HomeAboutRight() {
    

    const [tabs, setTabs] = useState(2)

    const showContent = (number) => {
        setTabs(number)
    }

    return (
        <div className=' w-full pl-16 flex flex-row' >
            <div className="flex flex-col" >
                {/* Years */}
                <ul>
                    <li className={`${tabs === 1 ? 'year-li ' : ''}`} onClick={() => showContent(1)} >
                        <div className={`border ${tabs === 1 ? 'year-link' : ''}  text-xl hover:cursor-pointer rounded-full w-32 h-32 flex items-center justify-center border-gray-600`} >
                            <span className={`our-products  w-full  text-center  ${tabs === 1 ? 'year-span-active year-span' : ''}`} >
                                2017
                            </span>
                        </div>
                    </li>
                    <li className={`${tabs === 2 ? 'year-li ' : ''}`} onClick={() => showContent(2)} >
                        <div className={`border ${tabs === 2 ? 'year-link' : ''}  text-xl hover:cursor-pointer  rounded-full w-32 h-32 flex items-center justify-center border-gray-600`} >
                            <span className={`our-products  w-full  text-center  ${tabs === 2 ? 'year-span-active year-span' : ''}`} >
                                2018
                            </span>
                        </div>
                    </li>
                    <li className={`${tabs === 3 ? 'year-li ' : ''}`} onClick={() => showContent(3)} >
                        <div className={`border ${tabs === 3 ? 'year-link' : ''}  text-xl hover:cursor-pointer  rounded-full w-32 h-32 flex items-center justify-center border-gray-600`} >
                            <span className={`our-products  w-full  text-center  ${tabs === 3 ? 'year-span-active year-span' : ''}`} >
                                2019
                            </span>
                        </div>
                    </li>
                    <li className={`${tabs === 4 ? 'year-li ' : ''}`} onClick={() => showContent(4)} >
                        <div className={`border ${tabs === 4 ? 'year-link' : ''}  text-xl hover:cursor-pointer  rounded-full w-32 h-32 flex items-center justify-center border-gray-600`} >
                            <span className={`our-products  w-full  text-center  ${tabs === 4 ? 'year-span-active year-span' : ''}`} >
                                2020
                            </span>
                        </div>
                    </li>
                    <li className={`${tabs === 5 ? 'year-li ' : ''}`} onClick={() => showContent(5)} >
                        <div className={`border ${tabs === 5 ? 'year-link' : ''}  text-xl hover:cursor-pointer  rounded-full w-32 h-32 flex items-center justify-center border-gray-600`} >
                            <span className={`our-products  w-full  text-center  ${tabs === 5 ? 'year-span-active year-span' : ''}`} >
                                2021
                            </span>
                        </div>
                    </li>
                </ul>
            </div>
            <div className=' w-full p-10 overflow-x-hidden' >
                {/* Contents */}
                <div className={`${tabs === 1 ? 'tab-content flex flex-col gap-y-6 ' : ' hidden'}`} >
                    <hr className='w-28 bg-primary-color text-primary-color ' />
                    <h1 className='our-products text-2xl' >
                        Our products Teronum - 2017
                    </h1>
                    <p className='text-gray-600 w-8/12' >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea commodi doloribus fugiat dignissimos eligendi autem culpa itaque quidem dolorem officia, est incidunt delectus nobis, molestias minus perspiciatis sunt magnam deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi odio hic, itaque reiciendis, eaque commodi, error quasi tempora ratione nisi doloribus perferendis aspernatur exercitationem maiores cum rem officiis. Voluptatibus.
                    </p>
                    <ul className='flex flex-col gap-y-2' >
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={`${tabs === 2 ? 'tab-content flex flex-col gap-y-6 ' : 'hidden'}`} >
                    <hr className='w-28 bg-primary-color text-primary-color ' />
                    <h1 className='our-products text-2xl' >
                        Our products Teronum - 2018
                    </h1>
                    <p className='text-gray-600 w-8/12' >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea commodi doloribus fugiat dignissimos eligendi autem culpa itaque quidem dolorem officia, est incidunt delectus nobis, molestias minus perspiciatis sunt magnam deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi odio hic, itaque reiciendis, eaque commodi, error quasi tempora ratione nisi doloribus perferendis aspernatur exercitationem maiores cum rem officiis. Voluptatibus.
                    </p>
                    <ul className='flex flex-col gap-y-2' >
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={`${tabs === 3 ? 'tab-content flex flex-col gap-y-6 ' : 'hidden'}`} >
                    <hr className='w-28 bg-primary-color text-primary-color ' />
                    <h1 className='our-products text-2xl' >
                        Our products Teronum - 2019
                    </h1>
                    <p className='text-gray-600 w-8/12' >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea commodi doloribus fugiat dignissimos eligendi autem culpa itaque quidem dolorem officia, est incidunt delectus nobis, molestias minus perspiciatis sunt magnam deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi odio hic, itaque reiciendis, eaque commodi, error quasi tempora ratione nisi doloribus perferendis aspernatur exercitationem maiores cum rem officiis. Voluptatibus.
                    </p>
                    <ul className='flex flex-col gap-y-2' >
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={`${tabs === 4 ? 'tab-content flex flex-col gap-y-6 ' : 'hidden'}`} >
                    <hr className='w-28 bg-primary-color text-primary-color ' />
                    <h1 className='our-products text-2xl' >
                        Our products Teronum - 2020
                    </h1>
                    <p className='text-gray-600 w-8/12' >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea commodi doloribus fugiat dignissimos eligendi autem culpa itaque quidem dolorem officia, est incidunt delectus nobis, molestias minus perspiciatis sunt magnam deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi odio hic, itaque reiciendis, eaque commodi, error quasi tempora ratione nisi doloribus perferendis aspernatur exercitationem maiores cum rem officiis. Voluptatibus.
                    </p>
                    <ul className='flex flex-col gap-y-2' >
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                    </ul>
                </div>
                <div className={`${tabs === 5 ? 'tab-content flex flex-col gap-y-6 ' : 'hidden'}`} >
                    <hr className='w-28 bg-primary-color text-primary-color ' />
                    <h1 className='our-products text-2xl' >
                        Our products Teronum - 2021
                    </h1>
                    <p className='text-gray-600 w-8/12' >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea commodi doloribus fugiat dignissimos eligendi autem culpa itaque quidem dolorem officia, est incidunt delectus nobis, molestias minus perspiciatis sunt magnam deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi odio hic, itaque reiciendis, eaque commodi, error quasi tempora ratione nisi doloribus perferendis aspernatur exercitationem maiores cum rem officiis. Voluptatibus.
                    </p>
                    <ul className='flex flex-col gap-y-2' >
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                        <li className='flex flex-row gap-x-3 items-center' >
                            <BsPatchCheckFill className='inline-block text-primary-color' />
                            <span className='text-black text-sm italic' >
                                Ashgabat is the capital of the Turkmenistan
                            </span>
                        </li>
                    </ul>
                </div>




            </div>
        </div>
    );
}

export default HomeAboutRight;