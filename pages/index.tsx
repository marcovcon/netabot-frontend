import Head from "next/head";
import Chat from "../components/Chat";

export default function Home() {
  return (
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

        <div className="max-w-2xl mx-auto mt-6 mb-4 p-4 border border-gray-700 rounded-lg bg-gray-900 text-white shadow">
          <h2 className="text-xl font-bold mb-2">👋 Bienvenido a Netabot</h2>
          <p className="mb-1">Puedes chatear libremente con la IA a continuación.</p>
        </div>

        <Chat />
      </main>
    </div>
  );
}
