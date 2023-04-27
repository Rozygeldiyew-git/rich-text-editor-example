import { useState, useEffect } from "react"
import Admin from "./Admin"


const Auth = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [login, setLogin] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (name === 'Rozygeldiyew' && password === 'rozygeldiyew') {
      setLogin(true)
      document.cookie = 'parolName' + '=' + 'rozygeldiyew'
    }
  }
  useEffect(() => {
    let cookie = document.cookie;
    if(cookie.includes('rozygeldiyew')){
      setLogin(true)
    }
  }, [])
  return (
    <div>
      {
        login ? <Admin /> : (
          <div className='w-full h-screen' >
            <div className='w-full h-full flex flex-col items-center justify-center' >
              <form className='flex flex-col gap-y-3 border rounded  p-20 bg-white shadow-md' onSubmit={handleSubmit} >
                <div className="text-center my-5 text-lg text-gray-700 font-semibold" >
                  Teronum admin login
                </div>
                <div className='flex flex-col' >
                  <label className="text-gray-500 text-sm">
                    Name
                  </label>
                  <input type="text" className='border rounded outline-none px-3 py-1' onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex flex-col">
                  <label className="text-gray-500 text-sm">
                    Password
                  </label>
                  <input type="password" className='border rounded outline-none px-3 py-1' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button>
                  Login
                </button>
              </form>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Auth