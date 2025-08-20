import { useEffect, useState } from "react"


import io from 'socket.io-client';
const socket = io('http://localhost:8080');




const ChatSocket = () => {
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        socket.on('previousMessages', (previousMessages) => {
            setMessages(previousMessages);
        });
        socket.on('NewMessage', (newMessage) => {
            setMessages((prevMessages) => [...prevMessages, newMessage]);
        });
        return () => {
            socket.off('previousMessages');
            socket.off('NewMessage');
        };
    }, []);

    const sendMessage = () => {
        if (user && text) {
            const message = { user, text };
            socket.emit('message', message);
            setText('');
        } else {
            alert('Please enter both your name and message');
        }
    };



  return (
    <>
    <h1>Chat Socket</h1>
    <div>
        <input
            type="text"
            placeholder="Enter your name"
            value={user}
            onChange={(e) => setUser(e.target.value)}
        />
        <input
            type="text"
            placeholder="Enter your message"
            value={text}
            onChange={(e) => setText(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
    </div>
    <div id="messages">
        {messages.map((msg, i) => (
          <p key={i}>
            <b>{msg.user}</b>: {msg.text} <i>({msg.time})</i>
          </p>
        ))}
      </div>
    </>
  )
}

export default ChatSocket