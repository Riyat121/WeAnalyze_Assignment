export default function MessageList({ messages }) {

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
