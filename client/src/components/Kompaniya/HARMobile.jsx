import { useState } from 'react'
import { Collapse } from 'react-collapse'
import { BsPatchCheckFill } from 'react-icons/bs'

const HARMobile = () => {
    const years_contents = [
        {
            year: 2017,
            title: "Our products Teronum - 2017",
            content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea commodi doloribus fugiat dignissimos eligendi autem culpa itaque quidem dolorem officia, est incidunt delectus nobis, molestias minus perspiciatis sunt magnam deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi odio hic, itaque reiciendis, eaque commodi, error quasi tempora ratione nisi doloribus perferendis aspernatur exercitationem maiores cum rem officiis. Voluptatibus.",
            others: [
                "Ashgabat is the capital of the Turkmenistan",
                "Ashgabat is the capital of the Turkmenistan",
                "Ashgabat is the capital of the Turkmenistan"
            ]
        },
        {
            year: 2018,
            title: "Our products Teronum - 2018",
            content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea commodi doloribus fugiat dignissimos eligendi autem culpa itaque quidem dolorem officia, est incidunt delectus nobis, molestias minus perspiciatis sunt magnam deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi odio hic, itaque reiciendis, eaque commodi, error quasi tempora ratione nisi doloribus perferendis aspernatur exercitationem maiores cum rem officiis. Voluptatibus.",
            others: [
                "Ashgabat is the capital of the Turkmenistan",
                "Ashgabat is the capital of the Turkmenistan",
                "Ashgabat is the capital of the Turkmenistan"
            ]
        },
        {
            year: 2019,
            title: "Our products Teronum - 2019",
            content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea commodi doloribus fugiat dignissimos eligendi autem culpa itaque quidem dolorem officia, est incidunt delectus nobis, molestias minus perspiciatis sunt magnam deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi odio hic, itaque reiciendis, eaque commodi, error quasi tempora ratione nisi doloribus perferendis aspernatur exercitationem maiores cum rem officiis. Voluptatibus.",
            others: [
                "Ashgabat is the capital of the Turkmenistan",
                "Ashgabat is the capital of the Turkmenistan",
                "Ashgabat is the capital of the Turkmenistan"
            ]
        },
        {
            year: 2020,
            title: "Our products Teronum - 2020",
            content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea commodi doloribus fugiat dignissimos eligendi autem culpa itaque quidem dolorem officia, est incidunt delectus nobis, molestias minus perspiciatis sunt magnam deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi odio hic, itaque reiciendis, eaque commodi, error quasi tempora ratione nisi doloribus perferendis aspernatur exercitationem maiores cum rem officiis. Voluptatibus.",
            others: [
                "Ashgabat is the capital of the Turkmenistan",
                "Ashgabat is the capital of the Turkmenistan",
                "Ashgabat is the capital of the Turkmenistan"
            ]
        },
        {
            year: 2021,
            title: "Our products Teronum - 2021",
            content: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea commodi doloribus fugiat dignissimos eligendi autem culpa itaque quidem dolorem officia, est incidunt delectus nobis, molestias minus perspiciatis sunt magnam deserunt. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem excepturi odio hic, itaque reiciendis, eaque commodi, error quasi tempora ratione nisi doloribus perferendis aspernatur exercitationem maiores cum rem officiis. Voluptatibus.",
            others: [
                "Ashgabat is the capital of the Turkmenistan",
                "Ashgabat is the capital of the Turkmenistan",
                "Ashgabat is the capital of the Turkmenistan"
            ]
        },
    ]
    const [buttons, setButtons] = useState(null)

    const new_contents = years_contents.filter(ycf => ycf.year === buttons)
    return (
        <div className='w-full' >
            <div className='w-11/12 mx-auto sm:w-8/12  flex flex-col gap-y-5' >

                {years_contents.map((yc, key) => (
                    <button key={key} className={`our-products ${yc.year === buttons ? 'bg-primary-color text-white' : ''}  w-full border rounded-full py-2 transition-colors border-primary-color active:bg-primary-color active:text-white text-center `} onClick={() => setButtons(yc.year)} >
                        {yc.year}
                    </button>
                ))}
                {
                    new_contents.map((ycf, key) => (
                        <Collapse isOpened={true} key={key} >
                            <div className={`tab-content flex flex-col gap-y-6`} >
                                <hr className='w-28 bg-primary-color text-primary-color ' />
                                <h1 className='our-products text-2xl' >
                                    {ycf.title}
                                </h1>
                                <p className='text-gray-600 w-8/12' >
                                    {ycf.content}
                                </p>
                                <ul className='flex flex-col gap-y-2' >
                                    {
                                        ycf.others.map((o, key) => (
                                            <li className='flex flex-row gap-x-3 items-center' key={key}>
                                                <BsPatchCheckFill className='inline-block text-primary-color' />
                                                <span className='text-black text-sm italic' >
                                                    {o}
                                                </span>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Collapse>
                    ))
                }



            </div>

        </div>
    )
}

export default HARMobile