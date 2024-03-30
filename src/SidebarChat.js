import { Avatar } from '@mui/material'
import React,{useState,useEffect} from 'react'
import './css/sidebar.css'
import db from './firebase';
import { Link } from 'react-router-dom/cjs/react-router-dom';
function SidebarChat({id,name,addnewchat}) {

  const [seed,setSeed] = useState("");
  const [lastMessage,setLastMessage] = useState("");
  useEffect(()=>{
    setSeed(Math.floor(Math.random()*5000));

    db.collection("rooms").doc(id).collection("message").orderBy("timestamp","desc").onSnapshot(snapshot=>setLastMessage(snapshot.docs.map(doc=>doc.data())));

  },[]);

  const createChat=()=>{
    const room=prompt("Please enter room name.")
    if(room){
      db.collection("rooms").add({
        name:room

      })
    }
  }
  return (
    !addnewchat ? (
      <Link to={`/room/${id}`} className='link'>  
      <div className='sidebar__chat'>
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
      <div className="sidebar__chatInfo">
        <h2>{name}</h2>
        <p>{lastMessage[0]?.message}</p>
      </div> 
  </div>
  </Link>
    ):(
      <div className='sidebar__chat' onClick={createChat}>
      <h2>Add New Chat</h2>
      </div>
    )
    
  )
}

export default SidebarChat