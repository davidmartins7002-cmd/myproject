import React, { useState } from "react";

const Welldone = () => {
  const specialists = [
    {
      name: "Alex Hernandez",
      role: "CTO",
      img: "https://xtratheme.com/elementor/cryptocurrency-2/wp-content/uploads/sites/77/2020/08/m1.jpg",
    },
    {
      name: "Jane Hernandez",
      role: "Advisor",
      img: "https://xtratheme.com/elementor/cryptocurrency-2/wp-content/uploads/sites/77/2020/08/m2.jpg",
    },
    {
      name: "Dr. Mark Henrish",
      role: "Advisor",
      img: "https://xtratheme.com/elementor/cryptocurrency-2/wp-content/uploads/sites/77/2020/08/m3.jpg",
    },
    {
      name: "Dr David Villa",
      role: "Advisor",
      img: "https://xtratheme.com/elementor/cryptocurrency-2/wp-content/uploads/sites/77/2020/08/m4.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const visibleCards = 3;

  const nextSlide = () => {
    setIndex((prev) =>
      prev + visibleCards >= specialists.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? specialists.length - visibleCards : prev - 1
    );
  };

  return (
    <section
      style={{
        width: "100%",
        minHeight: "90vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "60px 80px",
        backgroundColor: "#fff",
        fontFamily: "Poppins, sans-serif",
        boxSizing: "border-box",
        position: "relative",
      }}
    >
      {/* LEFT TEXT SECTION */}
      <div style={{ flex: "1", paddingRight: "40px" }}>
        <h2
          style={{
            color: "#ffa500",
            fontSize: "36px",
            margin: "0 0 10px 0",
          }}
        >
          Our
        </h2>
        <h1
          style={{
            fontWeight: "700",
            fontSize: "44px",
            margin: "0 0 20px 0",
          }}
        >
          Specialists
        </h1>
        <p
          style={{
            fontSize: "18px",
            color: "#444",
            lineHeight: "1.6",
          }}
        >
          Our pro team are very <br /> reliable and smart
        </p>
      </div>

      {/* RIGHT SLIDER SECTION */}
      <div
        style={{
          flex: "2.5",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* SLIDER TRACK */}
        <div
          style={{
            display: "flex",
            transition: "transform 0.6s ease",
            transform: `translateX(-${index * (100 / visibleCards)}%)`,
            width: `${(specialists.length * 100) / visibleCards}%`,
          }}
        >
          {specialists.map((spec, i) => (
            <div
              key={i}
              style={{
                flex: `0 0 ${100 / visibleCards}%`,
                boxSizing: "border-box",
                padding: "20px",
              }}
            >
              <div
                style={{
                  textAlign: "center",
                  borderRadius: "20px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                  padding: "25px",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={spec.img}
                  alt={spec.name}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                    borderRadius: "15px",
                    marginBottom: "20px",
                  }}
                />
                <h3
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    marginBottom: "6px",
                  }}
                >
                  {spec.name}
                </h3>
                <p
                  style={{
                    color: "green",
                    fontWeight: "500",
                    fontSize: "16px",
                  }}
                >
                  {spec.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ARROW BUTTONS (Now outside overflow area) */}
      <div
        style={{
          position: "absolute",
          right: "100px",
          bottom: "80px",
          display: "flex",
          gap: "15px",
          zIndex: 10,
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            backgroundColor: "#ffa500",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            color: "#fff",
            fontSize: "22px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          style={{
            backgroundColor: "#ffa500",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            color: "#fff",
            fontSize: "22px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
          }}
        >
          →
        </button>
      </div>
    </section>
  );
};

export default Welldone;
