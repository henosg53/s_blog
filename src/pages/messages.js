import { Button } from "@mui/material"
import { contacts } from "../api/fake_data"


export default function Messages(){
    return(
        <div className="flex w-full min-h-screen justifiy-between">
            <div className="w-full bg-gray-200">
                <h3>Conversations</h3>
            </div>
            <div className="flex flex-col gap-5 lg:w-[30%] md:w-[30%] sm:w-[30%] bg-gray-400 border border-l-black py-2 px-2">
                <h2 className="text-center font-bold text-2xl">Contacts</h2>
                {contacts.map((contact,i)=>(
                    <div className="w-full flex gap-2 justify-start" key={i}>
                        <span className="w-[20%] p-2 rounded-full border border-white">
                            <img src={contact.profile} alt="profile pic" />
                        </span>
                        <span>
                            <p>{contact.fullname}</p>
                            <p>{contact.username}</p>
                        </span>
                    </div>
                ))}
                
                <Button size="small" variant={'outlined'}>Show more</Button>

                <div>
                    <h2 className="text-center font-bold text-2xl">Suggestions</h2>
                </div>
            </div>
            
        </div>
    )
}