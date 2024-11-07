import React from "react";

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-center space-x-2 p-3">
      <span className="animate-pulse bg-gray-400 rounded-full h-2 w-2"></span>
      <span className="animate-pulse bg-gray-400 rounded-full h-2 w-2"></span>
      <span className="animate-pulse bg-gray-400 rounded-full h-2 w-2"></span>
    </div>
  );
};

export default TypingIndicator;
