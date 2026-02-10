import { FiChevronDown, FiBookOpen } from "react-icons/fi";
import { useLayout } from "../../context/LayoutContext";

export default function TopNavbar() {
  const { setIsCreateOpen } = useLayout();

  return (
    <div className="h-16 bg-blue-900 flex items-center justify-between px-6 text-white">
      
      <div className="text-xl font-semibold">Helpdesk</div>

      <input
        placeholder="Search Capacity..."
        className="bg-blue-800 px-4 py-2 rounded-md w-96 outline-none"
      />

      <div className="flex items-center gap-4 relative">
        <button
          onClick={() => setIsCreateOpen(true)}
          className="bg-blue-500 px-4 py-2 rounded-md flex items-center gap-2"
        >
          Create
          <FiChevronDown size={16} />
        </button>

        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
