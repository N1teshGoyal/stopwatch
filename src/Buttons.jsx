import { useEffect, useState } from "react"
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import IconButton from "@mui/material/IconButton";

const items = ["apple", "banana", "cherry", "mango", "orange"];

export default function Buttons(){
    const [disabled,setDisabled] =useState(false);
    const [isLiked,setIsLiked] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredSearches, setFilteredSearches] = useState(items);
   
    useEffect(() => {
        const results = items.filter(item => item.toLowerCase().includes(search.toLowerCase()))
         setFilteredSearches(results);
    },[search]);

    return(
    <div className="flex flex-col items-center justify-center h-screen gap-8 bg-gray-100">
            <button onClick={()=>setDisabled(true)} style={{cursor:"pointer"}} className={!disabled ? 'border border-black bg-green-500 py-[5px] px-[10px]' : 'border border-black bg-gray-500 py-[5px] px-[10px] text-black'}>
                  {disabled ? 'Disabled' : 'Working'}
            </button>
            
      <IconButton
        onClick={() => setIsLiked(prev => !prev)}
        style={{ cursor: 'pointer' }}
      >
        {isLiked ? (
          <ThumbUpIcon className="text-red-500" />
        ) : (
          <ThumbUpOffAltIcon className="text-gray-500" />
        )}
      </IconButton>
    
    <div className="flex flex-col items-center justify-center bg-gray-100">
     <input type="text" placeholder="apple" className="border border-gray-300 rounded-md p-2 w-64" value={search} onChange={(e) => setSearch(e.target.value)}/>
      <div>
        <ul className="flex flex-col gap-4 fle">   
         {filteredSearches.map((item,index)=> (
            <li>{item}</li>
         ))}
         </ul>
      </div>
    </div>
    </div>
    )
}