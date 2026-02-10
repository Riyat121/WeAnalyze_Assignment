import { useState } from "react";
import { FiMessageSquare, FiGrid, FiChevronDown, FiCircle, FiChevronLeft } from "react-icons/fi";
import { useLayout } from "../../context/LayoutContext";

export default function TicketViewsSidebar() {

  const [active, setActive] = useState("My Tickets");
  const { setIsTicketViewsOpen } = useLayout();

  const ticketViews = [
    { name: "My Tickets", count: 9 },
    { name: "Past Due", count: 4 },
    { name: "High Priority", count: 11 },
    { name: "Unassigned", count: 98 },
    { name: "All Tickets", count: 2192 },
  ];

  return (
    <div className="w-[260px] h-full bg-[#F6F8FB] border-r border-gray-200 p-4 flex flex-col">

      {/* TITLE */}
      <div className="flex items-center justify-between text-xs text-gray-400 font-semibold tracking-wider mb-3">
        <div className="flex items-center gap-2">
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
            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-all
              
              ${active === view.name
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-600 hover:bg-white"}
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
              className={`text-xs px-2 py-0.5 rounded-md
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
      <div className="my-5 border-t border-gray-200" />

      {/* LIVE CHATS */}
      <div className="space-y-3">

        <div className="flex items-center justify-between text-gray-500 hover:text-blue-600 cursor-pointer">
          <div className="flex items-center gap-2">
            <FiMessageSquare size={16} />
            <span className="text-sm font-medium">LIVE CHATS</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-green-500">
            <FiCircle size={10} />
            <span>ON</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-gray-500 hover:text-blue-600 cursor-pointer">
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
