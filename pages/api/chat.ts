// pages/api/chat.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Solo se permiten peticiones POST" });
    return;
  }

  const { message } = req.body;

  if (!message) {
    res.status(400).json({ message: "No se recibió ningún mensaje" });
    return;
  }

  const response = `Recibí tu mensaje: "${message}". ¡Gracias por usar Netabot!`;
  res.status(200).json({ response });
}
