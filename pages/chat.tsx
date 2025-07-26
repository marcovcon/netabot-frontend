// pages/chat.tsx
import dynamic from "next/dynamic";
import Navbar from "../components/Navbar";

// Carga dinámica del componente Chat, solo en el cliente
const Chat = dynamic(() => import("../components/Chat"), { ssr: false });

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="p-4">
        <Chat mode="careful" />  // O usa "free" si es el modo libre

      </div>
    </main>
  );
}
