// import img from  '../../assets/images/products/orange.jpg'


function Product({img, name}) {
    return (
        <div className='rounded-md transition-all hover:scale-150 cursor-pointer flex items-center justify-center flex items-center flex-col' >
            <img src={img} alt="Product image" className='w-3/5' />
            <h1 className='our-products text-gray-600 text-xl' >
                {name}
            </h1>
        </div>
    );
}

export default Product;