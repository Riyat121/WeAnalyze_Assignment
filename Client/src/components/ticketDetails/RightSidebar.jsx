import { useState } from "react";
import { FiChevronDown, FiCalendar, FiArrowRight } from "react-icons/fi";

export default function RightSidebar() {
  const [statusOpen, setStatusOpen] = useState(false);
  const [status, setStatus] = useState("To Do");
  const [openMenu, setOpenMenu] = useState(null);
  const [priority, setPriority] = useState("Medium");
  const [assignee, setAssignee] = useState("Allie Harmon");
  const [project, setProject] = useState("Administrative");
  const [ticketType, setTicketType] = useState("Task");
  const [dueDate, setDueDate] = useState("mm/dd/yyyy");
  const [reporter, setReporter] = useState("Allie Harmon");
  const [tag, setTag] = useState("Add Tag +");

  const statuses = [
    { label: "To Do", sub: "To Do" },
    { label: "Work in Progress", sub: "In Progress" },
    { label: "Needs Review", sub: "In Progress" },
    { label: "Completed", sub: "Done" }
  ];

  const priorities = ["Low", "Medium", "High", "Urgent"];
  const assignees = ["Allie Harmon", "Danny Amacher", "Priya Singh"];
  const projects = ["Administrative", "Capacity", "Billing"];
  const ticketTypes = ["Task", "Bug", "Question"];
  const dueDates = ["mm/dd/yyyy", "Today", "Tomorrow", "Next Week"];
  const reporters = ["Allie Harmon", "Danny Amacher", "Priya Singh"];
  const tags = ["Add Tag +", "UI", "Backend", "Billing"];

  const toggleMenu = (key) => {
    setOpenMenu(prev => (prev === key ? null : key));
  };

  return (
    <div className="w-[320px] bg-white border-l p-4">
      <div className="flex items-center justify-between mb-4 relative">
        <div className="relative">
          <button
            onClick={() => setStatusOpen(prev => !prev)}
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-sm font-semibold flex items-center gap-2"
          >
            {status}
            <FiChevronDown size={14} />
          </button>

          {statusOpen && (
            <div className="absolute left-0 top-11 w-52 bg-white border rounded-xl shadow-lg p-2 z-20">
              {statuses.map(item => (
                <button
                  key={item.label}
                  onClick={() => {
                    setStatus(item.label);
                    setStatusOpen(false);
                  }}
                  className="w-full flex items-start gap-2 px-2 py-2 rounded-lg hover:bg-gray-100 text-left"
                >
                  <FiArrowRight className="text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-700 font-medium">{item.label}</div>
                    <div className="text-xs text-gray-400">{item.sub}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="h-8 w-8 rounded-full border text-gray-400 hover:text-gray-600">
          x
        </button>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <div className="text-xs text-gray-500 mb-2">Priority</div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("priority")}
              className="w-full border rounded-lg px-3 py-2 flex items-center justify-between text-gray-700"
            >
              {priority}
              <FiChevronDown />
            </button>
            {openMenu === "priority" && (
              <div className="absolute left-0 top-11 w-full bg-white border rounded-lg shadow-lg p-1 z-20">
                {priorities.map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      setPriority(item);
                      setOpenMenu(null);
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">Assigned To</div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("assignee")}
              className="w-full border rounded-lg px-3 py-2 flex items-center justify-between text-gray-700"
            >
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gray-200" />
                {assignee}
              </div>
              <FiChevronDown />
            </button>
            {openMenu === "assignee" && (
              <div className="absolute left-0 top-11 w-full bg-white border rounded-lg shadow-lg p-1 z-20">
                {assignees.map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      setAssignee(item);
                      setOpenMenu(null);
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="text-xs text-blue-600 mt-1">Assign to me</div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">Project</div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("project")}
              className="w-full border rounded-lg px-3 py-2 flex items-center justify-between text-gray-700"
            >
              {project}
              <FiChevronDown />
            </button>
            {openMenu === "project" && (
              <div className="absolute left-0 top-11 w-full bg-white border rounded-lg shadow-lg p-1 z-20">
                {projects.map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      setProject(item);
                      setOpenMenu(null);
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">Ticket Type</div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("ticketType")}
              className="w-full border rounded-lg px-3 py-2 flex items-center justify-between text-gray-700"
            >
              {ticketType}
              <FiChevronDown />
            </button>
            {openMenu === "ticketType" && (
              <div className="absolute left-0 top-11 w-full bg-white border rounded-lg shadow-lg p-1 z-20">
                {ticketTypes.map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      setTicketType(item);
                      setOpenMenu(null);
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">Due Date</div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("dueDate")}
              className="w-full border rounded-lg px-3 py-2 flex items-center justify-between text-gray-400"
            >
              <div className="flex items-center gap-2">
                <FiCalendar />
                {dueDate}
              </div>
              <FiChevronDown />
            </button>
            {openMenu === "dueDate" && (
              <div className="absolute left-0 top-11 w-full bg-white border rounded-lg shadow-lg p-1 z-20">
                {dueDates.map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      setDueDate(item);
                      setOpenMenu(null);
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">Reporter</div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("reporter")}
              className="w-full border rounded-lg px-3 py-2 flex items-center justify-between text-gray-700"
            >
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-gray-200" />
                {reporter}
              </div>
              <FiChevronDown />
            </button>
            {openMenu === "reporter" && (
              <div className="absolute left-0 top-11 w-full bg-white border rounded-lg shadow-lg p-1 z-20">
                {reporters.map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      setReporter(item);
                      setOpenMenu(null);
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="text-xs text-gray-500 mb-2">Tags</div>
          <div className="relative">
            <button
              onClick={() => toggleMenu("tags")}
              className="w-full border rounded-lg px-3 py-2 text-gray-400 text-left"
            >
              {tag}
            </button>
            {openMenu === "tags" && (
              <div className="absolute left-0 top-11 w-full bg-white border rounded-lg shadow-lg p-1 z-20">
                {tags.map(item => (
                  <button
                    key={item}
                    onClick={() => {
                      setTag(item);
                      setOpenMenu(null);
                    }}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-md"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="pt-2 space-y-2 text-xs text-gray-500">
          <div className="flex items-center justify-between border-t pt-3">
            <span className="font-semibold text-gray-600">TASKS</span>
            <span>{">"}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-600">COLLECTED FIELDS</span>
            <span>{">"}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-600">LINKED TICKETS</span>
            <span className="text-[10px] bg-gray-100 px-2 py-0.5 rounded-full">2</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold text-gray-600">HISTORY</span>
            <span>{">"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
