import React, {useState, useEffect} from 'react';
import axios from 'axios';



const ChatPolling = () => {
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState("");
    const [text, setText] = useState("");

    const fetchMessages = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/chatpolling/messages");
            setMessages(response.data);
        } catch (error) {
            console.error("Error fetching messages:", error);
        }
    };
    useEffect(() => {
        fetchMessages();
        const interval = setInterval(fetchMessages, 5000); // Poll every 5 seconds
        return () => clearInterval(interval); // Cleanup on unmount
    }, []);     

    const sendMessage = async () => {
        if (!user || !text) {
            alert("Please enter both your name and message.");
            return;
        }
        try {
            await axios.post("http://localhost:8080/api/chatpolling/messages", {
                user,
                text,
            });
            setText(""); // Clear the input field after sending
            fetchMessages(); // Fetch messages again to update the chat
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };  
  return (
    <>
    <h1>Chat App Polling</h1>
    <div id="messages">
        {messages.map((message, index) => (
            <div key={index}>
            <strong>{message.user}:</strong> {message.text} <em>({message.time})</em>
            </div>
        ))}
    </div>
    <input
        type="text"
        placeholder="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}></input>
    <input
        type="text"
        placeholder="Your message"
        value={text}
        onChange={(e) => setText(e.target.value)}></input>
    <button onClick={sendMessage}>Send</button> 
    </>
  )
}

export default ChatPolling