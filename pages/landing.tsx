import React from "react";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">
        🚀 Bienvenido a Netabot
      </h1>
      <p className="text-lg text-center max-w-xl mb-6">
        Este es un demo funcional de Netabot. Aquí puedes explorar cómo funciona sin gastar saldo en RunPod. 
        Pronto podrás conversar directamente desde la interfaz principal.
      </p>
      <a
        href="/"
        className="mt-4 px-6 py-3 bg-white text-black rounded-xl shadow hover:bg-gray-200 transition"
      >
        Ir a Netabot
      </a>
    </div>
  );
}
