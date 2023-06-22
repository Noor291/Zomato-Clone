import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";

import DeliveryCategoryCard from "./DeliveryCategoryCard";

const DeliveryCarousel = () => {
  const categories = [
    {
        image:
          "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
        title: "Pizza",
        time:""
      },
      {
        image:
          "https://b.zmtcdn.com/data/o2_assets/52eb9796bb9bcf0eba64c643349e97211634401116.png",
        title: "Thali",
        time:""
      },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      title: "Chicken",
      time:""
    },
    {
        image:
          "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
        title: "Burger",
        time:""
      },
  
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
      title: "Samosa",
      time:""
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/83b1a4086e98dc584a7ce5d9a844a3191635166040.png",
      title: "Pastry",
      time:""
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
      title: "Rolls",
      time:""
    },
     {
        image:
          "https://b.zmtcdn.com/data/dish_images/e44c42ff4b60b025225c8691ef9735b11635781903.png",
        title: "Paneer",
        time:""
      },
  
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/1437bc204cb5c892cb22d78b4347f4651634827140.png",
      title: "Chaat",
      time:""
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
      title: "Paratha",
      time:""
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/5dbdb72a48cf3192830232f6853735301632716604.png",
      title: "Momos",
      time:""
    },
    {
        image:
          "https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png",
        title: "Fried Rice",
        time:""
      },
      {
        image:
          "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
        title: "Sandwich",
        time:""
      },
      {
        image:
          "https://b.zmtcdn.com/data/dish_images/c953e5ca07150e9a51f8b21102e20f7e1634805157.png",
        title: "Chole Bhature",
        time:""
      },
  ];

  const brands=[
    {
        image:
          "https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188051.png?output-format=webp",
        title: "Burger King",
        time:"20 min"
      },
      {
        image:
          "https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676521675.png?output-format=webp",
        title: "Subway",
        time:"18 min"
      },
      {
        image:
          "https://b.zmtcdn.com/data/brand_creatives/logos/9125a7319317e9fa213f8832705047ac_1602230690.png",
        title: "Domino's Pizza",
        time:"40 min"
      },
      {
        image:
          "https://b.zmtcdn.com/data/brand_creatives/logos/8d99caf8e66456a90a9d1853a9849392_1671190648.png?output-format=webp",
        title: "The Belgian Waffle Co.",
        time:"21 min"
      },
      {
        image:
          "https://b.zmtcdn.com/data/brand_creatives/logos/03e60b7cf092594ab6081704c1dbcf15_1536754546.png?output-format=webp",
        title: "Cafe Coffee Day",
        time:"20 min"
      },
      {
        image:
          "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613213827.png?output-format=webp",
        title: "Pizza Hut",
        time:"35 min"
      },
      {
        image:
          "https://b.zmtcdn.com/data/brand_creatives/logos/44c01f29b7ac24f90a8088a2837823d6_1670387959.png",
        title: "Boston & Co.",
        time:"24 min"
      },
  ]

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
    modules: [Navigation],
    className: "mySwiper",
    navigation: true,
  };

  return (
    <> <div className=" bg-neutral-100">
      <div className='ml-16 mr-16 pb-9 pt-7'>
      <h1 className="text-xl font-medium mt-4 md:mt-8 md:text-3xl md:font-medium mb-5">
        Inspiration for your first order
      </h1>
      <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
        {categories.map((food,index) => (
          <DeliveryCategoryCard {...food} key={index} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Swiper {...slideConfig}>
          {categories.map((food ,index) => (
            <SwiperSlide>
              <DeliveryCategoryCard {...food} key ={index}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
      </div>
      <div>
      <div className='ml-16 mr-16 pb-9 pt-7'>
      <h1 className="text-xl font-medium mt-4 md:mt-8 md:text-3xl md:font-medium mb-5">
        Top brands for you
      </h1>
      <div className="lg:hidden grid grid-cols-3 md:grid-cols-4 gap-3 justify-center">
        {brands.map((food,index) => (
          <DeliveryCategoryCard {...food} key={index} />
        ))}
      </div>
      <div className="hidden lg:block">
        <Swiper {...slideConfig}>
          {brands.map((food, index) => (
            <SwiperSlide>
              <DeliveryCategoryCard {...food} key={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      </div>
      </div>
    </>
  );
};

export default DeliveryCarousel;