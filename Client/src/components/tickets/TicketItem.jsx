export default function TicketItem({ ticket, isSelected, onClick }) {

  return (
    <div
      onClick={onClick}
      className={`px-4 py-3 cursor-pointer border-l-4 transition-all
        ${isSelected
          ? "bg-blue-50/80 border-blue-600 shadow-[inset_0_0_0_1px_rgba(59,130,246,0.15)]"
          : "border-transparent hover:bg-gray-50/80"
        }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="font-medium text-sm text-gray-800">{ticket.title}</div>
          <div className="text-xs text-gray-400 mt-1">
            {ticket.code} • To Do
          </div>
        </div>
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-xs font-semibold flex items-center justify-center">
          {ticket.code?.slice(0, 2)}
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <span className="text-[11px] text-gray-400">{ticket.date || "Today"}</span>
        <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-semibold">
          {ticket.priority || "Medium"}
        </span>
      </div>
    </div>
  );
}
