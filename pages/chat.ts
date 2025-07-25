import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Solo se permiten peticiones POST" });
  }

  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ message: "No se recibió ningún mensaje" });
  }

  // Simulación de respuesta (puedes conectar aquí con RunPod u OpenRouter más adelante)
  const simulatedResponse = `Recibí tu mensaje: "${message}". ¡Gracias por usar Netabot!`;

  return res.status(200).json({ response: simulatedResponse });
}
