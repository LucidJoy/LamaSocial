import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { username } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className='profile'>
        <Sidebar />
        <div className='profileRight'>
          <div className='profileRightTop'>
            <div className='profileCover'>
              <img
                className='profileCoverImg'
                src={
                  user.coverPicture ||
                  "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                }
                alt=''
              />
              <img
                className='profileUserImg'
                src={
                  user.profilePicture ||
                  "https://images.unsplash.com/photo-1652598113005-a75ff204263b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                }
                alt=''
              />
            </div>

            <div className='profileInfo'>
              <h4 className='profileInfoName'>{user.username}</h4>
              <span className='profileInfoDesc'>{user.desc}</span>
            </div>
          </div>

          <div className='profileRightBottom'>
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
