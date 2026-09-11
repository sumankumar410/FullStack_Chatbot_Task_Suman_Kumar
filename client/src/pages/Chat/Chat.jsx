import { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ChatMessage from "../../components/ChatMessage/ChatMessage";
import { getBotResponse } from "../../utils/chatbotLogic";
import { FiSend, FiTrash2 } from "react-icons/fi";

const getFormattedTime = () => {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const initialWelcomeMessage = {
  id: "welcome-message",
  text: "Hi! I'm DroneTV's AI Assistant. How can I help you today? You can ask about our services, courses, registration, or contact details.",
  sender: "bot",
  timestamp: getFormattedTime(),
};

export default function Chat() {
  const [messages, setMessages] = useState([initialWelcomeMessage]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const suggestions = [
    "What services do you offer?",
    "Available courses",
    "How to contact?",
    "I want to register",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputText).trim();
    if (!text || isTyping) return;

    const userMessage = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: getFormattedTime(),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (!textToSend) {
      setInputText("");
    }
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = getBotResponse(text);
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: "bot",
        timestamp: getFormattedTime(),
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 700);
  };

  const handleClearChat = () => {
    setMessages([
      {
        ...initialWelcomeMessage,
        id: Date.now().toString(),
        timestamp: getFormattedTime(),
      },
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <Navbar />

      <main className="flex-grow flex items-center justify-center p-3 sm:p-6 md:p-8">
        <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-gray-200/80 flex flex-col h-[82vh] overflow-hidden">
          <div className="px-6 py-4 bg-[#1e3a5f] text-white flex items-center justify-between shadow-sm flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-xl shadow-inner">
                🤖
              </div>
              <div>
                <h2 className="text-base font-bold leading-tight">DroneTV AI Assistant</h2>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs text-blue-200">Online</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClearChat}
              className="flex items-center gap-1.5 text-xs text-blue-200 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg transition-colors"
              title="Reset conversation"
            >
              <FiTrash2 className="w-3.5 h-3.5" />
              <span>Clear Chat</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#f9fafb] space-y-3">
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            {messages.length === 1 && (
              <div className="mt-4 pt-2">
                <p className="text-xs font-semibold text-gray-400 mb-2.5 px-1">
                  Suggested Questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSendMessage(suggestion)}
                      className="text-xs font-medium bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 border border-blue-200 hover:border-blue-300 px-3.5 py-2 rounded-full shadow-sm transition-all duration-150"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-gray-500 italic py-1 px-3">
                <div className="flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
                <span>DroneTV Assistant is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 sm:p-4 bg-white border-t border-gray-100 flex-shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question here..."
                disabled={isTyping}
                className="flex-1 px-4 py-3 text-sm bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-white outline-none transition-all placeholder:text-gray-400"
              />
              <button
                type="submit"
                disabled={!inputText.trim() || isTyping}
                className="w-11 h-11 rounded-2xl bg-blue-600 hover:bg-blue-700 disabled:bg-gray-200 text-white disabled:text-gray-400 flex items-center justify-center shadow-md hover:shadow-lg disabled:shadow-none transition-all flex-shrink-0"
              >
                <FiSend className="w-4 h-4 ml-0.5" />
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}