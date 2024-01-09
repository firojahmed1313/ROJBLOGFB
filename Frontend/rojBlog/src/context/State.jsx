import React, { useState } from 'react'
import Context from './Context'

const State = (props) => {
    const [isAuth,setIsAuth] = useState(false)
    const [user,setUser] = useState("")
    const [blogId,setUserId] = useState("")
  return (
    <Context.Provider value={{isAuth,setIsAuth ,user,setUser,blogId,setUserId}}>
        {props.children}
    </Context.Provider>
  )
}

export default State