export default function ChatMessage({ message }) {
  const isUser = message?.sender === "user";

  return (
    <div
      className={`flex w-full my-2.5 items-end gap-2 transition-all duration-300 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm flex-shrink-0 shadow-sm">
          
        </div>
      )}
      <div className={`flex flex-col ${isUser ? "items-end" : "items-start"} max-w-[75%]`}>
        <div
          className={`px-4 py-2.5 text-sm leading-relaxed break-words shadow-sm ${
            isUser
              ? "bg-[#3b82f6] text-white rounded-tl-2xl rounded-bl-2xl rounded-br-2xl"
              : "bg-[#f3f4f6] text-gray-800 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl border border-gray-200/60"
          }`}
        >
          <p className="whitespace-pre-wrap">{message?.text}</p>
        </div>
        {message?.timestamp && (
          <span className="text-[11px] text-gray-400 mt-1 px-1">
            {message.timestamp}
          </span>
        )}
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-sm flex-shrink-0 shadow-sm">
          
        </div>
      )}
    </div>
  );
}