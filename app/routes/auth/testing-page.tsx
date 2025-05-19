import { Link, NavLink } from "react-router";
import type { Route } from "./+types/testing-page";

export async function loader() {
  console.log("loader server");
  return { message: "Hello, world! loader server" };
}

export async function clientLoader({ serverLoader }: Route.ClientLoaderArgs) {
  console.log("clientLoader");
  // // call the server loader
  const serverData = await serverLoader();
  // // And/or fetch data on the client

  return { message: "Hello, world! clientLoader", serverData };
}

export default function MyRouteComponent({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <div>
      <h1>Testing page!</h1>
      <p>Loader Data: {JSON.stringify(loaderData)}</p>
      <p>Action Data: {JSON.stringify(actionData)}</p>
      <p>Route Parameters: {JSON.stringify(params)}</p>
      <p>Matched Routes: {JSON.stringify(matches)}</p>
      <NavLink
        to="/auth/testing-args/ABC-123/juan/25"
        className={({ isPending }) =>
          isPending
            ? "btn btn-primary text-red-500 underline"
            : "btn btn-primary text-blue-500 underline"
        }
      >
        Testing args
      </NavLink>
    </div>
  );
}
