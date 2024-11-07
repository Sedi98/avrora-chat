import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-[#212121] text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Foody AI Chat</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm">Salam, İstifadəçi!</span>
      </div>
    </header>
  );
};

export default Header;
