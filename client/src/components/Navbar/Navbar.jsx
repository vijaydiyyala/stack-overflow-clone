import React ,{useEffect} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useSelector , useDispatch } from 'react-redux';
import logo from '../../assests/logo.png'
import search from '../../assests/search-solid.svg'
import Avatar from '../../components/Avatar/Avatar'
import  './Navbar.css'
import { setCurrentUser } from '../../actions/currentUser';
import decode from 'jwt-decode'

const Navbar = () => {
  const dispatch = useDispatch()
    var User= useSelector((state)=> (state.currentUserReducer))
    const Navigate= useNavigate()
    const handleLogout= ()=>{
      dispatch({ type : 'LOGOUT' })
      Navigate('/')
      dispatch(setCurrentUser(null))
    }
    useEffect(() => {
      const token = User?.token 
      if(token){
          const decodedToken = decode(token)
          if(decodedToken.exp * 1000 < new Date().getTime()){
              handleLogout()
          }
      }
      dispatch(setCurrentUser( JSON.parse(localStorage.getItem('Profile'))))
  },[User?.token, dispatch])
  return (
    <nav className="main-nav">
        <div className='navbar'>
          <Link to='/' className='nav-item nav-logo'>
            <img src={logo} alt='logo' />
          </Link>
          <Link to='/' className='nav-item nav-btn'>About</Link>
          <Link to='/' className='nav-item nav-btn'>Products</Link>
          <Link to='/' className='nav-item nav-btn'>For Teams</Link>
          <form >
            <input type='text' placeholder='search..'/>
            <img src={search} alt='search' width='18' className='search-icon' />
          </form>
          {User === null ?
           <Link to='/Auth' className='nav-item nav-Links'>Log In</Link>:
           <>
                {
                    User.result?.name ? (
                        <Avatar backgroundColor='#009dff' px="10px" py="13px" borderRadius="50%" color="white" ><Link to= { `/Users/${User?.result?._id}`} style={{color:"white",textDecoration:'none'}}>{
                            User.result.name.charAt(0).toUpperCase() }</Link></Avatar>
                    ) :
                    (
                        <Avatar backgroundColor='#009dff' px="10px" py="13px" borderRadius="50%" color="white" ><Link to= { `/Users/${User?.result?._id}`} style={{color:"white",textDecoration:'none'}}>{
                            User.result.phoneNumber.charAt(0) }</Link></Avatar>
                    )
                } 
              <button className='nav-item nav-Links' onClick={handleLogout}>Log Out</button>
           </>
          }
        </div>
    </nav>
  )
}

export default Navbar