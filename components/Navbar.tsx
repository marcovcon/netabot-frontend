// components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-4 py-3 shadow-md w-full">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link href="/landing" className="hover:underline">Inicio</Link>
        </li>
        <li>
          <Link href="/chat" className="hover:underline">Chat</Link>
        </li>
        <li>
          <Link href="/feedback" className="hover:underline">Feedback</Link>
        </li>
      </ul>
    </nav>
  );
}
