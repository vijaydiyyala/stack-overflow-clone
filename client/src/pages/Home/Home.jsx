import React from 'react'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar'
import HomeMainbar from '../../components/HomeMainbar/HomeMainbar'
import '../../App.css'
import messageicon from "../../assests/vector-message-icon.jpg";
import { useState } from "react";
const Home = () => {
  const [chatbot,setChatbot] = useState(false);
  return (
    <div className='home-container-1'>
      <Leftsidebar />
      <div className='home-container-2' >
       <HomeMainbar />
       <Rightsidebar />

       <button style = {{border :"none" , background : 'none' }} className="messageIcon"  onClick={() => {setChatbot(!chatbot)}}>

      <img src={messageicon} alt="chatbot" width = "40"  />
     </button>

    {

      chatbot && (
      <iframe
        allow="microphone;"
        title="This is a unique title"
        width="350"
        height="430"
        src="https://console.dialogflow.com/api-client/demo/embedded/0cccd856-e600-4a17-9f98-e16b64d696a8"> 
      </iframe>
  )
  }  
      </div> 
    </div>
  )
}

export default Home