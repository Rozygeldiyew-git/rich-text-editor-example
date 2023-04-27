import { useState, useEffect } from 'react';
import Banner from "./Banner/Banner";
import CategoriesCard from "./Kompaniya/CategoriesCard";
import KompaniyaArea from "./Kompaniya/KompaniyaArea";
import Seasons from "./Kompaniya/Seasons";
import SliderCom from './Kompaniya/SliderCom'
import Popup from './Kompaniya/Popup'
import Loading from './Loading';
import Typed from 'react-typed';
import { useTranslation } from 'react-i18next'


function Homepage() {

    const [loading, setLoading] = useState(true)
    const { t } = useTranslation()

    setTimeout(() => {
        setLoading(false)
    }, 1000)


    return (
        loading ? <Loading /> : <main className="homepage w-full h-auto"  >
            <Banner />
            <div className='w-full h-28 flex items-center justify-center  text-primary-color text-3xl sm:text-5xl font-semibold' >
                <Typed
                    strings={[t('quality_guarantee'), t('easy_order'), t('free_delivery'), t('reliable_cooperation')]}
                    typeSpeed={60}
                    backSpeed={30}
                    loop
                    cursorChar=''
                />
            </div>
            <Popup />
            <SliderCom />
        </main>
    );
}

export default Homepage;