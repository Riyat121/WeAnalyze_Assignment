export default function MessageList({ messages }) {

  return (
    <div className="space-y-4">

      {messages.map(m => (
        <div key={m.id} className="bg-white border rounded-xl p-4 shadow-sm">
          {(m.author || m.time) && (
            <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
              <div className="flex items-center gap-2">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-[10px] font-semibold flex items-center justify-center">
                  {m.author?.split(" ").map(p => p[0]).slice(0, 2).join("")}
                </div>
                <span className="font-medium text-gray-700">{m.author}</span>
              </div>
              <span>{m.time}</span>
            </div>
          )}
          <div className="text-sm text-gray-700 leading-relaxed">{m.text}</div>
        </div>
      ))}

    </div>
  );
}
