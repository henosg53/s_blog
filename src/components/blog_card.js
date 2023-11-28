import { Button } from "@mui/material"
import { useState } from "react"
import mark from '../assets/avatar.svg'

import { comments } from "../api/fake_data"


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
                    className="h-16 dark:bg-inherit dark:text-white focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-blue-400 dark:ring-blue-600 shadow-sm" 
                    placeholder='Add your comment here'
                    // onChange={(e)=>{console.log("works")}}
                />
            </form>
        </div>
    )
}

function Comments(props){
    const [visibleComments,setVisibleComments] = useState(3)
    const comments = props.comments.slice(0,visibleComments)
    const handleShowMore = () => {
        setVisibleComments((prevVisibleComments) => prevVisibleComments + 3);
      };
    return(
        <div className="h-[200px]" style={{ overflowY: 'scroll' }} >
            <div className="flex flex-col gap-2 px-2">
                {comments.map((comment,i)=>(
                    <div className="flex flex-col gap-3 border border-blue-500 rounded p-2" key={i}>
                        <span className='flex gap-3 '>
                            <img className="h-8 w-8 bg-gray-800 dark:bg-inherit rounded-full" src={mark} alt="" />
                            <p className="">{comment.username}</p>
                        </span>
                        <span>
                            <p className="dark:text-gray-300 text-sm">{comment.comment}</p>
                        </span>
                        <span className="flex w-full gap-10">
                            <Button className="w-full" size={'small'} variant={'outlined'}>Like</Button>
                            <Button className="w-full" size={'small'} variant={'outlined'}>Comments</Button>
                            <Button className="w-full" size={'small'} variant={'outlined'}>Reply</Button>
                        </span>
                    </div>
                ))}
                {visibleComments < props.comments.length && (
                    <Button size={'small'} onClick={handleShowMore}>More</Button>
                )}
            </div>
            
        </div>
    )
}
export default function BlogCard(props){
    const blog = props.blog

    const [showComments,setShowComments] = useState(false)

    
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
            
            <div className='flex flex-col gap-2'>
                <div className='flex justify-between gap-10 my-1  rounded-md'>
                    <Button className="w-full" size={'small'} variant={'outlined'}>Like</Button>
                    <Button 
                        onClick={()=>{setShowComments(!showComments)}}
                        className="w-full" size={'small'} variant={'outlined'}>Comments</Button>
                    <Button className="w-full" size={'small'} variant={'outlined'}>Share</Button>
                </div>

                {showComments && 
                    <div className="w-full flex flex-col">
                        <h2 className="text-center font-bold">Comments</h2>
            
                        <Comments comments={comments}/>
                    </div>}

                <CommentInput/>
                
            </div>
      </div>
    )
}