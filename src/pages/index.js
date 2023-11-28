
import { Route, Routes } from "react-router-dom"
import Nav from "../components/nav"
import MyBlog from "./myBlog"
import Messages from "./messages"
import Profile from "./profile"
// import Login from "./login"


function Index(){
    return(
        <div className="flex w-full gap-5 dark:bg-slate-900 dark:text-white">
          <Routes>
                    <Route element={<Nav/>}>
                        <Route index element={<MyBlog/>}/>
                        <Route path='/blogs' element={<MyBlog/>}/>
                        <Route path='/messages' element={<Messages/>}/>
                        <Route path='/profile' element={<Profile/>}/>

                    </Route>
                    
            </Routes>
        </div>

    )
}
export default Index