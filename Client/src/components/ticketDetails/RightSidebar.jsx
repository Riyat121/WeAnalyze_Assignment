import { FiChevronDown, FiCalendar } from "react-icons/fi";

export default function RightSidebar() {
  return (
    <div className="w-[320px] bg-white border-l p-4">
      <div className="flex items-center justify-between mb-4">
        <button className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-semibold flex items-center gap-2">
          To Do
          <FiChevronDown size={14} />
        </button>
        <button className="h-8 w-8 rounded-full border text-gray-400 hover:text-gray-600">
          ✕
        </button>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <div className="text-xs text-gray-500 mb-2">Priority</div>
          <div className="border rounded-lg px-3 py-2 flex items-center justify-between text-gray-700">
            Medium
            <FiChevronDown />
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">Assigned To</div>
          <div className="border rounded-lg px-3 py-2 flex items-center justify-between text-gray-700">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gray-200" />
              Allie Harmon
            </div>
            <FiChevronDown />
          </div>
          <div className="text-xs text-blue-600 mt-1">Assign to me</div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">Project</div>
          <div className="border rounded-lg px-3 py-2 flex items-center justify-between text-gray-700">
            Administrative
            <FiChevronDown />
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">Ticket Type</div>
          <div className="border rounded-lg px-3 py-2 flex items-center justify-between text-gray-700">
            Task
            <FiChevronDown />
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">Due Date</div>
          <div className="border rounded-lg px-3 py-2 flex items-center justify-between text-gray-400">
            <div className="flex items-center gap-2">
              <FiCalendar />
              mm/dd/yyyy
            </div>
            <FiChevronDown />
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">Reporter</div>
          <div className="border rounded-lg px-3 py-2 flex items-center justify-between text-gray-700">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-gray-200" />
              Allie Harmon
            </div>
            <FiChevronDown />
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">Tags</div>
          <div className="border rounded-lg px-3 py-2 text-gray-400">
            Add Tag +
          </div>
        </div>

        <div className="pt-2 space-y-2 text-xs text-gray-500">
          <div className="flex items-center justify-between border-t pt-3">
            <span className="font-semibold text-gray-600">TASKS</span>
            <span>›</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-600">COLLECTED FIELDS</span>
            <span>›</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-600">LINKED TICKETS</span>
            <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full">2</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-600">HISTORY</span>
            <span>›</span>
          </div>
        </div>
      </div>
    </div>
  );
}
