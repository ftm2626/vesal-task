import { dummyData } from "@/utils/dummyData";
import React from "react";

export default function NavigationButtons({
  currentIndex,
  goToSlide,
}: {
  currentIndex: number;
  goToSlide: (slideIndex: number) => void;
}) {
  return (
    <div className="flex top-4 justify-center py-2 gap-2">
      {dummyData.data.main_sliders.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className="text-2xl"
        >
          <div
            className={`w-1.5 h-1.5  rounded-full ${
              slideIndex === currentIndex
                ? "bg-red-600"
                : "cursor-pointer bg-red-300"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
}
