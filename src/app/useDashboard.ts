import { useEffect, useState } from "react";
import { dummyData } from "../utils/dummyData";

export default function useDashboard() {
  // fetch Api
  async function fetchSlides() {
    const res = await fetch(
      "https://api-vesal.dev-vesal.ir/api/test/mainSliders",
      {
        method: "get",
        headers: {
          Authorization: "18|i5XG84PtAYhz96gIpQxJZPLotvNVoCN6eDYmDNWK",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
    const slides = await res.json();
    return slides;
  }

  // calculate the slide
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? dummyData.data.main_sliders.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === dummyData.data.main_sliders.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.deltaY > 0 ? prevSlide() : nextSlide();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === dummyData.data.main_sliders.length - 1 ? 0 : prevIndex + 1
      );
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return {
    goToSlide,
    currentIndex,
    handleWheel,
    fetchSlides
  };
}
