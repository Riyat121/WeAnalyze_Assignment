import { useState } from "react";
import { FiArrowLeft, FiCalendar, FiChevronDown, FiMessageSquare, FiPlus, FiTrash2 } from "react-icons/fi";
import { useLayout } from "../../context/LayoutContext";

export default function CreateKnowledgeDrawer() {
  const { isCreateOpen, setIsCreateOpen } = useLayout();
  const [inquiry, setInquiry] = useState("This is populated automatically with ticket inquiry");
  const [response, setResponse] = useState("");
  const [expirationOpen, setExpirationOpen] = useState(false);
  const [expiration, setExpiration] = useState("mm/dd/yyyy");
  const [autocomplete, setAutocomplete] = useState(true);
  const [saveStatus, setSaveStatus] = useState("");

  const expirationOptions = ["mm/dd/yyyy", "Today", "Tomorrow", "Next Week", "Next Month"];

  if (!isCreateOpen) return null;

  return (
    <div className="fixed inset-0 z-40 flex">
      <div
        className="flex-1 bg-black/20"
        onClick={() => setIsCreateOpen(false)}
      />
      <div className="w-[360px] bg-white h-full border-l shadow-xl p-5 overflow-auto">
        <button
          onClick={() => setIsCreateOpen(false)}
          className="text-sm text-blue-600 flex items-center gap-2 mb-4"
        >
          <FiArrowLeft size={14} />
          Back
        </button>

        <div className="flex items-center gap-2 text-gray-800 font-semibold mb-4">
          <div className="h-7 w-7 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
            <FiMessageSquare size={14} />
          </div>
          Create New Knowledge
        </div>

        <div className="space-y-4 text-sm">
          <div>
            <div className="text-xs font-semibold text-gray-700 mb-2">
              New Inquiry <span className="text-red-500">*</span>
            </div>
            <div className="border rounded-xl p-3">
              <textarea
                value={inquiry}
                onChange={(e) => setInquiry(e.target.value)}
                className="w-full text-xs text-gray-600 outline-none resize-none mb-3"
                rows={3}
              />
              <div className="flex items-center justify-between">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-[10px] font-semibold flex items-center justify-center">
                  AH
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <FiPlus />
                  <FiTrash2 />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-gray-700 mb-2">
              New Response <span className="text-red-500">*</span>
            </div>
            <div className="border rounded-xl p-3">
              <textarea
                value={response}
                onChange={(e) => setResponse(e.target.value)}
                placeholder="Add a response..."
                className="w-full text-xs text-gray-600 outline-none resize-none mb-3"
                rows={3}
              />
              <div className="flex items-center justify-between">
                <div className="h-7 w-7 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-white text-[10px] font-semibold flex items-center justify-center">
                  AH
                </div>
                <div className="flex items-center gap-3 text-gray-500">
                  <FiPlus />
                  <FiTrash2 />
                </div>
              </div>
            </div>
            <div className="text-[11px] text-gray-400 mt-2">
              Tip: Capacity works best with answers that are short and specific.
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-gray-700 mb-2">
              Save To <span className="text-red-500">*</span>
            </div>
            <div className="border rounded-lg px-3 py-2 flex items-center justify-between text-gray-500">
              <span>Choose a dialogue...</span>
              <FiChevronDown />
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold text-gray-700 mb-2">
              Expiration
            </div>
            <div className="relative">
              <button
                onClick={() => setExpirationOpen(prev => !prev)}
                className="w-full border rounded-lg px-3 py-2 flex items-center justify-between text-gray-500"
              >
                <div className="flex items-center gap-2">
                  <FiCalendar />
                  <span>{expiration}</span>
                </div>
                <FiChevronDown />
              </button>
              {expirationOpen && (
                <div className="absolute left-0 top-11 w-full bg-white border rounded-lg shadow-lg p-1 z-20">
                  {expirationOptions.map(item => (
                    <button
                      key={item}
                      onClick={() => {
                        setExpiration(item);
                        setExpirationOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 text-xs hover:bg-gray-100 rounded-md text-gray-600"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs font-semibold text-gray-700">Autocomplete</div>
            <button
              onClick={() => setAutocomplete(prev => !prev)}
              className="flex items-center gap-2"
              aria-label="Toggle autocomplete"
            >
              <div className={`w-10 h-6 rounded-full flex items-center ${autocomplete ? "bg-green-500" : "bg-gray-300"}`}>
                <div className={`h-5 w-5 bg-white rounded-full shadow transition-all ${autocomplete ? "translate-x-4" : "translate-x-1"}`} />
              </div>
              <span className="text-xs text-gray-500">{autocomplete ? "On" : "Off"}</span>
            </button>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={() => setSaveStatus("Saved to KB")}
              className="flex-1 border rounded-lg py-2 text-xs font-semibold text-gray-600 bg-gray-50"
            >
              Save to KB
            </button>
            <button
              onClick={() => setSaveStatus("Draft saved")}
              className="flex-1 border rounded-lg py-2 text-xs font-semibold text-blue-600 bg-blue-50"
            >
              Save Local Draft
            </button>
          </div>
          {saveStatus && (
            <div className="text-xs text-emerald-600">{saveStatus}</div>
          )}
        </div>
      </div>
    </div>
  );
}
