import { useEffect, useState } from "react";
import api from "../api/api";
import "./Chatbot.css";

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    if (open) {
      api.get("/api/chat/history")
        .then(res => setChats(res.data))
        .catch(() => {});
    }
  }, [open]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const res = await api.post("/api/chat/send", {
      message,
      language
    });

    setChats([...chats, res.data]);
    setMessage("");
  };

  return (
    <>
      <div className="chat-icon" onClick={() => setOpen(!open)}>
        🤖
      </div>

      {open && (
        <div className="chat-box">
          <h4>Smart Crop Chatbot</h4>

          <select value={language} onChange={e => setLanguage(e.target.value)}>
            <option value="en">English</option>
            <option value="hi">Hindi</option>
            <option value="mr">Marathi</option>
          </select>

          <div className="chat-body">
            {chats.map((c, i) => (
              <div key={i} className="chat-msg">
                <p><b>You:</b> {c.userMessage}</p>
                <p><b>Bot:</b> {c.botResponse}</p>
              </div>
            ))}
          </div>

          <input
            placeholder="Ask about crops..."
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </>
  );
}

export default ChatBot;
