import './App.css';
import { useSelector } from "react-redux";
import Sidebar from './Components/Body/Sidebar';
import Header from './Components/Header/Header';
import Feed from "./Components/Body/Feed"
import { useDispatch } from "react-redux"
import { useEffect } from 'react';
import auth from "./Components/firebase"
import { login, logout, selectUser } from './Components/features/UserSlice';
import LoginUser from "./Components/Login/LoginUser";
import Widgets from "./Components/Body/Widgets"

function App() {
  const user = useSelector(selectUser);
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        dispatch(
          login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoUrl:userAuth.photoURL,
        })
        );
        }else{
      dispatch(logout());
      }
    })
  },[]);

  return (
    <div className="app">
      <Header />
     {!user ?
        (<LoginUser />) : (
          <div className='app-body'>
            <Sidebar />
            <Feed />
            <Widgets/>
          </div>
        )}
    </div>
  );
}

export default App;
