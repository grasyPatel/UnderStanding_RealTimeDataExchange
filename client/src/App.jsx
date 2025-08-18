import React from 'react'
import {Routes, Route } from 'react-router'
import ChatHttp from './Pages/ChatHttp.jsx';
import ChatPolling from './Pages/ChatPolling.jsx';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/chathttp" element={<ChatHttp />} />
      <Route path="/chatpolling" element={<ChatPolling />} />
    </Routes>
    </>
   
  )
}

export default App