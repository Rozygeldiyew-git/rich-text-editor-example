import quality from '../../assets/images/quality.png'
import vip from '../../assets/images/vip.jpg'
import trust from '../../assets/images/trust.jpg'

function CategoriesCard() {
    return (
        <div className='w-full py-10 pb-40' >
            <h1 className="w-full text-center font-extrabold text-4xl our-features  py-16" >
                Biziň aýratynlygymyz
            </h1>
            <div className='flex flex-row justify-evenly items-center' >
                <div className='flex justify-center items-center flex-col gap-y-1' >
                    <img src={quality} className="w-28 h-28" alt="Quality" />
                    <h2 className='font-bold text-lg text-center' >
                        Ýokary hil
                    </h2>
                    <p className='text-sm font-semibold text-center' >
                        Işimizde ýokary hil-e uly üns berýäris
                    </p>
                </div>
                <div className='flex justify-center items-center flex-col gap-y-1' >
                    <img src={vip} className="w-28 h-28" alt="Quality" />
                    <h2 className='font-bold text-lg text-center' >
                       Aýratyn hyzmat
                    </h2>
                    <p className='text-sm font-semibold text-center' >
                        Siziň üçin aýratyn alada edýäris
                    </p>
                </div>
                <div className='flex justify-center items-center flex-col gap-y-1' >
                    <img src={trust} className="w-40 h-28" alt="Quality" />
                    <h2 className='font-bold text-lg text-center' >
                        Halkara hyzmatdaşlyk
                    </h2>
                    <p className='text-sm font-semibold text-center' >
                        Hyzmatdaşlarymyz bize ýokary ynam bildirýär
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CategoriesCard;