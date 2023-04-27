import logo from '../../assets/images/teronum-logo-white.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { MdLanguage, MdOutlineCancel } from 'react-icons/md'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { AiOutlineMenu } from 'react-icons/ai'


function Header() {
    const [hScroll, setHScroll] = useState(false)
    const { t } = useTranslation()
    const [changeL, setChangeL] = useState('')
    const [openSideNav, setOpenSideNav] = useState(false)
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            setHScroll(false)
        } else {
            setHScroll(true)
        }
        prevScrollpos = currentScrollPos;
    }
    useEffect(() => {
        if (t('language') == 'Language') {
            setChangeL('EN')
        } else if (t('language') == 'Dil') {
            setChangeL('TM')
        } else {
            setChangeL('RU')
        }
    }, [t('language')])

    useEffect(() => {
        let handleSideNav = () => {
                setOpenSideNav(false)
                document.body.backgroundColor = 'rgba(0,0,0)';
        }
        document.addEventListener("mousedown", handleSideNav)
        return () => {
            document.removeEventListener("mousedown", handleSideNav)
        }
    }, [openSideNav])

    return (
        <header className='w-full h-12 bg-primary-color sticky top-0 z-10'>
            <div  className={`block transition-all md:hidden h-screen w-full z-[300] fixed left-0 top-0 bottom-0 bg-black bg-opacity-90 ${openSideNav ? 'm-0' : '-ml-[1200px]'}`}  >
                <Link to='/' className='w-full bg-primary-color h-[25vh] flex items-center justify-center' >
                    <img src={logo} alt="Brand logo Teronum" />
                </Link>
                <div className='flex flex-col uppercase text-white px-4 gap-y-2 pt-5' >
                    <div className='flex items-center justify-between' >
                        <Link to='/' className='py-2' >
                            {t('homepage')}
                        </Link>
                        <button onClick={() => setOpenSideNav(false)} >
                            <MdOutlineCancel  size={20}/>
                        </button>
                    </div>
                    <Link to='/about' className='py-2' >
                        {t('company')}
                    </Link>
                    <Link to='/products' className='py-2' >
                        {t('products')}
                    </Link>
                    <Link to='/useful' className='py-2' >
                        {t('useful')}
                    </Link>
                    <Link to='/export' className='py-2' >
                        {t('export')}
                    </Link>
                    <Link to='/contact' className='py-2' >
                        {t('contact')}
                    </Link>
                </div>
            </div>
            <nav className={`flex items-center px-5 md:px-0 justify-between md:justify-center h-full w-full relative gap-x-10 text-white font-bold ${hScroll ? '' : 'uppercase'}`} >
                <div className='hidden  md:flex  justify-between items-center  gap-x-8 ' >
                    <Link to='/about'>
                        {t('company')}
                    </Link>
                    <Link to='/products'>
                        {t('products')}
                    </Link>
                    <Link to='/useful'>
                        {t('useful')}
                    </Link>
                </div>
                <button className='block md:hidden' onClick={() => setOpenSideNav(openSideNav => !openSideNav)}  >
                    <AiOutlineMenu className='inline-block text-white' />
                </button>
                <Link to='/' className={`rounded-full header-logo  bg-primary-color ${hScroll ? '' : 'pt-14 p-4'}`}>
                    <img src={logo} alt="Brand logo Teronum" className={` ${hScroll ? 'w-10 h-10' : ''}`} />
                </Link>
                <div className='hidden md:flex  justify-between items-center  gap-x-8' >
                    <Link to='/export'>
                        {t('export')}
                    </Link>
                    <Link to='/contact'>
                        {t('contact')}
                    </Link>
                </div>
                <div className='relative lang-parent' >
                    <button className={` hidden md:block ${hScroll ? '' : 'uppercase'} `}>
                        {t('language')}
                    </button>
                    <button className='block md:hidden'>
                         {changeL}
                    </button>
                    <div className=' absolute top-6 bg-white text-gray-500 -left-5  rounded lang-child shadow-md ' >
                        <button className='hover:bg-gray-50 w-full h-full px-5 py-1 rounded cursor-pointer' value='tm' onClick={() => i18next.changeLanguage('tm')} >TM</button>
                        <button className='hover:bg-gray-50 w-full h-full px-5 py-1 rounded cursor-pointer' value='en' onClick={() => i18next.changeLanguage('en')} >EN</button>
                        <button className='hover:bg-gray-50 w-full h-full px-5 py-1 rounded cursor-pointer' value='ru' onClick={() => i18next.changeLanguage('ru')}  >РУ</button>
                    </div>
                </div>

            </nav>
        </header>
    );
}

export default Header;