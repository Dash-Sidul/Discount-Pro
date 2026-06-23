import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1200",
    title: "Save Up To 70%",
    description: "Discover amazing discounts from top brands.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
    title: "Exclusive Deals",
    description: "Find the best coupons and offers every day.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200",
    title: "Shop Smarter",
    description: "Save more with verified discount coupons.",
  },
];

const BannerSlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      loop={true}
      className="rounded-2xl overflow-hidden"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="hero min-h-[500px]"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="hero-overlay bg-black/50"></div>

            <div className="hero-content text-center text-white">
              <div className="max-w-lg">
                <h1 className="mb-4 text-5xl font-bold">
                  {slide.title}
                </h1>

                <p className="mb-6 text-lg">
                  {slide.description}
                </p>

                <div className="badge badge-primary badge-lg">
                  Discount Pro
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;