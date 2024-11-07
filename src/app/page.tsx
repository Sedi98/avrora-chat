'use client';
import { useState } from "react";
import Header from "../components/Header";
import ChatArea from "../components/ChatArea";
import InputField from "../components/InputField";
import Sidebar from "../components/Sidebar";
import TypingIndicator from "../components/TypingIndicator";
import answers from "../utils/answers";
import keywords from "../utils/keywords";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

interface Chat {
  id: number;
  name: string;
  messages: Message[];
}

const Home: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([{ id: 1, name: "Çat #1", messages: [] }]);
  const [activeChatId, setActiveChatId] = useState<number>(1);
  const [isTyping, setIsTyping] = useState(false);

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  const handleSend = (text: string) => {
    if (!activeChat) return;

    const userMessage: Message = { id: Date.now(), text, sender: "user" };
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChatId ? { ...chat, messages: [...chat.messages, userMessage] } : chat
      )
    );

    setIsTyping(true);
    setTimeout(() => {
      generateAIResponse(text);
    }, 1000);
  };

  const getRandomResponse = (responseArray: string[]) => {
    const randomIndex = Math.floor(Math.random() * responseArray.length);
    return responseArray[randomIndex];
  };

  const generateAIResponse = (userInput: string) => {
    if (!activeChat) return;

    const normalizedInput = userInput.toLowerCase();
    let responseCategory: keyof typeof answers = "love";

    for (const category in keywords) {
      const keywordList = keywords[category as keyof typeof keywords];
      if (keywordList.some((keyword) => normalizedInput.includes(keyword))) {
        responseCategory = category as keyof typeof answers;
        break;
      }
    }

    const responseText = getRandomResponse(answers[responseCategory]);

    const aiMessage: Message = {
      id: Date.now() + 1,
      text: responseText,
      sender: "ai",
    };

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChatId ? { ...chat, messages: [...chat.messages, aiMessage] } : chat
      )
    );

    setIsTyping(false);
  };

  const switchChat = (chatId: number) => {
    setActiveChatId(chatId);
  };

  const createNewChat = () => {
    const newChatId = Date.now();
    const newChat: Chat = { id: newChatId, name: `Çat #${chats.length + 1}`, messages: [] };
    setChats((prevChats) => [...prevChats, newChat]);
    setActiveChatId(newChatId);
  };

  return (
    <div className=" h-screen bg-[#212121] text-gray-200">
      <div className="flex w-full h-full shadow-lg rounded-lg overflow-hidden">
        <Sidebar chats={chats} onSwitchChat={switchChat} onNewChat={createNewChat} />
        <div className="flex flex-col w-full">
          <Header />
          <ChatArea messages={activeChat?.messages || []} />
          {isTyping && <TypingIndicator />}
          <InputField onSend={handleSend} />
        </div>
      </div>
    </div>
  );
};

export default Home;
