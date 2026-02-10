export default function TicketItem({ ticket, isSelected, onClick }) {

  return (
    <div
      onClick={onClick}
      className={`p-4 cursor-pointer border-l-4
        ${isSelected
          ? "bg-blue-50 border-blue-500"
          : "border-transparent hover:bg-gray-50"
        }`}
    >
      <div className="font-medium text-sm">{ticket.title}</div>

      <div className="text-xs text-gray-400 mt-1">
        {ticket.code} • To Do
      </div>
    </div>
  );
}
