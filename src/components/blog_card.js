import { Button } from "@mui/material"

function CommentInput(props){
    const handleComment = (e) =>{
        e.preventDefault()
        console.log("")
    }
    return(
        <div>
            <form onSubmit={handleComment}>
                <input 
                    name='comment' 
                    className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" 
                    placeholder='Add your comment here'
                    // onChange={(e)=>{console.log("works")}}
                />
            </form>
        </div>
    )
}

export default function BlogCard(props){
    const blog = props.blog

    
    return(
        <div className="border border-gray-500 rounded-lg p-2 min-h-[300px] w-full flex flex-col justify-between    lg:w-[700px]">
           
            {blog.img && 
                <div className="img-cont ">
                    <img onClick={(e)=>{
                        window.location.href = "http://localhost:3000/blogs/"
                    }} alt='User' className="text-[0]" src={blog.img} />
                </div>
            }
            
            <div className="">
            
                <h4>{blog.title} </h4>
                <small>{blog.desc}</small>
            </div>
            
            <div className='bg-white'>
                <div className='flex justify-between gap-10 my-1  rounded-md'>
                    <Button className="w-full" size={'small'} variant={'outlined'}>Like</Button>
                    <Button className="w-full" size={'small'} variant={'outlined'}>Comments</Button>
                    <Button className="w-full" size={'small'} variant={'outlined'}>Share</Button>
                </div>
                <hr className="w-full " />
                <CommentInput/>
                
            </div>
      </div>
    )
}