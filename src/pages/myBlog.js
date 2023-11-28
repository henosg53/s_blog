// import img from '../assets/introdesk.jpg'
import BlogCard from '../components/blog_card'
import {blogs} from '../api/fake_data.js'
function MyBlog(){
    const blogList = blogs
   
    // const [blogList,setBlogList] = useState([]);
    return(
      <div className="w-full flex justify-center z-1">
      <div className="sw flex flex-col items-center  ">
        <p className="my-4 uppercase text-lg font-bold dark:text-white">Feeds</p>
       
        
        <div className="flex flex-wrap justify-center gap-3 gap-y-10 w-fit my-12 px-2 py-2 lg:max-w-[700px] ">
          {
            // Listing Blog Object from variable
            blogList.map((blog,i) => (
              <BlogCard key={i} blog={blog}/>
            ))
          }
        </div>

      </div>
      
    </div>
    )
}

export default MyBlog