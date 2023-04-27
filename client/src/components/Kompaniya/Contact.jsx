import contact_banner from '../../assets/images/contact_banner.svg'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { SiGooglemessages } from 'react-icons/si'
import { TiTickOutline } from 'react-icons/ti'
import Map from './Map'
import { useState } from 'react'
import axios from 'axios'
import { useTranslation } from 'react-i18next'


function Contact() {
    const { t } = useTranslation()
    const [clientName, setClientName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [content, setContent] = useState('')
    const [errors, setErrors] = useState('')
    // const [success, setSuccess] = useState('')
    // const [successStatus, setSuccessStatus] = useState(false)

    const ScrollToBottom = () => {
        window.scrollTo(0, 1320)
    }

    const handleEmailSubmit = (e) => {
        e.preventDefault()
        if (clientName != '' && phoneNumber != '' && email != '' && content != '') {
            axios.post('http://localhost:3004/sendMail', {
                clientName,
                phoneNumber,
                email,
                content
            }).then((res) => {
                console.log("Successfully sent email datas!")
            }).catch((error) => {
                console.log('Email maglumatlaryny server-e ugradylanda nasazlyk yuze chykdy! ', error)
            })
            setErrors('')
            setClientName('')
            setPhoneNumber('')
            setEmail('')
            setContent('')
        } else {
            setErrors(t('sendMailError'))
        }

    }



    return (
        <main className='py-20 bg-gray-50'  >
            <div className=' flex flex-col md:flex-row items-center h-6/12 pt-10 pb-10 md:pb-20  ' >
                <div className='w-full lg:w-1/2 h-full p-0 md:p-10 px-4 md:px-14' >
                    <h1 className='text-4xl md:text-5xl font-bold font-sans-serif antialiased text-gray-700 pb-4' >
                        Biziň bilen habarlaşyň
                    </h1>
                    <p className='text-gray-700 text-lg'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo harum odit consequatur cumque magni dignissimos.
                    </p>
                </div>
                <div className='w-full lg:w-1/2  h-full mb-10 ' >
                    <img src={contact_banner} className='w-full object-contain h-80' alt="Contact image" />
                </div>
            </div>
            <div className='flex flex-col  md:flex-row items-center w-10/12  md:w-9/12 mx-auto gap-y-10 md:gap-y-0 gap-x-10 h-auto md:h-80' >
                <div className='flex flex-col items-center border rounded p-5 py-8  gap-y-4 bg-white' >
                    <div className='text-gray-600 text-4xl' >
                        <BsFillTelephoneFill />
                    </div>
                    <h1 className='font-bold text-gray-700 text-xl'>
                        Bize jaň ediň
                    </h1>
                    <p className='font-semibold text-base md:text-lg text-gray-500 w-10/12 md:w-8/12 mx-auto text-center'>
                        Interested in HubSpot’s software? Just pick up the phone to chat with a member of our sales team.
                    </p>
                    <a href="tel:+99360000000" className='text-sky-600 font-medium text-lg hover:underline' >+99360000000</a>
                </div>
                <div className='flex flex-col items-center border rounded p-5 gap-y-4 bg-white ' >
                    <div className='text-gray-600 text-4xl' >
                        <SiGooglemessages />
                    </div>
                    <h1 className='font-bold text-gray-700 text-xl'>
                        {t('sendMail.header')}
                    </h1>
                    <p className='font-semibold text-base  md:text-lg text-gray-500 w-10/12 md:w-8/12 mx-auto text-center'>
                        Sometimes you need a little help from your friends. Or a HubSpot support rep. Don’t worry… we’re here for you.
                    </p>
                    <button
                        onClick={() => ScrollToBottom()}
                        className='bg-primary-color px-6 py-3 rounded-[1px] text-lg text-white transition-all hover:bg-opacity-70' >
                        Bize yazmak
                    </button>
                </div>
            </div>
            <Map />

            <div className='w-11/12  md:w-8/12 mx-auto'  >

                <form className='w-full h-auto border rounded p-10 shadow-lg bg-white' onSubmit={handleEmailSubmit} >
                    <h1 className='font-bold text-gray-700 text-xl text-center mb-10 flex items-center justify-center gap-x-5' >
                        <div className='text-gray-600 text-4xl inline-block' >
                            <SiGooglemessages />
                        </div> <span>{t('sendMail.header')}</span>
                    </h1>
                    <div className='w-full flex flex-col gap-y-4 md:flex-row  items-center gap-x-10' >
                        <input type="text" value={clientName} className='border rounded-[1px] px-3 py-1 outline-[1px] outline-gray-500 w-full text-gray-900 font-semibold transition-colors hover:border-gray-500 ' placeholder={t('sendMail.name')}
                            onChange={(e) => setClientName(e.target.value)}
                        />
                        <input type="text" value={phoneNumber} className='border rounded-[1px] px-3 py-1 outline-[1px] outline-gray-500 w-full text-gray-900 font-semibold  transition-colors hover:border-gray-500' placeholder={t('sendMail.phoneNumber')}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                    </div>
                    <div className='w-full flex flex-col gap-y-4 md:flex-row mt-5  items-center gap-x-10' >
                        <input type="email" value={email} className='border rounded-[1px] px-3 py-1 outline-[1px] outline-gray-500 w-full text-gray-900 font-semibold transition-colors hover:border-gray-500 ' placeholder={t('sendMail.email')}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <textarea cols="30" rows="10" value={content} className='border rounded-[1px] px-3 py-1 outline-[1px] outline-gray-500 w-full mt-10 mb-5  text-gray-900 font-semibold  transition-colors hover:border-gray-500' placeholder={t('sendMail.content')}
                        onChange={(e) => setContent(e.target.value)}
                    >

                    </textarea>
                    <div className='flex flex-col sm:flex-row items-center justify-between'>
                        <p className='text-red-600 font-semibold' >{errors && errors}</p>
                        <button
                            type='submit'
                            className='bg-primary-color px-10 ml-auto py-1 rounded-[1px] text-lg text-white transition-all hover:bg-opacity-70'
                            onSubmit={handleEmailSubmit}
                        >
                            {t('sendMail.submitButton')}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Contact;