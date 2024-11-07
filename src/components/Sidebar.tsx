import React from "react";
import { FaPlus } from "react-icons/fa";

interface SidebarProps {
  chats: { id: number; name: string }[];
  onSwitchChat: (chatId: number) => void;
  onNewChat: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  chats,
  onSwitchChat,
  onNewChat,
}) => {
  return (
    <aside className="w-64 bg-[#171717] p-4  flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-300">
          Çat siyahısı
        </h2>
        <button
          onClick={onNewChat}
          className="p-2 bg-white text-black rounded-full hover:bg-[#c1c1c1]"
        >
          <FaPlus />
        </button>
      </div>

      <ul className="flex-1 space-y-2 overflow-y-auto">
        {chats.map((chat) => (
          <li
            key={chat.id}
            className="p-2 text-sm text-gray-200 rounded-lg cursor-pointer hover:bg-[#212121] hover:text-white"
            onClick={() => onSwitchChat(chat.id)}
          >
            {chat.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
