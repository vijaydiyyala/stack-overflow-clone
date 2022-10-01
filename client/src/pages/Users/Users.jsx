import React from 'react'

import './Users.css'
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import UsersList from './UsersList'

const Users = () => {
    
    return (
        <div className='home-container-1'>
            <Leftsidebar />
            <div className="home-container-2" style={{marginTop: "30px"}}>
                <h1 style={{fontWeight: "400"}}>Users</h1>
                <UsersList /> 
            </div>
        </div>
    )
}

export default Users