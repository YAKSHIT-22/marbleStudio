import React from 'react'
import Header from '../components/Header'

const Global = ({children}) => {
  return (
    <>
    <Header/>
    {children}
    </>
  )
}

export default Global