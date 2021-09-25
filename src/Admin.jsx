import React,{useState,useEffect} from 'react';
import {Axios} from "./Contact";
function Admin() {
    const[search,setSearch]=useState("");
    const[message,setMessage]=useState([]);
    
const RunGet=()=>{
   const res=Axios.get("/employing").then((response)=>{
         setMessage(response.data);
    })
    if(res)
    console.log("success")

}
useEffect(() => {
    RunGet();
 },[]);

    return (
        <div class="admin">
           
            <hr/>
...
<div><input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="id..."/></div><hr/>
            <div>
            {message && message.filter((lists)=>{
     if(search==""){return lists}else if(lists.id.toLowerCase().includes(search.toLowerCase())){return lists}
   }).map(x=><div>
                   ...
                  <ul>
                      <li>id: {x.id}</li>
                      <li><small><i>Message: {x.message}</i></small></li>
                      <hr/>
                  </ul>
                   </div>)}
            </div>
        </div>
    )
}

export default Admin
