import React, { useState } from 'react';
import '../App.css'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const StatsCounter = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.6 });
  const [hoverIndex, setHoverIndex] = useState(null);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: '#fff',
    fontFamily: 'Arial, sans-serif',
    flexWrap: 'wrap'
  };

  const statBoxStyle = (isHovered) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px',
  minWidth: '120px',
  padding: '20px',
  borderRadius: '15px',
  backgroundColor: '#ffffff', // Always white
  boxShadow: isHovered ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
  transform: isHovered ? 'scale(1.03)' : 'scale(1)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  opacity: 1,                // ✅ ensure fully visible
  filter: 'none'             // ✅ no dimming or fading
});



  const getTextColor = (isHovered, color) => isHovered ? color : '#5cbe2d';
  const getLabelColor = (isHovered, color) => isHovered ? '#ffaa00' : '#ffaa00';

  const labelStyle = (isHovered, isHighlighted, bgColor, customLabelBg, customLabelText) => ({
  marginTop: '10px',
  padding: '10px 20px',
  borderRadius: '25px',
  fontSize: '16px',
  backgroundColor: isHighlighted
    ? isHovered ? bgColor : (customLabelBg || '#fca311')
    : isHovered ? bgColor : '#f0f0f0',
  color: isHighlighted
    ? isHovered ? '#fff' : (customLabelText || '#fff')
    : isHovered ? '#fff' : '#333',
  transition: 'background-color 0.3s ease, color 0.3s ease'
});


  const renderStat = (
    value,
    suffix,
    label,
    index,
    options // includes hoverBg, textColor, isOrange, isHighlighted
  ) => {
    const isHovered = hoverIndex === index;

    return (
        <div
         key={index}
         style={statBoxStyle(isHovered)} // Removed hoverBg here
         onMouseEnter={() => setHoverIndex(index)}
         onMouseLeave={() => setHoverIndex(null)}
        >

        
        <div style={{
         fontSize: '64px',
         fontWeight: '500',
         display: 'flex',
         alignItems: 'flex-end',
         color: isHovered ? options.textColor : (options.isOrange ? '#fca311' : '#66bb36') // ✅ explicit
         }}>
            {inView && <CountUp end={value} duration={2} />}
             {suffix}
        </div>


       <div style={labelStyle(
             isHovered,
             options.isHighlighted,
             options.hoverBg,
             options.labelBgColor,
             options.labelTextColor
            )}>
            {label}
        </div>

      </div>
    );
  };

  return (
    <div ref={ref} style={containerStyle}>
      {renderStat(25, 'M', '$ In our system', 0, {
        hoverBg: '#e0f5e9',      // light green
        textColor: '#ffaa00',    // dark green
        isOrange: false,
        isHighlighted: false
      })}
      {renderStat(36, '+', 'Supported Countries', 1, {
         hoverBg: '#e0f5e9',          // Light green hover
         textColor: '#66bb36',        // ✅ GREEN for label (still applies on hover)
         isOrange: true,              // ✅ Make the number ORANGE instead of green
         isHighlighted: true,         // Keeps pill shape
         labelBgColor: '#66bb36',     // ✅ Green label background
         labelTextColor: '#fff'       // White text on green
      })}

      {renderStat(98, 'k', 'Active Users', 2, {
        hoverBg: '#e0f5e9',      // light green
        textColor: '#ffaa00',    // dark green
        isOrange: false,
        isHighlighted: false
      })}
      {renderStat(7, 'k+', 'Live Transactions', 3, {
        hoverBg: '#e0f0ff',      // light blue
        textColor: '#5cbe2d',    // dark blue
        isOrange: true,
        isHighlighted: false
      })}
    </div>
  );
};

export default StatsCounter;
