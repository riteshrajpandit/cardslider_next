"use client";

import { Share2, Clock, RefreshCcw } from "lucide-react";

export default function NoMoreCards() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-white text-center">
      <div className="mb-8 w-64 h-64 relative overflow-hidden rounded-2xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://d1jj76g3lut4fe.cloudfront.net/processed/thumb/3SlwrLg8iB5sAM0vKM.mp4?Expires=1747278391&Signature=k5vlCbGzQ5u2Fsp99BCKY0JrWZaY8o~HG8kMhvwYKHJiNqTo2RNsWKw0YMwMaiV4ATdN481ou0eqEl06tcVQlrTSmXrPm9oQB7yvx-GeT~gybrMDQI5G8zjxUZA8cji4x3V~jtXEyI8NGwSBTxIFjtW~-b4duuOd0ggJ4ITKM9maP8YyknvxQmggCVy7rkBlgeb8vP7ZOQ8BYijEw6JTKE3jgCN0mBqt9KTrA67zde3k5C-MM9Tk8kXGEH6XNkEDb54MqQxWAVscYgShWzwgS6ZXUB42WNG1wFNQ9BXjytTB-EeWeia6WCiykSsZAEqXW~Cr1UlKXYWzKca1p7ig6Q__&Key-Pair-Id=K2YEDJLVZ3XRI#t=0.001"
            type="video/mp4"
          />
        </video>
      </div>
      <h2 className="text-2xl font-bold mb-2">No more matches</h2>
      <p className="text-gray-400 mb-8">currently, until then</p>
      
      <div className="flex space-x-4">
        <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
          <Clock className="w-6 h-6 text-white" />
        </button>
        <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
          <RefreshCcw className="w-6 h-6 text-white" />
        </button>
        <button className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gray-700 transition-colors">
          <Share2 className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}