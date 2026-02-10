import {
  FiHome,
  FiInbox,
  FiUsers,
  FiFileText,
  FiGrid,
  FiLayers,
  FiDatabase,
  FiRefreshCw,
  FiBarChart2,
  FiSettings
} from "react-icons/fi";

export default function IconsSidebar() {

  const icons = [
    FiHome,
    FiInbox,
    FiUsers,
    FiFileText,
    FiGrid,
    FiLayers,
    FiDatabase,
    FiRefreshCw,
    FiBarChart2,
    FiSettings
  ];

  return (
    <div className="w-16 bg-[#0B2F5B] flex flex-col items-center py-5 justify-between">

      {/* TOP LOGO */}
      <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold">
        C
      </div>

      {/* ICON LIST */}
      <div className="flex flex-col gap-5 items-center mt-6">
        {icons.map((Icon, index) => (
          <button
            key={index}
            className="w-10 h-10 flex items-center justify-center rounded-xl
              text-blue-200 hover:bg-blue-500/30 hover:text-white transition"
          >
            <Icon size={20} />
          </button>
        ))}
      </div>

      {/* PROFILE / BOTTOM */}
      <div className="w-10 h-10 rounded-full bg-gray-300" />

    </div>
  );
}
