import React from 'react'
import {Routes, Route } from 'react-router'
import ChatHttp from './Pages/ChatHttp.jsx';
import ChatPolling from './Pages/ChatPolling.jsx';
import ChatSocket from './Pages/ChatSocket.jsx';

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/chathttp" element={<ChatHttp />} />
      <Route path="/chatpolling" element={<ChatPolling />} />
      <Route path="/chatsocket" element={<ChatSocket />} />
    </Routes>
    </>
   
  )
}

export default App