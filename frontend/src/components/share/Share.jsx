import React, { useContext, useRef, useState } from "react";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material";
import axios from "axios";

import { AuthContext } from "../../context/AuthContext";
import "./share.css";

const Share = () => {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const desc = useRef();

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("file", file);
      data.append("name", fileName);
      newPost.image = fileName;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post(`/posts`, newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='share'>
      <div className='shareWrapper'>
        <div className='shareTop'>
          <img
            className='shareProfileImg'
            src={
              user.profilePicture
                ? user.profilePicture
                : process.env.REACT_APP_DEFAULT_PROFILE
            }
            alt=''
          />
          <input
            className='shareInput'
            placeholder={`What's on your mind, ${user.username
              .charAt(0)
              .toUpperCase()}${user.username.slice(1)}?`}
            ref={desc}
          />
        </div>
        <hr className='shareHr' />
        <form className='shareBottom' onSubmit={submitHandler}>
          <div className='shareOptions'>
            <label htmlFor='fileID' className='shareOption'>
              <PermMedia htmlColor='tomato' className='shareIcon' />
              <span className='shareOptionText'>Media</span>
              <input
                style={{ display: "none" }}
                type='file'
                id='fileID'
                accept='.png,.jpeg,.jpg'
                onChange={(e) => setFile(e.target.files[0])}
              />
            </label>
            <div className='shareOption'>
              <Label htmlColor='blue' className='shareIcon' />
              <span className='shareOptionText'>Tag</span>
            </div>
            <div className='shareOption'>
              <Room htmlColor='green' className='shareIcon' />
              <span className='shareOptionText'>Location</span>
            </div>
            <div className='shareOption'>
              <EmojiEmotions htmlColor='goldenrod' className='shareIcon' />
              <span className='shareOptionText'>Feelings</span>
            </div>
          </div>

          <button className='shareButton' type='submit'>
            Share
          </button>
        </form>
      </div>
    </div>
  );
};

export default Share;
