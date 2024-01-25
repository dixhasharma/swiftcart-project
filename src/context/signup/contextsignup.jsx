import React, { useReducer } from 'react'
import { createContext } from 'react'
import { signupreducer } from './reducer'
export const signupcontext=createContext("initial value")

export default function SignupContextProvider({children}) {

    const data={
        user:undefined
    }
    const [state,dispatch]=useReducer(signupreducer, data)
  return (

    <signupcontext.Provider value={{state,dispatch}}>
        {children}
    </signupcontext.Provider>

    
  )
}
