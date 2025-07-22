import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white text-center p-4">
      <Head>
        <title>Netabot</title>
        <meta name="description" content="IA sin censura hecha en 🇲🇽 para el mundo" />
      </Head>
      <main>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">¡Bienvenido a Netabot!</h1>
        <p className="text-xl">Tu inteligencia artificial sin censura, hecha en 🇲🇽 para el mundo.</p>
      </main>
    </div>
  );
}
