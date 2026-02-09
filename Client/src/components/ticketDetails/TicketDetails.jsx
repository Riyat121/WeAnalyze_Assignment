export default function TicketDetails() {
  return (
    <div className="flex-1 bg-gray-50 p-6">

      <h2 className="text-xl font-semibold mb-4">
        Laudantium neque veritatis
      </h2>

      {/* Reply Box */}
      <div className="bg-white p-4 rounded shadow mb-4">
        <textarea
          placeholder="Add a reply..."
          className="w-full border p-2 rounded"
          rows={4}
        />
      </div>

      {/* Messages */}
      {[1,2].map(msg => (
        <div key={msg} className="bg-white p-4 rounded shadow mb-4">
          <div className="font-semibold">Allie Harmon</div>
          <p className="text-gray-600">
            Ex beatae aliquid mollitia...
          </p>
        </div>
      ))}

    </div>
  );
}
