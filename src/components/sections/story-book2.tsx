// components/Ebook.tsx
import React from "react";
import HTMLFlipBook from "react-pageflip";

const gradients = [
  "bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500",
  "bg-gradient-to-br from-green-400 via-blue-500 to-purple-600",
  "bg-gradient-to-br from-yellow-400 via-red-500 to-pink-500",
  "bg-gradient-to-br from-purple-400 via-pink-500 to-red-500",
  "bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-500",
  "bg-gradient-to-br from-teal-400 via-blue-500 to-purple-600",
  "bg-gradient-to-br from-orange-400 via-red-500 to-pink-500",
  "bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600",
  "bg-gradient-to-br from-emerald-400 via-teal-500 to-blue-600",
  "bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600",
  "bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600",
];

const StorybookSection = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <HTMLFlipBook
        style={{}}
        width={960} // 16:9 ratio with height = 540
        height={540}
        size="stretch"
        minWidth={315}
        maxWidth={2000}
        minHeight={420}
        maxHeight={1500}
        maxShadowOpacity={0.5}
        showCover={false}
        mobileScrollSupport={true}
        className="shadow-2xl rounded-xl overflow-hidden"
        startPage={0}
        drawShadow={true}
        flippingTime={1000}
        usePortrait={true}
        startZIndex={0}
        autoSize={true}
        clickEventForward={true}
        useMouseEvents={true}
        swipeDistance={30}
        showPageCorners={true}
        disableFlipByClick={false}
      >
        {gradients.map((gradient, index) => (
          <div
            key={index}
            className={`w-full h-full ${gradient} flex justify-center items-center text-white text-4xl font-bold`}
          >
            Page {index + 1}
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
};

export default StorybookSection;
