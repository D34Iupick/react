import React, { useState } from 'react';
import './styles/tailwind.css'
export default function Popup() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleToggle}
      >
        Open Popup
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50"
          onClick={handleToggle}
        >
          <div
            className="max-w-md w-full bg-white rounded-lg shadow-md p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-bold mb-2">Popup Title</h2>
            <p className="text-gray-600">This is a popup made with Tailwind CSS and React.</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleToggle}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
