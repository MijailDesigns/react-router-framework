import { Link, NavLink } from "react-router";
import type { Route } from "./+types/testing-args-page";
import { sleep } from "~/lib/sleep";

export function meta() {
  return [
    { title: "Support chat" },
    {
      property: "og:title",
      content: "Very cool app",
    },
    {
      name: "description",
      content: "This app is the best",
    },
  ];
}

export function headers() {
  return {
    "X-Stretchy-Pants": "its for fun",
    "Cache-Control": "max-age=300, s-maxage=3600",
  };
}

export function links() {
  return [
    // {
    //   rel: "icon",
    //   href: "/favicon.png",
    //   type: "image/png",
    // },
    // {
    //   rel: "stylesheet",
    //   href: "https://example.com/some/styles.css",
    // },
    // {
    //   rel: "preload",
    //   href: "/images/banner.jpg",
    //   as: "image",
    // },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  console.log({ params });
  return { hola: " mundo" };
}

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  console.log({ params });
  await sleep(1500);
  return { hola: " mundo" };
}

export function HydrateFallback() {
  return (
    <div className="h-screen flex items-center justify-center bg-gray-300 dark:bg-gray-900">
      <p className="text-4xl font-bold animate-pulse text-gray-800 dark:text-gray-200">
        Loading Game...
      </p>
    </div>
  );
}

clientLoader.hydrate = true; // para que funcione el hydrate con el loader
export default function TestingArgsPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const { id, name, age } = params;
  console.log({ id, name, age });
  return (
    <div>
      <h1>Testing Args page</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>

      <NavLink
        to="/auth/testing"
        className="btn btn-primary text-blue-500 underline"
      >
        Testing
      </NavLink>
    </div>
  );
}
