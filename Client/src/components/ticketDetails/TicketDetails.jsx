import { useState } from "react";
import ReplyBox from "./ReplyBox";
import MessageList from "./MessageList";

export default function TicketDetails({ ticket }) {

  const [activeTab, setActiveTab] = useState("public");
  const [reply, setReply] = useState("");
  const [publicMsgs, setPublicMsgs] = useState([
    { id: 1, text: "Public message example" }
  ]);
  const [privateMsgs, setPrivateMsgs] = useState([
    { id: 2, text: "Private note example" }
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
    <div className="flex-1 p-6 bg-gray-50">

      <h2 className="text-xl font-semibold mb-4">
        {ticket.title}
      </h2>

      {/* Tabs */}
      <div className="flex gap-6 border-b mb-4">

        <button
          onClick={() => setActiveTab("public")}
          className={activeTab === "public"
            ? "border-b-2 border-blue-500 pb-2"
            : "pb-2 text-gray-400"}
        >
          Public Reply
        </button>

        <button
          onClick={() => setActiveTab("private")}
          className={activeTab === "private"
            ? "border-b-2 border-blue-500 pb-2"
            : "pb-2 text-gray-400"}
        >
          Private Comment
        </button>

      </div>

      <ReplyBox reply={reply} setReply={setReply} onSend={handleSend} />

      <MessageList messages={activeTab === "public" ? publicMsgs : privateMsgs} />

    </div>
  );
}
