<<<<<<< HEAD
import Head from "next/head";
import Chat from "../components/Chat";
=======
import { useState, useEffect } from "react";
import Chat from "../components/Chat";

>>>>>>> bce65e7 (Fix: correct case for Chat import)


export default function Home() {
  const [mode, setMode] = useState<"careful" | "free">("careful");
  const [showNotice, setShowNotice] = useState(false);

  const toggleMode = () => {
    setMode((prev) => (prev === "careful" ? "free" : "careful"));
    setShowNotice(true);
  };

  useEffect(() => {
    if (showNotice) {
      const timer = setTimeout(() => setShowNotice(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotice]);

  return (
<<<<<<< HEAD
    <div className="flex min-h-screen flex-col items-center justify-start bg-black text-white p-4">
      <Head>
        <title>Netabot</title>
        <meta name="description" content="IA sin censura hecha en 🇲🇽 para el mundo" />
      </Head>

      <main className="w-full max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          🚀 ¡Bienvenido a Netabot!
        </h1>
        <p className="text-xl text-center mb-6">
          Tu inteligencia artificial sin censura, hecha en 🇲🇽 para el mundo.
        </p>

        <Chat />
      </main>
    </div>
=======
    <main className="p-4">
      <button
        onClick={toggleMode}
        className="fixed top-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
      >
        Cambiar a {mode === "careful" ? "Modo Libre 🔥" : "Modo Cuidadoso 🤖"}
      </button>

      {showNotice && (
        <div className="fixed top-20 right-4 bg-black text-white border border-gray-600 px-4 py-2 rounded shadow-lg z-50">
          Ahora estás en:{" "}
          <strong>
            {mode === "careful" ? "Modo Cuidadoso 🤖" : "Modo Libre 🔥"}
          </strong>
        </div>
      )}

      {/* Explicación de modos */}
      <div className="max-w-2xl mx-auto mt-6 mb-4 p-4 border border-gray-700 rounded-lg bg-gray-900 text-white shadow">
        <h2 className="text-xl font-bold mb-2">👋 Bienvenido a Netabot</h2>
        <p className="mb-1">Puedes chatear conmigo en dos modos diferentes:</p>
        <ul className="list-disc list-inside mb-3">
          <li><strong>Modo Cuidadoso 🤖:</strong> Respuestas prudentes, seguras y pensadas.</li>
          <li><strong>Modo Libre 🔥:</strong> Conversación sin restricciones, más creativa y sin censura.</li>
        </ul>
        <p>Usa el botón superior para cambiar de modo cuando quieras.</p>
      </div>

      <Chat mode={mode} />
    </main>
>>>>>>> bce65e7 (Fix: correct case for Chat import)
  );
}
