"use client";
import useDashboard from "./useDashboard";
import { dummyData } from "../utils/dummyData";
import FormSlider from "@/components/formSlider";
import NavigationButtons from "@/components/navigationButtons";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { handleWheel, goToSlide, currentIndex, fetchSlides } = useDashboard();
  const { data, isLoading, error } = useQuery({
    queryKey: ["slides"],
    queryFn: fetchSlides,
  });

  if (isLoading)
    return (
      <div className="h-screen w-full animate-pulse flex items-center justify-center text-green-600 text-2xl">
        در حال لود کردن
      </div>
    );

  return (
    <div
      className="max-w-full h-[680px] w-full m-auto relative group"
      onWheel={handleWheel}
    >
      <div
        style={{
          backgroundImage: `url(${dummyData.data.main_sliders[currentIndex].src})`,
        }}
        className="w-full h-full bg-center bg-cover duration-500 relative"
      ></div>
      <FormSlider
        data={dummyData.data.main_sliders[currentIndex]}
        goToSlide={goToSlide}
        currentIndex={currentIndex}
      />
      <div className="absolute bottom-5 left-[48%] w-[4%] flex justify-center items-center">
        <NavigationButtons goToSlide={goToSlide} currentIndex={currentIndex} />
      </div>
      <div
        className="h-[350px] w-[220px] md:h-[400px] lg:h-[450px] lg:w-[280px] bg-center bg-cover absolute -bottom-14 md:-bottom-20 lg:-bottom-24 right-1 sm:right-12 lg:right-24 xl:right-32 rounded-2xl border-4 border-gray-800 duration-300 hover:scale-125"
        style={{
          backgroundImage: `url(${dummyData.data.main_sliders[currentIndex].src})`,
        }}
      ></div>
    </div>
  );
}
