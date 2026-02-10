export default function MessageList({ tab }) {

  const publicMsgs = [
    { id: 1, text: "Public message example" }
  ];

  const privateMsgs = [
    { id: 2, text: "Private note example" }
  ];

  const messages = tab === "public" ? publicMsgs : privateMsgs;

  return (
    <div className="space-y-3">

      {messages.map(m => (
        <div key={m.id} className="bg-white border rounded-lg p-3">
          {m.text}
        </div>
      ))}

    </div>
  );
}
