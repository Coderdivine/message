import React,{useState,useEffect,useRef} from 'react'
import Admin from './Admin';
import {Axios} from "./Contact";

function Mess() {
    const[message,setMessage]=useState("");
    const[id,setId]=useState("");
    const[admin,setAdmin]=useState(false);
    useEffect(() => {
       
    }, [message,id]);
    

    const[draft,setDraft]=useState([]);
    useEffect(() => {
        const drafted=JSON.parse(localStorage.getItem("idforDida"));
        if(drafted){
            setDraft(drafted);
        }

    }, []);
    const send=(e)=>{
        e.preventDefault();
        
        if(message.length > 10 ){
            const res={
                id:id,
                message:message
            }
            setDraft([...draft,res]);
            const resq=Axios.post("/creating",res).then(()=>{
                alert(" Your message is being processed");
            });
            if(resq)
           
            alert("Message Sent");
        }else if(message==="chimdindu" && id==="chimdinduasdasd"){
            setAdmin(true)
        }
    else{
            alert("please meassge length must be more than 10")
        }
        
    }
   
    const Listed=(x)=>{
        setDraft(draft.filter(xs=>xs !== x));
    }
    useEffect(() => {
        localStorage.setItem("idforDida",JSON.stringify(draft));

    }, [draft]);
    const EndRef=useRef(null);
    const scroll=()=>{
      EndRef.current.scrollIntoView({behaviour:"smooth"});
    }
    useEffect(scroll,[draft]);
    

    return (
        <div>
      {!admin?<div>
        <div class="note">
           <p>
               Didatech team use this message platform for users who are still waiting for their
               orders,or need changes on their websites,order has not been verified. <br/><small>For more info call :08150740406</small>
           </p>
           </div>
           <div className="formcontainer">
               <small>Note all customers who are still waiting for their orders have a Unique id</small>
           <hr/><br/> <form id="Regform">
              <input placeholder="Unique" id="id" value={id} onChange={(e)=>setId(e.target.value)}/><br/>
              <small> You can adjust by using the border-bottom-right-radius</small><br/>
              <textarea placeholder="Message here" id="message" value={message} onChange={(e)=>setMessage(e.target.value)}  />
              <button className="btn" onClick={(e)=>send(e)}>Send</button>
            </form>
           </div>
           <div className="admin">
               <header>
                   Draft
               </header>
               <hr/>
               
               {draft && draft.map(x=><div>
                   ....<pre><span onClick={()=>Listed(x)}>X</span></pre>
                  <ul>
                      <li>{x.id}</li>
                      <li><small><i>{x.message}</i></small></li>
                      <hr/>
                  </ul>
                   </div>)}
           </div> 
      </div>:<div><Admin /></div>}
          <div ref={EndRef}></div>  
        </div>
    )
}

export default Mess;
