import { useState } from "react";
import { FiMessageSquare, FiGrid, FiChevronDown, FiCircle, FiChevronLeft } from "react-icons/fi";
import { useLayout } from "../../context/LayoutContext";

export default function TicketViewsSidebar() {

  const [active, setActive] = useState("My Tickets");
  const { setIsTicketViewsOpen } = useLayout();

  const ticketViews = [
    { name: "My Tickets", count: 1 },
    { name: "Past Due", count: 2 },
    { name: "High Priority", count: 3 },
    { name: "Unassigned", count: 49 },
    { name: "All Tickets", count: 5799 },
  ];

  return (
    <div className="w-[ 260px] h-full bg-gradient-to-b from-[#F7F9FC] to-[#EEF2F7] border-r border-gray-200 p-4 flex flex-col">

      {/* TITLE */}
      <div className="flex items-center justify-between text-[11px] text-gray-400 font-semibold tracking-wider mb-3">
        <div className="flex items-center0 gap-2">
          <span>TICKET VIEWS</span>
          <FiChevronDown size={14} />
        </div>
        <button
          onClick={() => setIsTicketViewsOpen(false)}
          className="p-1 rounded hover:bg-white text-gray-400 hover:text-gray-600"
          aria-label="Close ticket views"
        >
          <FiChevronLeft size={14} />
        </button>
      </div>

      {/* TICKET VIEW LIST */}
      <div className="space-y-1">

        {ticketViews.map(view => (

          <div
            key={view.name}
            onClick={() => setActive(view.name)}
            className={`flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all border
              
              ${active === view.name
                ? "bg-blue-600 text-white shadow-sm border-blue-500"
                : "text-gray-700 hover:bg-white border-transparent"}
            `}
          >
            <div className="flex items-center gap-2">
              <span
                className={`h-2 w-2 rounded-full
                  ${active === view.name ? "bg-white" : "bg-gray-300"}
                `}
              />
              <span className="text-sm font-medium">
                {view.name}
              </span>
            </div>

            {/* COUNT BADGE */}
            <span
              className={`text-[11px] px-2 py-0.5 rounded-full
                ${active === view.name
                  ? "bg-white/20 text-white"
                  : "bg-gray-200 text-gray-600"}
              `}
            >
              {view.count}
            </span>

          </div>

        ))}

      </div>

      {/* DIVIDER */}
      <div className="my-5 border-t border-gray-200/70" />

      {/* LIVE CHATS */}
      <div className="space-y-3 bg-white/70 border border-white/60 rounded-xl p-3">

        <div className="flex items-center justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
          <div className="flex items-center gap-2">
            <FiMessageSquare size={16} />
            <span className="text-sm font-medium">LIVE CHATS</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-green-500">
            <FiCircle size={10} />
            <span>ON</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-600 hover:text-blue-600 cursor-pointer">
          <div className="flex items-center gap-2">
            <FiGrid size={16} />
            <span className="text-sm font-medium">BOARDS</span>
          </div>
          <span className="text-xs text-gray-400">2</span>
        </div>

      </div>

    </div>
  );
}
