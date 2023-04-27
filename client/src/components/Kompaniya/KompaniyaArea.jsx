import logo from '../../assets/images/teronum-logo.png'
import { Link } from 'react-router-dom';
import { MdArrowRightAlt } from 'react-icons/md'

function KompaniyaArea() {
    return (
        <div className='w-full  flex justify-center  items-center px-10 h-[500px] relative'>
            {/* <img src={fresh} alt="Fresh image" className='absolute top-0 h-full w-full' /> */}
            <div className='absolute top-0 left-0 right-0 flex flex-row justify-center items-center gap-x-52 h-full' >
                <div className='flex flex-col gap-y-4 text-black border-l-[10px] border-l-black border-opacity-80 rounded pl-5' >

                    <h1 className='text-7xl font-black' >
                        Ter, Diňe Ter...
                    </h1>
                    <p className='text-2xl font-semibold opacity-80' >
                        Miwe we Bakja önümlerinde dogry <br /> saýlaw.
                    </p>
                    <Link to='about'   >
                        <button className='transition-all rounded-md py-1 px-3 bg-primary-color text-white inline-block link-button' >
                            Giňişleýin <MdArrowRightAlt className='inline-block ' />
                        </button>
                    </Link>
                </div>
                <Link to='/about'   >
                    <img src={logo} alt="Brand logo Teronum" className='w-[250px] h-[250px]  ' title='Has giňişleýin maglumat üçin...' />
                </Link>
            </div>

        </div>
    );
}

export default KompaniyaArea;