import { AiOutlineInstagram } from 'react-icons/ai'

function Footer() {
    return (
        <footer className='w-full  flex flex-col bg-primary-color ' >
            <div className='flex flex-col sm:flex-row text-white font-semibold gap-3  items-center justify-evenly px-10 py-5' >
                <h1 className="text-4xl  sm:text-5xl footer-logo select-none " >
                    "Ter önüm" - H.J.
                </h1>
                <p className='text-center' >
                    Türkmenistan, Aşgabat şäheri, Ýylgaý Durdyýew köçesi<br /> jaý №8 "Säher" binasy, 3-nji gat
                </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-3  justify-evenly items-center font-semibold text-xl text-white my-8 ' >
                <a href="tel:+99361xxxxxx"  className=' transition-all hover:-mr-5 rounded-full px-2 border  transition-colors hover:bg-white  hover:text-primary-color ' >+99361123456</a> 
                <a href="mailto:info@teronum.com"  className=' transition-all hover:-mr-5  rounded-full px-2 border  transition-colors hover:bg-white  hover:text-primary-color ' >info@teronum.com</a> 
                <a href="tel:+99361xxxxxx"  className=' transition-all hover:-mr-5  rounded-full px-2 border  transition-colors hover:bg-white  hover:text-primary-color ' >+99361654321</a>
            </div>
            <div className='flex justify-between items-center px-5 py-1 ' >
                <p className='text-white text-xs' >
                    Developed by <b> "Hasabym Developers" </b>
                </p>
                <div className='flex flex-row justify-between gap-x-4 ' >
                    <a href="insagram.com/teronum" className='rounded-full border px-2 transition-colors hover:pointer text-white hover:bg-white  hover:text-primary-color '  >
                        <AiOutlineInstagram className='inline-block' />
                    </a>
                    <a href="imo.com" className='rounded-full border px-2 transition-colors hover:pointer text-white hover:bg-white  hover:text-primary-color ' >
                        imo
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;