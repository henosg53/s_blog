import { Button } from "@mui/material"
import { users } from "../api/fake_data"
export default function Profile(){
    const user = users[0]
    return(
        <div className="w-full flex flex-col items-center">
            <div className="w-full h-10 flex items-center justify-center">
                <h2 className="text-center">Profile</h2>
            </div>
            <div className="w-full flex flex-col  items-center justify-center">
                
                <span className="w-full flex gap-10 justify-center items-center">
                    <span className="flex flex-col">
                        <img className="h-[100px] border border-black p-1 rounded-full" src={user.profile_pic} alt="" />
                    </span>
                    <span className="flex flex-col items-start">
                        <span className="flex justify-center items-center gap-5">
                            <p className="text-center">{user.fullname}</p>
                            <Button>Edit profile</Button>
                            <Button>View archive</Button>
                        </span>
                        <span className="flex justify-center gap-5">
                            <p className="text-center">{0} posts</p>
                            <p className="text-center">{0} followers</p>
                            <p className="text-center">{0} following</p>
                        </span>
                        <h4>{user.username}</h4>  
                    </span>

                </span>
                <span className="flex flex-col">
                    <span className="flex gap-5">
                        <p>Posts</p>
                        <p>Saved</p>
                        <p>Tagged</p>
                    </span>
                </span>
            </div>
        </div>
    )
}