// pages/chat.tsx (antes chat-ui.tsx)
import Navbar from "../components/navbar";
import Chat from "../components/chat";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="p-4">
        <Chat />
      </div>
    </main>
  );
}
