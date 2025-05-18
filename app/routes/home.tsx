import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-thin">Bienvenidos a React Router!!</h1>
      <p className="text-lg">
        Este es un template de React Router para crear una aplicación web.
      </p>
    </div>
  );
}
