import React from 'react'
import Cookies from 'js-cookie';


const SetCookie = (cookieName, user) => {
    Cookies.set(cookieName, user, {
        expires: 1,
        sameSite: "strict",
        secure: true,
        path: "/"
    });
    
}

export default SetCookie;