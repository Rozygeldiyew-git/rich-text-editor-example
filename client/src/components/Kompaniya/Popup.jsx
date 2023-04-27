import { VscWorkspaceTrusted } from 'react-icons/vsc'
import { BsTruck, BsTablet } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'




function Popup() {
    const { t } = useTranslation()

    return (
        <div className='bg-white text-black  h-auto  sm:h-[700px] bg-gray-50  flex items-center justify-center ' style={{ backgroundColor: 'white' }}>
            <div className='flex flex-col sm:flex-row gap-y-10 py-10 sm:py-0  justify-between '>
                {/* <div className='block sm:hidden w-full text-center my-5 text-4xl  font-semibold text-primary-color footer-logo' >
                    Biziň aýratynlyklarymyz
                </div> */}
                <div className=' flex flex-col  items-center justify-center gap-y-16 ' >
                    <div className='flex flex-col items-center  gap-y-2  w-full lg:w-3/5' >
                        <div className='border border-primary-color  rounded-full w-20 h-20 flex items-center justify-center'>
                            <VscWorkspaceTrusted className='inline-block text-primary-color text-2xl' />
                        </div>
                        <h1 className='font-semibold text-lg '>
                            {t('quality_guarantee')}
                        </h1>
                        <p className='text-gray-500 text-center  px-7' >
                            {t('quality_guarantee_content')}
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-y-2   w-full lg:w-3/5' >
                        <div className='border border-primary-color rounded-full w-20 h-20 flex items-center justify-center'>
                            <BsTablet className='inline-block text-primary-color text-2xl' />
                        </div>
                        <h1 className='font-semibold text-lg '>
                            {t('easy_order')}
                        </h1>
                        <p className='text-gray-500 text-center  px-7' >
                            {t('easy_order_content')}
                        </p>
                    </div>

                </div>



                <div className='inline-block flex items-center justify-center ' >
                    <img src="https://themes.g5plus.net/organiz/wp-content/uploads/2017/03/image-home-1.jpg" alt="Image" />
                </div>




                <div className=' flex flex-col items-center justify-center gap-y-16' >
                    <div className='flex flex-col items-center gap-y-2   w-full lg:w-3/5' >
                        <div className='border border-primary-color rounded-full w-20 h-20 flex items-center justify-center'>
                            <BsTruck className='inline-block text-primary-color text-2xl' />
                        </div>
                        <h1 className='font-semibold text-lg '>
                            {t('free_delivery')}
                        </h1>
                        <p className='text-gray-500 text-center  px-7' >
                            {t('free_delivery_content')}
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-y-2   w-full lg:w-3/5' >
                        <div className='border border-primary-color rounded-full w-20 h-20 flex items-center justify-center'>
                            <AiOutlineLike className='inline-block text-primary-color text-2xl' />
                        </div>
                        <h1 className='font-semibold text-lg '>
                            {t('reliable_cooperation')}
                        </h1>
                        <p className='text-gray-500 text-center  px-7' >
                            {t('reliable_cooperation_content')}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;