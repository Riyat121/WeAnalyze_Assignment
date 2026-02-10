export default function ReplyBox({ reply, setReply, onSend }) {

  return (
    <div className="bg-white border rounded-lg p-4 mb-4">

      <textarea
        value={reply}
        onChange={(e) => setReply(e.target.value)}
        placeholder="Add a reply..."
        className="w-full outline-none resize-none"
        rows={4}
      />

      <div className="flex justify-end mt-3">
        <button
          onClick={onSend}
          disabled={!reply.trim()}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-60 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </div>

    </div>
  );
}
