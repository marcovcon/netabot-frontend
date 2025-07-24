const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://netabot-backend.onrender.com";

export async function sendMessage(message: string, mode: string = "libre") {
  const response = await fetch(`${API_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message, mode })
  });

  if (!response.ok) {
    throw new Error("Error al conectar con Netabot");
  }

  const data = await response.json();
  return data.response;
}
