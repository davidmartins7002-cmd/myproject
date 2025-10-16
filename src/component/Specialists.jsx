import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Dummy Data
const Ourspecialists = [
  {
    name: 'Alex Hernandez',
    role: 'CTO',
    image: 'https://via.placeholder.com/150x150.png?text=Alex',
  },
  {
    name: 'Jane Hernandez',
    role: 'Advisor',
    image: 'https://via.placeholder.com/150x150.png?text=Jane',
  },
  {
    name: 'Dr. Mark Henrish',
    role: 'Advisor',
    image: 'https://via.placeholder.com/150x150.png?text=Mark',
  },
];

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <div
    className="absolute bottom-0 right-14 z-10 cursor-pointer bg-orange-400 text-white w-10 h-10 flex items-center justify-center rounded-full"
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute bottom-0 right-0 z-10 cursor-pointer bg-orange-400 text-white w-10 h-10 flex items-center justify-center rounded-full"
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const Specialists = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // You can change this based on screen size
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-start gap-8 px-6 py-12 bg-white">
      
      {/* Left Text */}
      <div className="md:w-1/3">
        <h2 className="text-4xl font-bold">
          <span className="text-orange-500">Our</span>{' '}
          <span className="text-black">Specialists</span>
        </h2>
        <p className="mt-6 text-gray-600 text-lg">
          Our pro team are very <br />
          reliable and smart
        </p>
      </div>

      {/* Right Slider */}
      <div className="md:w-2/3 relative">
        <Slider {...settings}>
          {Ourspecialists.map((member, index) => (
            <div key={index} className="px-3">
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-lg object-cover mb-4"
                />
                <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
                <p className="text-green-500 mt-1 font-medium">{member.role}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Specialists;
