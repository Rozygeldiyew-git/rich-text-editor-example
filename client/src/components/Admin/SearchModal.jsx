import ReactModal from 'react-modal';
import { useEffect,  useRef } from 'react'
import { FiSearch } from 'react-icons/fi'


function SearchModal({ showSearch, setShowSearch }) {

    const overlayStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, .4)',
    }
    const contentStyle = {
        position: 'absolute',
        top: '80px',
        left: '410px',
        right: '410px',
        bottom: '220px',
        border: '1px solid #ccc',
        background: '#fff',
        overflow: 'auto',
        WebkitOverflowScrolling: 'touch',
        borderRadius: '4px',
        outline: 'none',
        padding: '20px',
    }

    const ref = useRef()
    useEffect(() => {
        const checkIfClickedOutside = e => {
          if (showSearch && ref.current && !ref.current.contains(e.target)) {
            setShowSearch(false)
          }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
    
       
      }, [showSearch])



    return (
        <div  >
            <ReactModal
                isOpen={showSearch}
                style={
                    {
                        overlay: overlayStyle,
                        content: contentStyle
                    }
                }

            >
                <div className='z-[99]'  >
                    <form className='w-full h-10 relative flex items-center justify-center' ref={ref} >
                        <FiSearch size={16} className='inline-block text-gray-600 absolute  left-2' />
                        <input type="text" className='w-full h-10 border-b outline-none px-3 pl-10' placeholder='Search type on Teronum administration'  />
                    </form>
                </div>
            </ReactModal>
        </div>
    );
}

export default SearchModal;