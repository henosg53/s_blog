import { Button } from "@mui/material"
import { Link, Outlet } from "react-router-dom"
import NavBar from "./navigation_bar"
import SearchBar from "./search_bar"



function Nav(){

    return(
        <div className="w-full">
            <div className="hidden sm:block fixed top-0 left-0 h-full w-fit md:w-[20%] lg:w-[20%] max-w-64 bg-slate-900 text-white  border-r-gray-300 border-r-2 px-1 ">
                <div className="my-10 py-5 pt-5">
                    <Link to={'/home'}>
                        <h2 className="text-white text-center font-bold font-dave font-title text-xl">ሸገር Blogs</h2>
                    </Link>

                </div>
                <div className="flex flex-col mt-[100px] w-full px-5 gap-10 items-center">
                    <SearchBar/>
                    <Link className='w-full px-2' to='/home/blogs'>
                        <Button size={'small'}  className="w-[100%] hover:bg-gray-200 rounded-lg" >Home</Button>
                    </Link>
                    <Link className='w-full px-2' to='/home/messages'>
                        <Button size={'small'}  className="w-full hover:bg-gray-200 rounded-lg" >Messages</Button>
                    </Link>
                    <Link className='w-full px-2' to='/home/profile'>
                        <Button size={'small'}  className="w-full hover:bg-gray-200 rounded-lg" >Profile</Button>
                    </Link>
                    <Link className='w-full px-2' to='/home/blogs'>
                        <Button size={'small'}  className="w-full hover:bg-gray-200 rounded-lg" >More</Button>
                    </Link>
                    
                </div>
            
            
            </div>
            <div className="sm:hidden  w-full">
                <NavBar/>
      
                {/* <span className="w-full flex items-center justify-center">
                    <h2 className="text-black text-center font-bold font-dave font-title text-xl sm:text-gray-500">ሸገር Blogs </h2>
                    
                </span> */}
            </div>
            <Outlet/>
        </div>
    )

}
export default Nav