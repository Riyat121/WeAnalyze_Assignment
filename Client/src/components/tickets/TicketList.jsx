import TicketItem from "./TicketItem";

export default function TicketList({
  tickets,
  selectedTicket,
  setSelectedTicket
}) {

  return (
    <div className="w-[ 360px] bg-white border-r">

      {tickets.map(ticket => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          isSelected={selectedTicket?.id === ticket.id}
          onClick={() => setSelectedTicket(ticket)}
        />
      ))}

    </div>
  );
}
 