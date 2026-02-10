import { useState } from "react";
import ReplyBox from "./ReplyBox";
import MessageList from "./MessageList";

export default function TicketDetails({ ticket }) {

  const [activeTab, setActiveTab] = useState("public");
  const [reply, setReply] = useState("");
  const [publicMsgs, setPublicMsgs] = useState([
    { id: 1, author: "Allie Harmon", time: "Feb 9, 2022 10:31 AM", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 2, author: "Danny Amacher", time: "Feb 10, 2022 11:02 AM", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { id: 3, author: "Allie Harmon", time: "Feb 11, 2022 11:18 AM", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ]);
  const [privateMsgs, setPrivateMsgs] = useState([
    { id: 4, author: "Allie Harmon", time: "Feb 9, 2022 11:35 AM", text: "Private note: follow up with customer on the attachment." },
    { id: 5, author: "Danny Amacher", time: "Feb 10, 2022 12:10 PM", text: "Internal: check logs for OPS-102 before replying." }
  ]);

  const handleSend = () => {
    const text = reply.trim();
    if (!text) return;

    const newMessage = { id: Date.now(), text };
    if (activeTab === "public") {
      setPublicMsgs(prev => [...prev, newMessage]);
    } else {
      setPrivateMsgs(prev => [...prev, newMessage]);
    }
    setReply("");
  };

  if (!ticket) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-400">
        Select a ticket
      </div>
    );
  }

  return (
    <div className="flex-1 p-6 bg-gradient-to-b from-gray-50 to-white">

      <div className="flex items-start justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            {ticket.title}
          </h2>
          <p className="text-xs text-gray-400 mt-1">
            {ticket.code} • Created Jun 2 • {ticket.project || "Administrative"}
          </p>
        </div>
        <button className="text-xs px-3 py-1.5 rounded-full bg-blue-600 text-white shadow-sm">
          To Do
        </button>
      </div>

      {/* Tabs */}
      <div className="inline-flex gap-2 bg-white border rounded-full p-1 mb-4 shadow-sm">

        <button
          onClick={() => setActiveTab("public")}
          className={activeTab === "public"
            ? "px-4 py-1.5 text-sm rounded-full bg-blue-600 text-white"
            : "px-4 py-1.5 text-sm rounded-full text-gray-500 hover:text-gray-700"}
        >
          Public Reply
        </button>

        <button
          onClick={() => setActiveTab("private")}
          className={activeTab === "private"
            ? "px-4 py-1.5 text-sm rounded-full bg-blue-600 text-white"
            : "px-4 py-1.5 text-sm rounded-full text-gray-500 hover:text-gray-700"}
        >
          Private Comment
        </button>

      </div>

      <ReplyBox reply={reply} setReply={setReply} onSend={handleSend} />

      <MessageList messages={activeTab === "public" ? publicMsgs : privateMsgs} />

    </div>
  );
}
