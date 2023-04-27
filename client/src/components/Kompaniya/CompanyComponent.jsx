import background_logo from '../../assets/images/TerÖnüm.JPG'
import apple from '../../assets/images/apple.jpg'
import background_curved from '../../assets/images/background_curved.png'
import heading_img from '../../assets/images/heading-image.png'
import HomeAbout from "./HomeAbout";
import teronum_video from '../../assets/videos/TER ONUM WIDEO.MP4'


function CompanyComponent() {
    
    return (
        <div>
            <div className='w-full  h-[40vh] md:h-[75vh] lg:h-screen ' >
                <img src={background_logo} alt="background_logo" className='absolute   top-10 left-0 right-0 bottom-0  h-[40vh] md:h-[75vh] lg:h-screen  w-full object-cover' />
                {/* <div className='w-full  h-[40vh] md:h-[75vh] lg:h-screen  text-primary-color text-6xl  sm:text-[100px] flex items-center justify-center footer-logo ' >
                     Ter önüm 
                </div> */}
            </div>
            <div className='bg-garaly-renk w-full flex items-center justify-center -mt-7 text-green-400 text-4xl  sm:text-5xl py-32' >
                "Ter önüm" - H.J.
            </div>
            <img src={background_curved} alt="background_curved" />

            <div className='flex flex-col md:flex-row md:flex-row items-center pb-10 ' >
                <div className=' w-full  md:w-1/2 flex items-center justify-end'>
                    <img src={apple} alt="Apple" className=' w-8/12 md:w-auto ' />
                </div>
                <div className='flex flex-col p-5 md:p-10 w-11/12 md:w-1/2 h-80 gap-y-5' >
                    <img src={heading_img} className='w-20 ' alt="Heading image" />

                    <h1 className='text-3xl our-products text-gray-700 ' >
                        Biz barada
                    </h1>
                    <p className='text-base font-semibold text-gray-700 ' >
                        Adamyň iň gymmatly baýlygy saglykdyr. Jan saglygy gorap saklamagyň, berkitmegiň esasy şertleriniň biri dogry we kadaly iýmitlenmekdir. Iýmitlenmek diýlende bolsa ilkinji nobatda gök önümler we miweler göz öňünde tutulýar. Şol önümleriň bazarlarda, söwda merkezlerinde, dükanlarda hemişe ter we elýerli görnüşde bolmaklygy bolsa esasy zatdyr.
                        <br /> <br />
                        “Ter Önüm” hojalyk jemgyýeti hem şu ugurda iş alyp barýar. Kärhanamyz ýerli daýhanlar tarapyndan ösdürilip ýetişdirilen ýokary hilli, ekologiýa taýdan arassa gök we miwe önümleri öndürijilerden almak hem-de söwda nokatlaryna ter we arassa görnüşinde ýetirmek ugrunda işleri ýerine ýetirýär.
                    </p>
                </div>
            </div>

            <div className='h-[250px] md:h-[400px]  xl:h-[600px] my-10 mt-64 lg:mt-10' >
                <video src={teronum_video}  controls preload='auto'  className='w-full h-auto' controlsList='nodownload'   >
                   
                </video>
            </div>

            <HomeAbout />


        </div>
    );
}

export default CompanyComponent;