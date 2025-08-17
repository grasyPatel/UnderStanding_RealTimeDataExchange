import React from 'react'
import {Routes, Route } from 'react-router'
import ChatHttp from './Pages/ChatHttp.jsx';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<ChatHttp />} />
    </Routes>
    </>
   
  )
}

export default App