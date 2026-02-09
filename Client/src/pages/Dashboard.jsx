import TicketList from "../components/tickets/TicketList";
import TicketDetails from "../components/ticketDetails/TicketDetails";
import RightSidebar from "../components/ticketDetails/RightSidebar";

export default function Dashboard() {
  return (
    <>
      <TicketList />
      <TicketDetails />
      <RightSidebar />
    </>
  );
}
