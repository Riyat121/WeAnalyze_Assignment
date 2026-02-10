export default function ReplyBox({ reply, setReply, onSend }) {

  return (
    <div className="bg-white border rounded-xl p-4 mb-4 shadow-sm">

      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Add a reply..."
        className="w-full outline-none resize-none text-sm text-gray-700 placeholder:text-gray-400"
        rows={4}
      />

      <div className="flex justify-between items-center mt-3">
        <div className="text-xs text-gray-400">Tip: Use @ to mention a teammate</div>
        <button
          onClick={onSend}
          disabled={!reply.trim()}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>

    </div>
  );
}
