import { useState } from "react";

export default function Images() {
  const images = [
    { id: 1, src: "https://images.pexels.com/photos/31527637/pexels-photo-31527637.jpeg" },
    { id: 2, src: "https://images.pexels.com/photos/31630209/pexels-photo-31630209.jpeg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const showNext = () =>
    setCurrentIndex((prev) => (prev + 1) % images.length);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Image Viewer</h1>

      <div className="w-full max-w-md space-y-4">
        <img
          src={images[currentIndex].src}
          alt={`Image ${currentIndex + 1}`}
          className="rounded-md shadow-lg w-full"
        />

        <div className="flex gap-4 justify-center">
          <button
            onClick={showPrev}
            className="px-6 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            Previous
          </button>
          <button
            onClick={showNext}
            className="px-6 py-2 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
