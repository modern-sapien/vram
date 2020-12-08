import React, { useEffect, useState } from 'react';
import Main from "./../../containers/Main/Main"
import { useHistory, Link } from "react-router-dom"
import API from "../../utils/API";


const AuthUpdateUser = () => {
    

    return (
    <>
      <div className="user-form-modal row">
      <div className="col s11 m11 l11 nomargin-nopadding"></div>
      <div className="col s1 m1 l1">X</div>
        <form action="">
          Username
          <input type="text" />
          Email
          <input type="email" />
          Password
          <input type="password" />
          <div className="col s12 m12 l12 form-btn" value="File Upload">
            Update Account
          </div>
          <div className="col s12 m12 l12 form-btn" value="File Upload">
            Cancel
          </div>
        </form>
      </div>
      <div className="user-form-modal-background"></div>
        <Main />
        
            
        </>
    );
};

export default AuthUpdateUser;