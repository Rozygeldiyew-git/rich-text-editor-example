import heading_img from '../../assets/images/heading-image.png'
import categories_background from '../../assets/images/categories_background.png'
import winter from '../../assets/images/winter.png'
import spring from '../../assets/images/spring.png'
import summer from '../../assets/images/summer.png'
import autumn from '../../assets/images/autumn.png'
import background_curved from '../../assets/images/background_curved.png'

function Seasons() {

   

    return (
        <>
            <main className="bg-garaly-renk w-full pb-28 ">
                <div className='flex flex-col w-full py-10 pt-24 items-center justify-center'>
                    <img src={heading_img} className='w-20 ' alt="Heading image" />
                    <h1 className='text-5xl py-3 font-semibold seasons-heading text-white'>
                        {
                            window.location.pathname === '/export' ? <span>Export</span> : <span>Möwsumler</span>
                        }
                    </h1>
                </div>

                <div className='grid grid-cols-2  lg:grid-cols-4 w-full px-3 sm:px-0 sm:w-4/5 mx-auto gap-2 sm:gap-5 main-box   clear-both '>
                    <div className='p-10 flex flex-col items-center justify-center    gap-y-2 main-box-item'>
                        <span className='icon  px-6 py-7' style={{ backgroundImage: `url(${categories_background})` }}>
                            <img src={winter} alt={winter} className='w-16 h-16' />
                        </span>
                        <h3 className='text-white  uppercase text-xl '>
                            Gyş
                        </h3>
                    </div>
                    <div className='p-10 flex flex-col items-center justify-center   gap-y-2  main-box-item'>
                        <span className='icon  px-6 py-7' style={{ backgroundImage: `url(${categories_background})` }}>
                            <img src={spring} alt={spring} className='w-16 h-16' />
                        </span>
                        <h3 className='text-white uppercase  text-xl '>
                            Ýaz
                        </h3>
                    </div>
                    <div className='p-10 flex flex-col items-center justify-center   gap-y-2  main-box-item'>
                        <span className='icon   px-6 py-7  ' style={{ backgroundImage: `url(${categories_background})` }}>
                            <img src={summer} alt={summer} className='w-16 h-16' />
                        </span>
                        <h3 className='text-white  uppercase text-xl '>
                            Tomus
                        </h3>
                    </div>
                    <div className='p-10 flex flex-col items-center justify-center  gap-y-2  main-box-item '>
                        <span className='icon  px-6 py-7' style={{ backgroundImage: `url(${categories_background})` }}>
                            <img src={autumn} alt={autumn} className='w-16 h-16' />
                        </span>
                        <h3 className='text-white  uppercase text-xl '>
                            Güýz
                        </h3>
                    </div>

                </div>
            </main>
            <img src={background_curved} alt="background_curved" />

        </>);
} export default Seasons;