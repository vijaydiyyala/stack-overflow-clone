import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useParams } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBirthdayCake, faPen, faMapMarker ,faSpinner } from '@fortawesome/free-solid-svg-icons'
import moment from 'moment'
import axios from 'axios'

import { useState,useEffect } from 'react'
import { fetchAllUsers } from "../../actions/users";
import Leftsidebar from '../../components/Leftsidebar/Leftsidebar'
import Avatar from '../../components/Avatar/Avatar'
import EditProfileForm from './EditProfileForm'
import ProfileBio from './ProfileBio'
import './UsersProfile.css'

const UserProfile = () => {

    const { id } = useParams()
    const users = useSelector((state) => state.usersReducer)
    const currentProfile = users.filter((user) => user._id === id)[0]
    const currentUser = useSelector((state) => state.currentUserReducer)
    const [Switch, setSwitch] = useState(false)
    const dispatch = useDispatch();
    const [ip,setIp] = useState("");
    const [cityName,setCityName] = useState("");


    const fetchLocation = () => {
        const cityApi = axios.get(`https://ipapi.co/${ip}/json/`)
        cityApi.then((res,err) => {
            if(res.data){
                setCityName(res.data.city)
            }
        })
    }

    useEffect(() => {
        fetchLocation();
        dispatch(fetchAllUsers());
        setIp(currentProfile?.ip)
    },[])


    return (
        <div className='home-container-1'>
            <Leftsidebar />
            <div className="home-container-2">
                <section>
                    <div className="user-details-container">
                        <div className='user-details'>
                            <Avatar backgroundColor="purple" color='white' fontSize='50px' px='40px' py='30px'>
                                {currentProfile?.name?.charAt(0).toUpperCase()}
                            </Avatar>
                            <div className="user-name">
                                <h1>{currentProfile?.name}</h1>
                                <p><FontAwesomeIcon icon={faBirthdayCake} /> Joined {moment(currentProfile?.joinedOn).fromNow()}</p>
                                <p><FontAwesomeIcon icon={faMapMarker} /> {
                                        cityName ? cityName :
                                        <FontAwesomeIcon icon={faSpinner} spin />
                                    }
                                </p>
                            </div>
                        </div>
                        {
                            currentUser?.result._id === id && (
                                <button type='button' onClick={() => setSwitch(true)} className='edit-profile-btn'>
                                    <FontAwesomeIcon icon={faPen} /> Edit Profile
                                </button>
                            ) 
                        }
                    </div>
                    <>
                        {
                            Switch ? (
                                <EditProfileForm currentUser={currentUser} setSwitch={setSwitch}/>
                            ) : (
                                <ProfileBio currentProfile={currentProfile}/>
                            )
                        }
                    </>
                </section>
            </div>
        </div>
    )
}

export default UserProfile