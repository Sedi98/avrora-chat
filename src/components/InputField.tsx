import React, { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const InputField: React.FC<{ onSend: (message: string) => void }> = ({
  onSend,
}) => {
  const [message, setMessage] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <form
      className="bg-[#2f2f2f] flex items-center w-full lg:w-1/2 max-w-4xl mx-auto  p-2 px-6 rounded-2xl mb-4"
      onSubmit={handleSend}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Mesajı daxil et..."
        className="flex-1 p-3 rounded-lg bg-[#2f2f2f] text-white placeholder-gray-400 focus:outline-none"
      />
      <button
        title="Göndər"
        className="ml-3 p-2 bg-white text-black rounded-full hover:bg-[#c1c1c1]"
      >
        <FaArrowUp />
      </button>
    </form>
  );
};

export default InputField;
