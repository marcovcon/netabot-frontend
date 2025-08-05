import { useState } from "react";

export default function Chat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!message.trim()) return;
    setLoading(true);
    setResponse("");

    try {
      const res = await fetch("https://netabot-backend.onrender.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();
      setResponse(data.response || data.error || "Sin respuesta");
    } catch (err) {
      setResponse("❌ Error de conexión con el servidor.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Netabot</h1>

      <textarea
        className="w-full p-3 rounded-md bg-gray-900 border border-gray-700 text-white"
        rows={4}
        placeholder="Escribe tu pregunta sin censura..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <button
        onClick={sendMessage}
        disabled={loading}
        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
      >
        {loading ? "Pensando..." : "Enviar"}
      </button>

      {response && (
        <div className="mt-6 bg-gray-800 p-4 rounded-md text-white whitespace-pre-wrap">
          {response}
        </div>
      )}
    </div>
  );
}
