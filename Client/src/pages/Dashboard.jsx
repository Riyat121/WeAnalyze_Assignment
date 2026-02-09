import { useState } from "react";
import TicketList from "../components/tickets/TicketList";
import TicketDetails from "../components/ticketDetails/TicketDetails";
import TicketViewsSidebar from "../components/sidebar/TicketViewsSidebar";

export default function Dashboard() {

  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    { id: 1, title: "Laudantium neque veritatis", code: "OPS-102" },
    { id: 2, title: "Molestiae saepe illum", code: "APPS-216" },
    { id: 3, title: "Dignissimos maiores porro", code: "APPS-216" },
  ];

  return (
    <div className="flex flex-1">

      <TicketViewsSidebar />

      <TicketList
        tickets={tickets}
        selectedTicket={selectedTicket}
        setSelectedTicket={setSelectedTicket}
      />

      <TicketDetails ticket={selectedTicket} />

    </div>
  );
}
