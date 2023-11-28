import { Fragment, useEffect, useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import mark from '../assets/avatar.svg'
import { Link } from 'react-router-dom'
import SearchBar from './search_bar'
// import axios from 'axios'


const user = {
    userId: parseInt(localStorage.getItem('userId')),
    userType: localStorage.getItem('userType'),
    imageUrl:
      mark,
}

// function SearchBar(){
//   const [q,setQ] = useState('')

//   const handleSearch = (e) =>{
//     e.preventDefault()
//     axios.post(`${window.$url}/queryresult/`+q)
//       .then((res)=>{
//         console.log(res.data)
//       })
//       .catch(err=>console.log(err))
//   }

//   return(
    
//     <div className='mx-5 sm:w-[40%]'>

//       <form onSubmit={handleSearch}  
//             className="group relative"
//             >
//         <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
//           <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
//         </svg>
//         <input onChange={(e)=>{setQ(e.target.value)}} className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Search" placeholder="Looking for..."/>
//       </form>
   
//     </div>
//   )
// }


const userNavigation = [
    { name: 'Your Profile', href: '/home/profile' },
    { name: 'Sign out', href: '/login' },
]
const navigation = [
    { name: 'Blogs', href: '/home/blogs', current: true },
    { name: 'Messages', href: '/home/messages', current: false },
    // { name: 'Staff', href: '/user/staff', current: false },
    // { name: 'Requests', href: '/user/requests', current: false },
    // { name: 'Notifications', href: '/user/notifications', current: false },
    
    
   ]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

 
function NavBar(){
    const [isloggedin,setIsLoggedIn]= useState()
    const [userType,setUserType] = useState()
    
      useEffect(()=>{
        setIsLoggedIn(localStorage.getItem('userId'))
        setUserType(localStorage.getItem('userType'))
      },[isloggedin,userType])

     
    return(
      <>
        <Disclosure as="nav" className="bg-slate-900">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-around justify-around w-full">
                    <Link to={'/'} className="flex-shrink-0 rounded-full border-2 border-white p-1 px-2">
                        <h3 className='text-white font-dave'>ሸገር Blogs</h3>
                    </Link>
                    <SearchBar/>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4 w-full">
                        {navigation.map((item) => (
                           (item.name==="Staff" && parseInt(userType)!==2) ? null:
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'px-3 py-2 rounded-md text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>

                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                     
                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/login"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            {localStorage.getItem('userId')? <Link to="/user/account">Your Profile</Link>: <Link to="/site/userId"> Sign In</Link>}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            {localStorage.getItem('userId')? <>Settings</>: <Link to="/signup">Sign Up</Link>}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <span
                            
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                             {localStorage.getItem('userId')? <button onClick={()=>{
                              localStorage.removeItem('userId')
                              localStorage.removeItem('userType')
                              window.location.replace(`${window.$url}/user/login`)

                             }}>Sign Out</button>: <></>}
                          </span>
                        )}
                      </Menu.Item>
                           
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block px-3 py-2 rounded-md text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pt-4 pb-3">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">{user.name}</div>
                      <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                        
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}

        </Disclosure>
                
                  </>
    )
}
export default NavBar