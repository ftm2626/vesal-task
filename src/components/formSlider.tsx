import React from "react";
import NavigationButtons from "./navigationButtons";
import { mainSliderT } from "@/interface/dashboard";

export default function FormSlider({
  data,
  currentIndex,
  goToSlide,
}: {
  data: mainSliderT;
  currentIndex: number;
  goToSlide: (slideIndex: number) => void;
}) {
  return (
    <div className="absolute left-1 sm:left-12 lg:left-24 xl:left-32 top-0 bg-black/50 rounded-b-xl pt-16 lg:pt-20 pb-5 px-8 sm:px-16 text-white">
      <div className="flex text-center flex-col gap-7 lg:ga-9">
        <h4 className="font-bold text-2xl">وصال گشت رهام</h4>
        <h5 className="text-md">{data.main_title}</h5>
        <div className="flex flex-col gap-2 mx-6">
          {data.main_slider_buttons.map(({ id, title }) => (
            <button
              key={id}
              className="bg-white border-gray text-black rounded-md px-4 py-1"
            >
              {title}
            </button>
          ))}
        </div>
        <NavigationButtons goToSlide={goToSlide} currentIndex={currentIndex} />
      </div>
    </div>
  );
}
