import React from 'react'
import Leftsidebar from './../../components/Leftsidebar/Leftsidebar';
import Rightsidebar from '../../components/Rightsidebar/Rightsidebar';
import QuestionDetails from './QuestionDetails';

const DisplayQuestion = () => {
  return (
    <div className='home-container-1'>
      <Leftsidebar />
      <div className='home-container-2' >
        <QuestionDetails />
       <Rightsidebar />
      </div> 
    </div>
  )
}

export default DisplayQuestion