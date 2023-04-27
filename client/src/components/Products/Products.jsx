import Product from "./Product";
import orange from '../../assets/images/products/orange.jpg'
import erik from '../../assets/images/products/erik.jfif'
import hurma from '../../assets/images/products/hurma.jfif'
import melon from '../../assets/images/products/melon.jfif'
import watermelon from '../../assets/images/products/watermelon.jfif'
import heading_img from '../../assets/images/heading-image.png'
import freshF from '../../assets/images/fresh-f.jpg'



function Products() {
    return (
        <div className="pb-20 " >
            <div className='   h-80 relative ' >
            <img src={freshF} alt="Fresh "  className='w-full h-full object-cover blur-xs' />
                <h1 className="our-products   flex items-center justify-center text-4xl sm:text-5xl  absolute top-0 left-0 right-0 bottom-0 w-full h-full  text-white  drop-shadow-2xl"  >
                    <span className='flex items-center justify-center backdrop-sepia shadow-xl bg-black bg-opacity-40  px-6 py-3 rounded' >
                    Miwe we bakja önümleriň peýdaly taraplary
                    </span>
            </h1>
            </div>
            <div className='flex items-center mb-10' >
                <div className='flex flex-col w-10/12  lg:w-5/12 p-5 lg:p-16 gap-y-6 ' >
                    <div className='flex items-center  gap-x-3' >
                        <img src={heading_img} className='w-20 ' alt="Heading image" />

                        <h1 className='text-3xl our-products text-primary-color' >
                            Möwsümleýin önümler
                    </h1>
                    </div>
                    <p className='text-gray-700  ' >
                        Her bir pasyl öz bir miwesi bilen tapawutlanýandyr. (You need to wait whole year for eating some fruits. That fruits are differ with its smell, color and ofcourse with delicious taste.)
                </p>
                </div>
             
            </div>
            <main className="w-4/5 mx-auto grid grid-cols-2 md:grid-cols-3 gap-10" >
                <Product img={orange} name={'Orange'} />
                <Product img={erik} name={'Erik'} />
                <Product img={hurma} name={'Hurma'} />
                <Product img={melon} name={'Gawun'} />
                <Product img={watermelon} name={'Garpyz'} />
                {/* <Product img={blueberry} /> */}
            </main>
        </div>
    );
}

export default Products;



   {/* <div className='grid grid-cols-4  ml-auto w-2/12 2   font-semibold text-gray-700   mr-10 my-4' >
                    <button className='hover:text-gray-900 hover:font-bold' >
                        Ýaz
                </button>
                    <button className='hover:text-gray-900 hover:font-bold' >
                        Tomus
                </button>
                    <button className='hover:text-gray-900 hover:font-bold' >
                        Güýz
                </button>
                    <button className='hover:text-gray-900 hover:font-bold' >
                        Gyş
                </button>
                </div> */}