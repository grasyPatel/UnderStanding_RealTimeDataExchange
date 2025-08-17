import axios from "axios";
import { useEffect, useState } from "react";

const ChatHttp = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState("");
  const [text, setText] = useState("");


  const fetchMessages = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/chathttp/messages");
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  
  useEffect(() => {
    fetchMessages();
  }, []);


  const sendMessage = async () => {
    if (!user || !text) {
      alert("Please enter both your name and message.");
      return;
    }
    try {
      await axios.post("http://localhost:8080/api/chathttp/messages", {
        user,
        text,
      });
      setText(""); 
      fetchMessages(); 
    } catch (error) {

      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <h1>HTTP CHAT APP</h1>

      <div
        id="messages"
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          height: "300px",
          overflowY: "auto",
          marginBottom: "10px",
        }}
      >
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>

      <input
        value={user}
        type="text"
        placeholder="Enter your name"
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        value={text}
        type="text"
        placeholder="Enter your message"
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </>
  );
};

export default ChatHttp;
