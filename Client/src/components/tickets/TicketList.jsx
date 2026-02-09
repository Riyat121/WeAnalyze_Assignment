export default function TicketList() {
  return (
    <div className="w-96 border-r bg-white p-4">
      
      <input
        placeholder="Search tickets"
        className="w-full border p-2 rounded mb-4"
      />

      {[1,2,3,4,5].map(ticket => (
        <div
          key={ticket}
          className="p-3 border-b hover:bg-gray-50 cursor-pointer"
        >
          <div className="font-medium">
            Laudantium neque veritatis
          </div>

          <div className="text-sm text-gray-500">
            APPS-216 • To Do
          </div>
        </div>
      ))}

    </div>
  );
}
