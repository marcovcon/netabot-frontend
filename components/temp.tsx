import React, { useState } from "react";

type ChatProps = {
  mode: "careful" | "free";
};

export default function Chat({ mode }: ChatProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = input;
    setMessages([...messages, "🧑 " + userMessage]);
    setInput("");

    try {
      const response = await fetch(
        `https://netabot-backend.onrender.com/chat?modo=${mode}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: userMessage }),
        }
      );

      const data = await response.json();
      if (data?.response) {
        setMessages((prev) => [...prev, "🤖 " + data.response]);
      }
    } catch (error) {
      setMessages((prev) => [...prev, "⚠️ Error al obtener respuesta"]);
    }
  };

  return (
    <div className="w-full max-w-2xl mt-10">
      <div className="bg-white text-black p-4 h-64 overflow-y-auto rounded-md shadow mb-4">
        {messages.map((msg, i) => (
          <div key={i} className="mb-2 whitespace-pre-wrap">{msg}</div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex">
        <input
          className="flex-1 px-4 py-2 rounded-l-md border border-gray-300 text-black"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Escribe tu mensaje..."
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md"
        >
          Enviar
        </button>
      </form>
    </div>
  );
}
