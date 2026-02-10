import { useState } from "react";

export default function MessageList({ messages, onDelete, onUpdate }) {
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const formatTime = (value) => {
    if (!value) return "";
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleString();
  };

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
              <span>{m.time || formatTime(m.createdAt)}</span>
            </div>
          )}
          {editingId === m._id ? (
            <div>
              <textarea
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="w-full text-sm text-gray-700 outline-none resize-none border rounded-md p-2"
                rows={3}
              />
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => {
                    onUpdate(m._id, editingText);
                    setEditingId(null);
                  }}
                  className="text-xs px-3 py-1.5 rounded-md bg-blue-600 text-white"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditingId(null)}
                  className="text-xs px-3 py-1.5 rounded-md border text-gray-500"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="text-sm text-gray-700 leading-relaxed">{m.text}</div>
          )}
          <div className="flex items-center gap-3 mt-3 text-xs text-gray-400">
            <button
              onClick={() => {
                setEditingId(m._id);
                setEditingText(m.text);
              }}
              className="hover:text-gray-600"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(m._id)}
              className="hover:text-red-500"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

    </div>
  );
}
