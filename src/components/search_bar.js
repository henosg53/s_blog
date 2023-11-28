import axios from "axios"
import { useState } from "react"

export default function SearchBar(props){
    const [q,setQ] = useState('')
    // const tailwind = props.className
  
    const handleSearch = (e) =>{
      e.preventDefault()
      axios.post(`${window.$url}/queryresult/`+q)
        .then((res)=>{
          console.log(res.data)
        })
        .catch(err=>console.log(err))
    }
  
    return(
      
      <div className={`mx-5 sm:mx-0 w-full`}>
  
        <form onSubmit={handleSearch}  
              className="group relative"
              >
          <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
            <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
          <input onChange={(e)=>{setQ(e.target.value)}} className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Search" placeholder="Looking for..."/>
        </form>
     
      </div>
    )
  }
  
  