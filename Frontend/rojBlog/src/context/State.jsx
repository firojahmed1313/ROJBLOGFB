import React, { useState } from 'react'
import Context from './Context'

const State = (props) => {
    const [isAuth,setIsAuth] = useState(false)
    const [isEdit,setIsEdit] = useState(false)
    const [user,setUser] = useState("")
    const [blogEdited,setBlogEdited] = useState("")
  return (
    <Context.Provider value={{isAuth,setIsAuth ,user,setUser,blogEdited,setBlogEdited,isEdit,setIsEdit}}>
        {props.children}
    </Context.Provider>
  )
}

export default State