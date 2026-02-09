const views = [
  { name: "My Tickets", count: 9 },
  { name: "Past Due", count: 4 },
  { name: "High Priority", count: 11 },
  { name: "Unassigned", count: 98 },
  { name: "All Tickets", count: 2192 },
];

export default function TicketViewsSidebar() {
  return (
    <div className="w-64 bg-gray-100 p-4">
      
      <h3 className="text-sm text-gray-500 mb-4">TICKET VIEWS</h3>

      {views.map((v, i) => (
        <div
          key={i}
          className="flex justify-between p-2 hover:bg-blue-100 rounded cursor-pointer"
        >
          <span>{v.name}</span>
          <span className="text-gray-500">{v.count}</span>
        </div>
      ))}

    </div>
  );
}
