import React from 'react';
import BannerMovieHub from './../SignIn-movieHub/SignIn-movieHub';
import "./SignIn-form-banner.css";


function signInBannerForm(){
    return(
        <div className="SignIn-form-banner-Img">
            <div className="form-div">
            <BannerMovieHub/>
               <form action="">
                   <label htmlFor="email">Email or Username</label>
                    <input type="email" name="" id=""/>
                   <label htmlFor="password">Password</label>
                   <input type="password" id="password"/>
                    
                    <button type="submit" className="SignIn-btn">Sign In</button>
                    <a href="#" className ="forgot-password">forgot password</a>
                   <hr/>
                    <a href="#"className ="account">Don't have an account</a>
                    <button className="submit-btn" type="submit">Create an account</button>
               </form>
            </div>
        </div>
    )


}

export default signInBannerForm;