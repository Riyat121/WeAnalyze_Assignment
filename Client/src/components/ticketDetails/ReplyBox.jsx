import {
  FiBold,
  FiItalic,
  FiUnderline,
  FiImage,
  FiPaperclip,
  FiFilePlus,
  FiMessageSquare,
  FiMessageCircle,
  FiSend
} from "react-icons/fi";

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

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3 text-gray-400">
          <button className="hover:text-gray-600" aria-label="Bold"><FiBold /></button>
          <button className="hover:text-gray-600" aria-label="Italic"><FiItalic /></button>
          <button className="hover:text-gray-600" aria-label="Underline"><FiUnderline /></button>
          <button className="hover:text-gray-600" aria-label="Insert image"><FiImage /></button>
          <button className="hover:text-gray-600" aria-label="Attach file"><FiPaperclip /></button>
          <button className="hover:text-gray-600" aria-label="Add file"><FiFilePlus /></button>
          <button className="hover:text-gray-600" aria-label="Add comment"><FiMessageSquare /></button>
          <button className="hover:text-gray-600" aria-label="Quick reply"><FiMessageCircle /></button>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>Add to KB</span>
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
          <button
            onClick={onSend}
            disabled={!reply.trim()}
            className="h-9 w-9 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center hover:bg-gray-200 disabled:opacity-60 disabled:cursor-not-allowed"
            aria-label="Send"
          >
            <FiSend />
          </button>
        </div>
      </div>

    </div>
  );
}
