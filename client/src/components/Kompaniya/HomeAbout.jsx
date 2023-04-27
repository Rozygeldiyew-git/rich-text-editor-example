import heading_image from '../../assets/images/heading-image.png'
import gyzyn_suraty from '../../assets/images/image-about-teronum.jpg'
import fresh_water from '../../assets/images/fresh-water.png'
import HomeAboutRight from './HomeAboutRight';
import { useWindowWidth } from '@react-hook/window-size'
import HARMobile from './HARMobile';




function HomeAbout() {
    const onlyWidth = useWindowWidth()


    return (
        <main className='w-full  relative about-main mt-32 sm:mt-40  lg:mt-[500px] pb-[200px] h-[900px]' >

            <div className='flex flex-col gap-y-2 w-full items-center justify-center py-7' >
                <img src={heading_image} alt="Heading_image" />
                <h2 className='text-3xl our-products font-semibold' >
                    Biz barada gysgaça
                </h2>
            </div>
            <div className='flex flex-row' >
                <div className='hidden  lg:block px-10 w-1/2'  >
                    <img src={gyzyn_suraty} alt="image-about-teronum" />
                </div>
                {
                    onlyWidth <= 992 ?
                        <HARMobile />
                        : <HomeAboutRight />
                }

            </div>
            <img src={fresh_water} alt="fresh_water" className='absolute bottom-0  right-0' />
        </main>
    );
}

export default HomeAbout;