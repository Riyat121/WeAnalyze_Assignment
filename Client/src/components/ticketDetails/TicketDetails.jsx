import { useEffect, useState } from "react";
import ReplyBox from "./ReplyBox";
import MessageList from "./MessageList";
import { COMMENTS_API } from "../../config/api";

export default function TicketDetails({ ticket }) {

  const [activeTab, setActiveTab] = useState("public");
  const [reply, setReply] = useState("");
  const [author, setAuthor] = useState("Allie Harmon");
  const [publicMsgs, setPublicMsgs] = useState([]);
  const [privateMsgs, setPrivateMsgs] = useState([]);
  const authors = ["Allie Harmon", "Danny Amacher", "Priya Singh", "Riya Tiwari"];

  useEffect(() => {
    if (!ticket) return;
    const controller = new AbortController();

    const load = async () => {
      try {
        const [pubRes, privRes] = await Promise.all([
          fetch(`${COMMENTS_API}?ticketId=${ticket.id}&isPrivate=false`, { signal: controller.signal }),
          fetch(`${COMMENTS_API}?ticketId=${ticket.id}&isPrivate=true`, { signal: controller.signal })
        ]);
        const [pub, priv] = await Promise.all([pubRes.json(), privRes.json()]);
        setPublicMsgs(pub);
        setPrivateMsgs(priv);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Failed to load comments", err);
        }
      }
    };

    load();
    return () => controller.abort();
  }, [ticket?.id]);

  const handleSend = () => {
    const text = reply.trim();
    if (!text) return;

    const payload = {
      ticketId: String(ticket.id),
      author,
      text,
      isPrivate: activeTab === "private"
    };

    fetch(COMMENTS_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(created => {
        if (activeTab === "public") {
          setPublicMsgs(prev => [...prev, created]);
        } else {
          setPrivateMsgs(prev => [...prev, created]);
        }
        setReply("");
      })
      .catch(err => {
        console.error("Failed to create comment", err);
      });
  };

  const handleDelete = (id, isPrivate) => {
    fetch(`${COMMENTS_API}/${id}`, { method: "DELETE" })
      .then(() => {
        if (isPrivate) {
          setPrivateMsgs(prev => prev.filter(m => m._id !== id));
        } else {
          setPublicMsgs(prev => prev.filter(m => m._id !== id));
        }
      })
      .catch(err => {
        console.error("Failed to delete comment", err);
      });
  };

  const handleUpdate = (id, text, isPrivate) => {
    fetch(`${COMMENTS_API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })
    })
      .then(res => res.json())
      .then(updated => {
        if (isPrivate) {
          setPrivateMsgs(prev => prev.map(m => (m._id === id ? updated : m)));
        } else {
          setPublicMsgs(prev => prev.map(m => (m._id === id ? updated : m)));
        }
      })
      .catch(err => {
        console.error("Failed to update comment", err);
      });
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
       
      </div>

      {/* Tabs */}
      <div className="flex gap-6 border-b mb-4">

        <button
          onClick={() => setActiveTab("public")}
          className={activeTab === "public"
            ? "text-sm text-gray-700 border-b-2 border-blue-500 pb-2"
            : "text-sm text-gray-400 pb-2 hover:text-gray-600"}
        >
          Public Reply
        </button>

        <button
          onClick={() => setActiveTab("private")}
          className={activeTab === "private"
            ? "text-sm text-gray-700 border-b-2 border-blue-500 pb-2"
            : "text-sm text-gray-400 pb-2 hover:text-gray-600"}
        >
          Private Comment
        </button>

      </div>

      <div className="flex items-center gap-3 mb-3">
        <label className="text-xs text-gray-500">Author</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="text-xs border rounded-md px-2 py-1 text-gray-600 bg-white"
        >
          {authors.map(a => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </div>

      <ReplyBox reply={reply} setReply={setReply} onSend={handleSend} />

      <MessageList
        messages={activeTab === "public" ? publicMsgs : privateMsgs}
        onDelete={(id) => handleDelete(id, activeTab === "private")}
        onUpdate={(id, text) => handleUpdate(id, text, activeTab === "private")}
      />

    </div>
  );
}
