import type React from "react";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { LogOut, X } from "lucide-react";
import { Form, Link, Outlet, redirect } from "react-router";
import ContactList from "~/chat/components/ContactList";
import ContactInformationCard from "~/chat/components/contact-information-card/ContactInformationCard";
import { getClient, getClients } from "~/fake/fake-data";
import type { Route } from "./+types/chat-layout";
import { getSession } from "~/session.server";

export async function loader({ request, params }: Route.LoaderArgs) {
  const session = await getSession(request.headers.get("Cookie"));

  const userName = session.get("name");
  const { id } = params;

  const clients = await getClients();

  if (id) {
    const client = await getClient(id);
    return { client, userName, clients };
  }

  // if (!session.has("userId")) {
  //   return redirect("/auth/login");
  // }

  return { clients, userName };
}

export default function ChatLayout({ loaderData }: Route.ComponentProps) {
  const { clients, userName, client } = loaderData;
  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div className="w-64 border-r bg-muted/10">
        <div className="p-4 border-b">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-primary" />
            <Link to="/chat" className="font-semibold">
              {userName}
            </Link>
          </div>
        </div>

        <ContactList clients={clients} />

        <Form method="post" action="/auth/logout" className="p-4 border-t">
          <Button variant="default" className="w-full text-center">
            <LogOut className="mr-2 h-4 w-4" />
            Log out
          </Button>
        </Form>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-14 border-b px-4 flex items-center justify-between">
            <div></div> {/* Empty div to maintain spacing */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                Save conversation
              </Button>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <X className="h-4 w-4" />
              </Button>
            </div>
          </header>
          {<Outlet />}
        </div>

        {/* Right Panel - Contact Details */}
        <div className="w-80 border-l">
          <div className="h-14 border-b px-4 flex items-center">
            <h2 className="font-medium">Contact details</h2>
          </div>

          <ContactInformationCard />
        </div>
      </div>
    </div>
  );
}
