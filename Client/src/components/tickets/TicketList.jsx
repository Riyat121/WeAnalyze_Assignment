import { useState } from "react";
import { FiChevronDown, FiSearch, FiSliders, FiMenu } from "react-icons/fi";
import TicketItem from "./TicketItem";
import { useLayout } from "../../context/LayoutContext";

export default function TicketList({
  tickets,
  selectedTicket,
  setSelectedTicket,
  filters,
  setFilters,
  filterOptions
}) {
  const [showFilters, setShowFilters] = useState(false);
  const { isTicketViewsOpen, setIsTicketViewsOpen } = useLayout();

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div className="w-[ 360px] bg-white border-r flex flex-col">

      {/* FILTER BAR */}
      <div className="px-4 pt-4 pb-3 border-b bg-gradient-to-b from-white to-gray-50/40">
        <div className="flex items-center justify-between mb-3 relative">
          <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            {!isTicketViewsOpen && (
              <button
                onClick={() => setIsTicketViewsOpen(true)}
                className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500"
                aria-label="Open ticket views"
              >
                <FiMenu size={16} />
              </button>
            )}
            <span>My Tickets</span>
            <FiChevronDown size={14} className="text-gray-400" />
          </div>
          <div className="relative">
            <button
              onClick={() => setShowFilters(prev => !prev)}
              className="p-2 rounded-md hover:bg-gray-100 text-gray-500"
              aria-label="Toggle filters"
            >
              <FiSliders size={16} />
            </button>

            {showFilters && (
              <div className="absolute right-0 top-10 z-20 w-64 bg-white border rounded-xl shadow-lg p-3">
                <div className="text-xs font-semibold text-gray-500 mb-2">
                  Filters
                </div>
                <div className="flex flex-col gap-2">
                  <select
                    className="text-xs border rounded-lg px-2 py-1.5 text-gray-700 bg-white"
                    value={filters.date}
                    onChange={(e) => updateFilter("date", e.target.value)}
                  >
                    {filterOptions.date.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>

                  <select
                    className="text-xs border rounded-lg px-2 py-1.5 text-gray-700 bg-white"
                    value={filters.reporter}
                    onChange={(e) => updateFilter("reporter", e.target.value)}
                  >
                    {filterOptions.reporter.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>

                  <select
                    className="text-xs border rounded-lg px-2 py-1.5 text-gray-700 bg-white"
                    value={filters.assignedTo}
                    onChange={(e) => updateFilter("assignedTo", e.target.value)}
                  >
                    {filterOptions.assignedTo.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>

                  <select
                    className="text-xs border rounded-lg px-2 py-1.5 text-gray-700 bg-white"
                    value={filters.priority}
                    onChange={(e) => updateFilter("priority", e.target.value)}
                  >
                    {filterOptions.priority.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>

                  <select
                    className="text-xs border rounded-lg px-2 py-1.5 text-gray-700 bg-white"
                    value={filters.project}
                    onChange={(e) => updateFilter("project", e.target.value)}
                  >
                    {filterOptions.project.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white text-gray-500 rounded-lg px-3 py-2 border shadow-sm">
          <FiSearch size={16} />
          <input
            className="bg-transparent outline-none w-full text-sm text-gray-700 placeholder:text-gray-400"
            placeholder="Search tickets"
            value={filters.search}
            onChange={(e) => updateFilter("search", e.target.value)}
          />
        </div>

      </div>

      <div className="flex-1 overflow-auto">
        {tickets.map(ticket => (
        <TicketItem
          key={ticket.id}
          ticket={ticket}
          isSelected={selectedTicket?.id === ticket.id}
          onClick={() => setSelectedTicket(ticket)}
        />
        ))}
      </div>

    </div>
  );
}
 
