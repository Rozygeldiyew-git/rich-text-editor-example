import logo from '../assets/images/log_for_loading.png'


const Loading = () => {
  return (
    <div className='h-screen w-full flex items-center justify-center text-lg' >
        <img src={logo} alt="Teronum logo" className='w-[30%]' />
    </div>
  )
}

export default Loading