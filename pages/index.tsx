import Head from "next/head";
import Chat from "../components/chat";


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

        <Chat />
      </main>
    </div>
  );
}
