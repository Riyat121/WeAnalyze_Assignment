export default function TopNavbar() {
  return (
    <div className="h-16 bg-blue-900 flex items-center justify-between px-6 text-white">
      
      <div className="text-xl font-semibold">Helpdesk</div>

      <input
        placeholder="Search Capacity..."
        className="bg-blue-800 px-4 py-2 rounded-md w-96 outline-none"
      />

      <div className="flex items-center gap-4">
        <button className="bg-blue-500 px-4 py-2 rounded-md">
          Create
        </button>

        <div className="w-8 h-8 bg-gray-300 rounded-full" />
      </div>
    </div>
  );
}
