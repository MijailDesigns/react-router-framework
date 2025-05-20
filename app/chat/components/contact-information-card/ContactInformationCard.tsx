import ContactInformation from "./ContactInformation";
import ContactInformationSkeleton from "./ContactInformationSkeleton";
import NoContactSelected from "./NoContactSelected";
import { useLoaderData, useNavigation, useParams } from "react-router";
import type { Client } from "../interfaces/chat.interfaces";

const ContactInformationCard = () => {
  const { id } = useParams();
  const { clients = [] } = useLoaderData(); // esto viene del loader del padre (ChatLayout)
  const { state } = useNavigation();

  const isPending = state === "loading";

  if (isPending) return <ContactInformationSkeleton />;

  if (!id) return <NoContactSelected />;

  const client = clients.find((client: Client) => client.id === id);

  if (!client) return <NoContactSelected />;

  return <ContactInformation client={client} />;
};

export default ContactInformationCard;
