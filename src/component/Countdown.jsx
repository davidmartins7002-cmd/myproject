import React, { useState, useEffect } from "react";


const CountdownTimer = () => {
  // Set your target date here (example: 73 days from now)
  const targetDate = new Date("2025-12-22T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "40px",
    backgroundColor: "white",
  };

  const boxStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "120px",
    height: "120px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const numberStyle = {
    color: "#ffaa00",
    fontSize: "36px",
    fontWeight: "bold",
  };

  const labelStyle = {
    color: "#555",
    fontSize: "16px",
    marginTop: "6px",
  };

  return (
    <div  style={containerStyle}>
      <div style={boxStyle}>
        <div style={numberStyle}>{timeLeft.days}</div>
        <div style={labelStyle}>Days</div>
      </div>
      <div style={boxStyle}>
        <div style={numberStyle}>{timeLeft.hours}</div>
        <div style={labelStyle}>Hours</div>
      </div>
      <div style={boxStyle}>
        <div style={numberStyle}>{timeLeft.minutes}</div>
        <div style={labelStyle}>Minutes</div>
      </div>
      <div style={boxStyle}>
        <div style={numberStyle}>{timeLeft.seconds}</div>
        <div style={labelStyle}>Seconds</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
