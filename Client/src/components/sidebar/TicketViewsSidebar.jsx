import { useState } from "react";

export default function TicketViewsSidebar() {
  const [activeView, setActiveView] = useState("My Tickets");

  const views = [
    "My Tickets",
    "Past Due",
    "High Priority",
    "Unassigned",
    "All Tickets"
  ];

  return (
    <div className="w-64 bg-white border-r p-4">
      {views.map(view => (
        <div
          key={view}
          onClick={() => setActiveView(view)}
          className={`p-2 rounded cursor-pointer mb-1
            ${activeView === view
              ? "bg-blue-50 text-blue-600"
              : "hover:bg-gray-50"}
          `}
        >
          {view}
        </div>
      ))}
    </div>
  );
}
