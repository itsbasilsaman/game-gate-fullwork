import React from "react";

const ChatComponent: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-white border-r border-gray-200">
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-semibold">G2G</h1>
        </div>
        <div className="p-4">
          <input
            type="text"
            placeholder="Search name or order no."
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div className="p-4">
          <h2 className="text-sm font-semibold text-gray-500">Direct Messages</h2>
          <div className="mt-2">
            <div className="flex items-center space-x-3 p-2 hover:bg-gray-100 cursor-pointer">
              <img
                src="https://via.placeholder.com/40"
                alt="Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold">PayAHfee</p>
                <p className="text-xs text-gray-500">You: thyryry</p>
              </div>
              <span className="ml-auto text-xs text-gray-500">11:25</span>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
          <div>
            <h2 className="text-lg font-semibold">PayAHfee</h2>
            <p className="text-sm text-gray-500">Last seen 5 hours ago</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-bell"></i>
            </button>
            <button className="text-gray-500 hover:text-gray-700">
              <i className="fas fa-ellipsis-v"></i>
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="bg-orange-200 p-4 rounded-md mb-4">
            <h3 className="text-sm font-semibold">Safety Tips:</h3>
            <ul className="text-sm text-gray-700 list-disc pl-4">
              <li>
                Transactions or communications outside of G2G.com are not covered
                by GamerProtect.
              </li>
              <li>
                Avoid downloading programs or clicking external links from
                sellers.
              </li>
              <li>
                To ensure security, only deliver or replace account or product
                info through the order page.
              </li>
              <li>
                Report to G2G if a seller marks your order as delivered but
                delays it over 24 hours.
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <div className="flex justify-end">
              <div className="bg-green-100 p-3 rounded-lg">
                <p className="text-sm">thyryry</p>
              </div>
            </div>
            <p className="text-xs text-gray-500 text-right">11:25</p>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200 flex items-center space-x-4">
          <button className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-bold"></i>
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-italic"></i>
          </button>
          <input
            type="text"
            placeholder="Type message here"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-paperclip"></i>
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatComponent;
