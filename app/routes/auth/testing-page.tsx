import { Form, Link, NavLink, useNavigation } from "react-router";
import type { Route } from "./+types/testing-page";
import { sleep } from "~/lib/sleep";

export async function action({ request }: Route.ActionArgs) {
  await sleep(1000);
  const data = await request.formData();
  const name = data.get("name");
  const allData = Object.fromEntries(data);
  console.log("Server side - action");
  console.log({ name, allData });
  return { ok: true, message: "todo bien desde el server" };
}

export async function clientAction({
  serverAction,
  request,
}: Route.ClientActionArgs) {
  await sleep(1000);
  const formData = await request.clone().formData();
  const allData = Object.fromEntries(formData);
  const data = await serverAction();
  return { message: "desde el lado de el server cliente", data, allData };
}

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
  const navigation = useNavigation();
  const isPosting = navigation.state === "submitting";

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

      <Form className="flex gap-2" action="/auth/testing" method="post">
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          name="name"
        />
        <input
          className="border-2 border-gray-300 rounded-md p-2"
          type="text"
          name="age"
        />
        <button
          disabled={isPosting}
          className="bg-blue-500 rounded-md p-2 disabled:opacity-10"
          type="submit"
        >
          {isPosting ? "Submitting..." : "Submit"}
        </button>
      </Form>
    </div>
  );
}
