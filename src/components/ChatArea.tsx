import React from "react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

const ChatArea: React.FC<{ messages: Message[] }> = ({ messages }) => {
  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#212121">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`p-4 max-w-xs lg:max-w-md rounded-lg ${
            message.sender === "user" ? "bg-[#2f2f2f] text-white ml-auto" : "bg-gray-700 text-gray-100 mr-auto"
          }`}
        >
          {message.text}
        </div>
      ))}
    </div>
  );
};

export default ChatArea;
