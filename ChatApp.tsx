import { useState } from "react";

export default function ChatApp() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "Tú", text: input };
    setMessages([...messages, userMessage]);

    const res = await fetch("https://netabot-backend.onrender.com/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMessage = { sender: "Netabot", text: data.response };
    setMessages((prev) => [...prev, botMessage]);
    setInput("");
  };

  return (
    <div style={{ padding: 20, background: "#000", color: "#fff", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>¡Bienvenido a Netabot!</h1>
      <div style={{ marginBottom: "1rem" }}>
        {messages.map((msg, i) => (
          <div key={i}>x
            <strong>{msg.sender}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Escribe tu mensaje..."
          style={{ padding: 10, width: "70%", marginRight: 10 }}
        />
        <button onClick={sendMessage} style={{ padding: 10 }}>Enviar</button>
      </div>
    </div>
  );
}