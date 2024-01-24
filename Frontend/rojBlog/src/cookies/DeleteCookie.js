import React from 'react'
import Cookies from 'js-cookie';

const DeleteCookie = (cookieName) => {
    console.log("w")
    Cookies.remove(cookieName);
}

export default DeleteCookie