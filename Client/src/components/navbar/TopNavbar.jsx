import { useState } from "react";
import { FiChevronDown, FiFileText, FiMessageSquare, FiBookOpen } from "react-icons/fi";
import { useLayout } from "../../context/LayoutContext";

export default function TopNavbar() {
  const [open, setOpen] = useState(false);
  const { setIsCreateOpen } = useLayout();

  return (
    <div className="h-16 bg-blue-900 flex items-center justify-between px-6 text-white">
      
      <div className="text-xl font-semibold">Helpdesk</div>

      <input
        placeholder="Search Capacity..."
        className="bg-blue-800 px-4 py-2 rounded-md w-96 outline-none"
      />

      <div className="flex items-center gap-4 relative">
        <div className="relative">
          <button
            onClick={() => setOpen(prev => !prev)}
            className="bg-blue-500 px-4 py-2 rounded-md flex items-center gap-2"
          >
            Create
            <FiChevronDown size={16} />
          </button>

          {open && (
            <div className="absolute right-0 top-12 w-56 bg-white text-gray-700 rounded-xl shadow-lg border p-2 z-30">
              <div className="text-[11px] uppercase tracking-wider text-gray-400 px-3 py-2">
                Create
              </div>
              <button
                onClick={() => {
                  setIsCreateOpen(true);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
              >
                <FiFileText className="text-blue-600" />
                New Ticket
              </button>
              <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm">
                <FiMessageSquare className="text-emerald-600" />
                New Reply
              </button>
              <button
                onClick={() => {
                  setIsCreateOpen(true);
                  setOpen(false);
                }}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-100 text-sm"
              >
                <FiBookOpen className="text-indigo-600" />
                Knowledge Article
              </button>
            </div>
          )}
        </div>

        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
